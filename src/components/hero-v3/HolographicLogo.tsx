import { assetPath } from "../../utils/assets";

export function HolographicLogo() {
  return (
    <div className="cinematic-hero__emblem" aria-hidden="true">
      <span className="cinematic-hero__orbit cinematic-hero__orbit--one" />
      <span className="cinematic-hero__orbit cinematic-hero__orbit--two" />
      <span className="cinematic-hero__emblem-glow" />
      <img src={assetPath("assets/brand/logo-color-transparent.png")} alt="" />
    </div>
  );
}
