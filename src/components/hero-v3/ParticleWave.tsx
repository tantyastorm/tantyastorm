import { useEffect, useRef } from "react";

type Pointer = { x: number; y: number };
type WaveLayer = { xShift: number; zShift: number; yOffset: number; elevationScale: number; opacity: number; rowStep: number; blur: number; dotStep: number; lineVisible: boolean };

export function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<Pointer>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let isVisible = true;
    let intersectsViewport = true;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 1;
    let height = 1;
    let columns = 0;
    let rows = 0;
    let pixelRatio = 1;
    let lastDrawTime = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const compact = width < 700;
      columns = compact ? 30 : Math.min(110, Math.max(76, Math.floor(width / 15)));
      rows = compact ? 14 : Math.min(43, Math.max(29, Math.floor(height / 16)));
    };

    const surface = (x: number, z: number, time: number) => {
      const right = Math.pow(Math.max(0, x), 1.42);
      const wideSwell = Math.sin(x * 4.25 + z * 2.7 + time * 0.00016) * 0.58;
      const crossingSwell = Math.cos(x * 2.1 - z * 5.4 - time * 0.00011) * 0.32;
      const fineSwell = Math.sin((x + z) * 8.4 + time * 0.00021) * 0.1;
      const ridgeEnvelope = Math.pow(Math.max(0, x - 0.22), 0.7) * (0.46 + z * 0.54);
      const secondaryRidges = Math.sin(x * 9.6 - z * 6.8 + time * 0.00022) * 0.24 * ridgeEnvelope;
      const crossRidges = Math.cos(x * 6.2 + z * 11.4 - time * 0.00016) * 0.16 * ridgeEnvelope;
      const tertiaryRidges = Math.sin(x * 15.4 + z * 8.9 + time * 0.00018) * 0.13 * ridgeEnvelope;
      const diagonalRidges = Math.cos(x * 11.1 - z * 14.2 - time * 0.00014) * 0.1 * ridgeEnvelope;
      // These are particle terrain ridges, not decorative strokes: each band
      // pushes the actual dot grid up into a separate mountain silhouette.
      const ridge = (center: number, width: number, depth: number, depthWidth: number, height: number, lean = 0) => {
        const profile = Math.max(0, 1 - Math.abs(x - center - (z - depth) * lean) / width);
        const falloff = Math.exp(-((z - depth) ** 2) / depthWidth);
        return Math.pow(profile, 1.22) * falloff * height;
      };
      const cyanRise = ridge(0.5, 0.2, 0.71, 0.19, 1.28, -0.22);
      const violetRise = ridge(0.67, 0.16, 0.51, 0.12, 1.15, 0.3);
      const magentaRise = ridge(0.86, 0.13, 0.31, 0.1, 1.62, -0.18);
      const nearRise = ridge(0.6, 0.2, 0.91, 0.14, 0.82, 0.12);
      const mountainOne = ridge(0.39, 0.105, 0.58, 0.032, 0.8, -0.15);
      const mountainTwo = ridge(0.57, 0.09, 0.44, 0.025, 1.02, 0.11);
      const mountainThree = ridge(0.74, 0.12, 0.62, 0.035, 0.76, -0.08);
      const mountainDetail = Math.sin(x * 12.5 - z * 8.2 + time * 0.00012) * Math.pow(Math.max(0, x - 0.35), 1.3) * 0.14;
      const crestLift = right * (0.55 + Math.sin(z * 4.8 + x * 1.8) * 0.18);
      return (wideSwell + crossingSwell + fineSwell + secondaryRidges + crossRidges + tertiaryRidges + diagonalRidges + crestLift + mountainDetail) * 48 + cyanRise * 72 + violetRise * 68 + magentaRise * 86 + nearRise * 55 + mountainOne * 57 + mountainTwo * 70 + mountainThree * 54;
    };

    const layers: WaveLayer[] = [
      { xShift: -0.04, zShift: -0.22, yOffset: -68, elevationScale: 0.88, opacity: 0.48, rowStep: 2, blur: 0, dotStep: 3, lineVisible: true },
      { xShift: 0, zShift: 0.03, yOffset: 14, elevationScale: 0.96, opacity: 0.7, rowStep: 1, blur: 0, dotStep: 2, lineVisible: true },
      { xShift: 0.06, zShift: 0.24, yOffset: 108, elevationScale: 0.76, opacity: 0.46, rowStep: 2, blur: 0, dotStep: 3, lineVisible: true },
      { xShift: -0.14, zShift: -0.36, yOffset: -122, elevationScale: 0.7, opacity: 0.35, rowStep: 3, blur: 0, dotStep: 2, lineVisible: false },
      { xShift: 0.13, zShift: 0.38, yOffset: 148, elevationScale: 0.68, opacity: 0.4, rowStep: 3, blur: 0, dotStep: 2, lineVisible: false },
    ];

    const pointAt = (column: number, row: number, time: number, layer?: WaveLayer) => {
      const x = column / Math.max(columns - 1, 1);
      const z = row / Math.max(rows - 1, 1);
      const sampleX = Math.min(1, Math.max(0, x + (layer?.xShift ?? 0)));
      const sampleZ = Math.min(1, Math.max(0, z + (layer?.zShift ?? 0)));
      const perspective = 0.66 + z * 0.52;
      const microOffset = Math.sin(x * 31 + z * 17) * (0.35 + z * 1.4);
      const microLift = Math.cos(x * 23 + z * 29) * (0.22 + z * 0.72);
      const worldX = (x - 0.06) * width * perspective + z * width * 0.1 + microOffset;
      const elevation = surface(sampleX, sampleZ, time);
      const worldY = height * (0.35 + z * 0.67) + (layer?.yOffset ?? 0) - elevation * (0.6 + z * 0.42) * (layer?.elevationScale ?? 1) + microLift;
      return { x: worldX, y: worldY, z, elevation };
    };

    const draw = (time: number) => {
      if (!isVisible) {
        frame = 0;
        return;
      }
      if (!reducedMotion && time - lastDrawTime < 33) {
        frame = requestAnimationFrame(draw);
        return;
      }
      lastDrawTime = time;
      const dark = document.documentElement.dataset.theme !== "light";
      context.clearRect(0, 0, width, height);

      layers.forEach((layer, layerIndex) => {
        if (!dark || !layer.lineVisible) return;
        context.save();
        for (let row = 0; row < rows; row += layer.rowStep) {
          context.beginPath();
          for (let column = 0; column < columns; column += 1) {
            const point = pointAt(column, row, time, layer);
            if (column === 0) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
          }
          const depth = row / Math.max(rows - 1, 1);
          const cyanLayer = layerIndex === 0 || (layerIndex === 1 && row % 4 === 0);
          context.strokeStyle = cyanLayer
            ? `rgba(40, 209, 255, ${(0.065 + depth * 0.15) * layer.opacity})`
            : `rgba(183, 76, 255, ${(0.04 + depth * 0.12) * layer.opacity})`;
          context.lineWidth = row % 5 === 0 ? 0.7 : 0.36;
          context.stroke();
        }
        context.restore();
      });

      if (dark) {
        for (let column = 0; column < columns; column += 5) {
          context.beginPath();
          for (let row = 0; row < rows; row += 1) {
            const point = pointAt(column, row, time);
            if (row === 0) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
          }
          context.strokeStyle = "rgba(54, 161, 255, 0.1)";
          context.lineWidth = 0.4;
          context.stroke();
        }
      }

      context.save();
      context.globalCompositeOperation = "lighter";
      layers.forEach((layer, layerIndex) => {
        if (!dark && layerIndex !== 1) return;
        const dotStride = dark ? (layerIndex === 1 ? 1 : layer.dotStep) : 2;
        context.save();
        for (let row = layerIndex === 1 ? 0 : dotStride; row < rows; row += dotStride) {
          for (let column = layerIndex === 1 ? 0 : dotStride; column < columns; column += dotStride) {
            const point = pointAt(column, row, time, layer);
            const pulse = (Math.sin(column * 0.29 + row * 0.47 + time * 0.00035) + 1) / 2;
            const crest = Math.min(1, Math.max(0, point.elevation / 104 + 0.35));
            const stableNoise = (Math.sin(column * 17.31 + row * 41.79) + 1) / 2;
            const calmLeft = column / Math.max(columns - 1, 1) < 0.28 && crest < 0.46;
            if ((calmLeft && stableNoise < 0.7) || (crest < 0.24 && point.z < 0.35 && stableNoise < 0.42)) continue;
            const pointerDistance = Math.hypot(point.x - pointerRef.current.x, point.y - pointerRef.current.y);
            const response = pointerDistance < 130 ? (1 - pointerDistance / 130) * 0.45 : 0;
            const alpha = (0.12 + point.z * 0.47 + crest * 0.24 + response) * layer.opacity * (dark ? 1 : 0.84);
            const cyan = crest > 0.58 && column % 3 !== 0;
            const neonDot = dark && crest > 0.48 && stableNoise > 0.72 && (column * 3 + row * 5 + layerIndex) % 11 === 0;
            const coreRadius = (0.42 + point.z * 1.18 + crest * 1.18 + stableNoise * 0.28 + response) * (dark ? 1 : 0.9);
            if (neonDot) {
              const [red, green, blue] = cyan ? [37, 216, 255] : [211, 78, 255];
              context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * 0.12})`;
              context.beginPath();
              context.arc(point.x, point.y, coreRadius * 4.8, 0, Math.PI * 2);
              context.fill();
              context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${Math.min(0.95, alpha * 1.5)})`;
              context.beginPath();
              context.arc(point.x, point.y, coreRadius * 1.55, 0, Math.PI * 2);
              context.fill();
            }
            const [red, green, blue] = cyan
              ? (dark ? [37, 216, 255] : [8, 112, 177])
              : (dark ? [211, 78, 255] : [109, 43, 172]);
            context.fillStyle = cyan
              ? `rgba(${red}, ${green}, ${blue}, ${alpha})`
              : `rgba(${red}, ${green}, ${blue}, ${alpha * (0.74 + pulse * 0.26)})`;
            context.beginPath();
            context.arc(point.x, point.y, coreRadius, 0, Math.PI * 2);
            context.fill();
          }
        }
        context.restore();
      });
      context.restore();

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      intersectsViewport = entry.isIntersecting;
      isVisible = intersectsViewport && !document.hidden;
      if (isVisible && !frame && !reducedMotion) frame = requestAnimationFrame(draw);
    }, { threshold: 0.02 });
    const onDocumentVisibility = () => {
      isVisible = intersectsViewport && !document.hidden;
      if (isVisible && !frame && !reducedMotion) frame = requestAnimationFrame(draw);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };
    const clearPointer = () => { pointerRef.current = { x: -1000, y: -1000 }; };
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      reducedMotion = mediaQuery.matches;
      cancelAnimationFrame(frame);
      frame = 0;
      draw(performance.now());
    };
    const resizeObserver = new ResizeObserver(() => { resize(); draw(performance.now()); });

    resize();
    intersectionObserver.observe(canvas);
    resizeObserver.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", clearPointer, { passive: true });
    document.addEventListener("visibilitychange", onDocumentVisibility);
    mediaQuery.addEventListener("change", onMotionChange);
    draw(performance.now());

    return () => {
      cancelAnimationFrame(frame);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", clearPointer);
      document.removeEventListener("visibilitychange", onDocumentVisibility);
      mediaQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="cinematic-hero__wave" aria-hidden="true" />;
}
