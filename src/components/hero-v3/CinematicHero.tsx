import { useI18n } from "../../i18n";
import { assetPath } from "../../utils/assets";
import "../../styles/cinematic-hero.css";
import { HolographicLogo } from "./HolographicLogo";
import { ParticleWave } from "./ParticleWave";

const networkNodes = [[42, 124], [88, 174], [138, 112], [182, 202], [238, 148], [275, 218], [326, 96], [362, 140], [402, 108], [548, 112], [600, 168], [650, 130], [704, 194], [756, 105], [810, 168], [858, 126], [904, 170], [1110, 114], [1160, 182], [1210, 134], [1260, 218], [1322, 150], [1372, 204], [1050, 286], [1112, 332], [1172, 280], [1232, 344], [1290, 302], [1352, 354], [110, 72], [154, 78], [1192, 74], [1244, 92], [1304, 64], [967, 238], [1014, 261]];
const networkLinks = [[0,1],[0,2],[1,2],[1,3],[2,4],[3,4],[3,5],[4,5],[4,6],[5,7],[6,7],[6,8],[7,8],[9,10],[9,11],[10,11],[10,12],[11,12],[11,13],[12,13],[12,14],[13,14],[13,15],[14,15],[14,16],[15,16],[17,18],[17,19],[18,19],[18,20],[19,20],[19,21],[20,21],[20,22],[20,23],[21,22],[23,24],[23,25],[24,25],[24,26],[25,26],[25,27],[26,27],[26,28],[27,28],[2,29],[29,30],[30,2],[19,31],[31,32],[32,33],[33,31],[16,34],[34,35],[35,23]];

export function CinematicHero() {
  const { t } = useI18n();
  return (
    <section className="cinematic-hero" id="top" aria-labelledby="hero-title">
      <div className="cinematic-hero__atmosphere" aria-hidden="true" />
      <svg className="cinematic-hero__network" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true">
        <g>{networkLinks.map(([from, to]) => { const [x1, y1] = networkNodes[from]; const [x2, y2] = networkNodes[to]; return <line key={`${from}-${to}`} x1={x1} y1={y1} x2={x2} y2={y2} />; })}</g>
        {networkNodes.map(([cx, cy], index) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index % 5 === 0 ? 3.4 : 1.65} />)}
      </svg>
      <ParticleWave />
      <div className="cinematic-hero__shell">
        <div className="cinematic-hero__glass" aria-hidden="true"><svg viewBox="0 0 860 630" preserveAspectRatio="none"><defs><radialGradient id="cinematic-glass-fill" cx="18%" cy="14%" r="90%"><stop offset="0" stopColor="#713caa" stopOpacity=".22" /><stop offset=".34" stopColor="#10133f" stopOpacity=".28" /><stop offset=".7" stopColor="#071027" stopOpacity=".18" /><stop offset="1" stopColor="#071027" stopOpacity=".05" /></radialGradient><linearGradient id="cinematic-glass-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9f5cff" /><stop offset=".18" stopColor="#e0a5ff" /><stop offset=".58" stopColor="#7e4be4" /><stop offset="1" stopColor="#20c7ff" /></linearGradient></defs><path className="cinematic-hero__glass-fill" d="M72 30 C280 36 527 72 786 172 C846 196 866 252 836 309 C793 391 711 493 553 574 C356 674 141 620 57 511 C7 446 31 342 46 255 L64 105 C67 70 48 46 72 30Z" /><path className="cinematic-hero__glass-edge" d="M72 30 C280 36 527 72 786 172 C846 196 866 252 836 309 C793 391 711 493 553 574 C356 674 141 620 57 511 C7 446 31 342 46 255 L64 105 C67 70 48 46 72 30Z" /><path className="cinematic-hero__glass-primary-edge" d="M72 30 C280 36 527 72 786 172" /><path className="cinematic-hero__glass-glints" d="M72 30 C280 36 527 72 786 172 C846 196 866 252 836 309 C793 391 711 493 553 574 C356 674 141 620 57 511 C7 446 31 342 46 255 L64 105 C67 70 48 46 72 30Z" /></svg></div>
        <div className="cinematic-hero__copy">
          <p className="cinematic-hero__eyebrow">Tatiana Furtuna</p>
          <h1 id="hero-title">TantyaStorm<span aria-hidden="true"> /</span></h1>
          <p className="cinematic-hero__role">{t.hero.cinematicRole}</p>
          <p className="cinematic-hero__lead">{t.hero.cinematicLead}</p>
          <div className="cinematic-hero__actions" aria-label={t.common.primaryActions}>
            <a className="cinematic-hero__button cinematic-hero__button--primary" href={assetPath("#projects")}>{t.hero.cinematicPrimaryAction}<span aria-hidden="true"> →</span></a>
            <a className="cinematic-hero__button cinematic-hero__button--secondary" href={assetPath("#contact")}>{t.common.bookCall}</a>
          </div>
          <ul className="cinematic-hero__specialties" aria-label={t.skillsSection.eyebrow}>
            {t.hero.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
          </ul>
        </div>
        <HolographicLogo />
      </div>
    </section>
  );
}
