import { en } from "./en";
import type { Translation } from "../types";

export const ro: Translation = {
  ...en,
  languageName: "Română",
  seo: {
    homeTitle:
      "Tatiana Furtuna | Dezvoltator Python și specialistă în automatizări",
    homeDescription:
      "Portofoliul Tatianei Furtuna, dezvoltator Python specializat în automatizări, web scraping, aplicații desktop, procesare de date și integrări backend.",
    notFoundTitle: "Proiect negăsit | Tantyastorm",
    notFoundDescription: "Studiul de caz cerut nu a fost găsit.",
    caseStudySuffix: "Studiu de caz | Tantyastorm",
  },
  common: {
    skipToContent: "Sari la conținut",
    backToTop: "Înapoi sus",
    contact: "Contact",
    viewSelectedWork: "Vezi proiectele selectate",
    bookCall: "Programează un apel",
    viewCaseStudy: "Vezi studiul de caz",
    stack: "Stack",
    unavailableProjectLinks:
      "Codul sursă este disponibil la cerere sau proiectul este privat.",
    switchToLight: "Comută la modul luminos",
    switchToDark: "Comută la modul întunecat",
    languageSwitcher: "Selectează limba",
    primaryNavigation: "Navigare principală",
    toggleNavigation: "Comută meniul de navigare",
    tantyastormHome: "Pagina principală Tantyastorm",
    primaryActions: "Acțiuni principale",
    professionalStatus: "Status profesional",
    profilePanel: "Profil Tantyastorm",
    footerActions: "Acțiuni footer",
  },
  nav: {
    proof: "Dovezi",
    projects: "Proiecte",
    services: "Servicii",
    skills: "Abilități",
  },
  hero: {
    eyebrow: "Dezvoltator Python / automatizări și instrumente de date",
    title: "Transform fluxurile repetitive în instrumente Python fiabile.",
    titleLines: [
      "Transform fluxurile repetitive în instrumente Python fiabile.",
    ],
    lead: "Construiesc automatizări, scraping, procesare de fișiere și utilitare desktop pentru echipe care au nevoie de rezultate structurate, pași de verificare mai siguri și mai puțină muncă manuală.",
    panelLabel: "Tantyastorm",
    panelText:
      "Automatizare, extracție, transformare și instrumente locale gândite după fluxul de lucru, înainte de cod.",
    focusLabel: "Focus",
    focusValue: "Livrare Python",
    outputsLabel: "Rezultate",
    signal: "TS-47.01 / SEMNAL WORKFLOW",
    meta: [
      "Dezvoltator Python",
      "Automatizare / scraping / tool-uri desktop",
      "Remote",
      "Disponibilă pentru proiecte freelance",
    ],
  },
  proof: {
    eyebrow: "Dovezi, nu adjective",
    title: "Rezultate susținute de proiectele existente.",
    items: [
      {
        label: "7 studii de caz",
        description:
          "Automatizarea, scraping-ul, utilitarele desktop, procesarea fișierelor și transformarea datelor sunt documentate în pagini de proiect.",
      },
      {
        label: "Exporturi structurate",
        description:
          "Proiectele produc CSV, JSON, TXT, Excel sau date pregătite pentru export, nu rezultate brute dezorganizate.",
      },
      {
        label: "Instrumente locale",
        description:
          "Fluxurile desktop și de procesare a fișierelor păstrează datele sensibile și pașii de verificare pe mașina utilizatorului.",
      },
      {
        label: "Teste unde contează",
        description:
          "Proiectele CLI și de scraping includ acoperire pytest pentru fluxuri și parsare importante.",
      },
      {
        label: "Proiecte private tratate atent",
        description:
          "Proiectele private sunt prezentate fără expunerea repository-urilor și fără promisiuni exagerate.",
      },
      {
        label: "Verificare înainte de output",
        description:
          "Mai multe tool-uri folosesc preview, filtrare, validare, loguri sau denumire sigură înainte ca datele să fie reutilizate.",
      },
    ],
  },
  projectsSection: {
    eyebrow: "Lucrări selectate",
    title: "Studii de caz din automatizare, extracție și fluxuri de date.",
    description:
      "Șapte proiecte orientate spre transformarea inputurilor dezordonate sau a pașilor repetitivi în rezultate structurate și verificabile.",
  },
  servicesSection: {
    ...en.servicesSection,
    eyebrow: "Modalități de colaborare",
    title:
      "Soluții practice pentru fluxuri care au nevoie de mai puțină muncă manuală.",
    description:
      "Colaborarea rămâne aproape de lucru: input clar, proces mai sigur și un livrabil pe care îl poți rula sau verifica.",
    deliverable: "Livrabil",
    outcome: "Rezultat",
    items: [
      {
        title: "Instrumente Python de automatizare",
        problem:
          "Pentru operațiuni repetitive cu fișiere, date și fluxuri care încă sunt făcute manual.",
        deliverable:
          "Script Python, CLI sau aplicație mică, cu validare, inputuri clare și output reutilizabil.",
        outcome:
          "Un flux repetabil care reduce lucrul manual și păstrează cazurile limită vizibile.",
      },
      {
        title: "Web scraping și extracție de date",
        problem:
          "Pentru colectarea datelor structurate din website-uri, sisteme online sau pagini care trebuie parsate.",
        deliverable:
          "Scraper sau flux de extracție cu filtre, validare și export CSV, JSON sau Excel.",
        outcome:
          "Date sursă mai curate, pregătite pentru verificare, reutilizare sau alt proces.",
      },
      {
        title: "Utilitare desktop",
        problem:
          "Pentru fluxuri locale care au nevoie de interfață practică, progres vizibil și verificare înainte de modificări.",
        deliverable:
          "Tool desktop Python pentru selectarea fișierelor, preview, procesare batch și export.",
        outcome:
          "Un utilitar local pentru lucru sensibil, repetitiv sau ghidat de operator.",
      },
      {
        title: "Dezvoltare MVP",
        problem:
          "Pentru transformarea unei idei de workflow într-o primă versiune Python funcțională, fără platformă supradimensionată.",
        deliverable:
          "MVP delimitat, cu fluxul principal, interfață sau API de bază și limitări documentate.",
        outcome:
          "O primă versiune funcțională ce poate fi testată pe procesul real.",
      },
    ],
  },
  skillsSection: {
    ...en.skillsSection,
    eyebrow: "Puncte tehnice forte",
    title: "Un set de instrumente centrat pe Python pentru livrare practică.",
    description:
      "Stack-ul este direct: biblioteci de automatizare, parsere, UI desktop, formate de date, teste și bazele web necesare pentru software utilizabil.",
    groups: [
      { ...en.skillsSection.groups[0], title: "Limbaje" },
      { ...en.skillsSection.groups[1], title: "Python și Backend" },
      { ...en.skillsSection.groups[2], title: "Automatizare și Scraping" },
      { ...en.skillsSection.groups[3], title: "Date" },
      { ...en.skillsSection.groups[4], title: "Desktop și Tool-uri" },
    ],
  },
  approach: {
    eyebrow: "Cum lucrez",
    title: "Puncte clare de verificare înainte ca ceva să devină automat.",
    items: [
      {
        title: "Mapez fluxul real",
        description:
          "Clarific inputuri, transferuri, constrângeri și rezultatul înainte de forma tool-ului.",
      },
      {
        title: "Păstrez riscul verificabil",
        description:
          "Folosesc preview, validare, tratarea duplicatelor sau loguri unde acțiunile batch trebuie controlate.",
      },
      {
        title: "Construiesc versiunea utilă",
        description:
          "Mă concentrez pe cel mai mic tool fiabil care rezolvă fluxul, fără greutate de platformă prea devreme.",
      },
      {
        title: "Numesc limitările devreme",
        description:
          "Comunic clar limitările surselor private, pașii de acces, inputurile fragile și acoperirea cu teste.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ai un workflow care nu ar trebui să fie încă manual?",
    description:
      "Construiesc tool-uri Python practice pentru automatizare, extracție de date, procesare fișiere, fluxuri desktop și integrări backend.",
    calendlyLabel: "Programează un apel pe Calendly",
    linksLabel: "Linkuri de contact",
    form: {
      name: "Nume",
      email: "Email",
      projectType: "Tip proiect",
      budget: "Buget estimat",
      message: "Mesaj",
      website: "Website",
      selectProjectType: "Selectează tipul proiectului",
      selectBudget: "Selectează intervalul",
      projectTypes: [
        "Automatizare Python",
        "Web scraping",
        "Aplicație desktop",
        "Procesare de date",
        "Backend sau integrare API",
      ],
      budgetOptions: [
        "Sub $500",
        "$500 - $1,500",
        "$1,500 - $5,000",
        "$5,000+",
      ],
      errors: {
        name: "Te rog introdu numele.",
        email: "Te rog introdu emailul.",
        invalidEmail: "Te rog introdu o adresă de email validă.",
        message: "Te rog spune-mi câteva detalii despre proiect.",
      },
      status: {
        success: "Mulțumesc. Mesajul a fost trimis cu succes.",
        error:
          "Mesajul nu a putut fi trimis. Detaliile tale sunt încă aici, poți încerca din nou.",
        notConfiguredDev:
          "Endpoint-ul formularului nu este configurat. Adaugă VITE_CONTACT_FORM_ENDPOINT pentru trimitere.",
        notConfigured:
          "Formularul nu este disponibil acum. Te rog folosește emailul sau un link de profil.",
      },
      sending: "Se trimite...",
      submit: "Trimite mesajul",
    },
  },
  detail: {
    architecture: "Arhitectură",
    challenges: "Provocări și rezolvări",
    challenge: "Provocare",
    resolution: "Rezolvare",
    decisions: "Decizii tehnice",
    screenshot: "Captură",
    gallery: "Capturi ecran",
    notFoundEyebrow: "Negăsit",
    notFoundHeading: "Proiectul nu a fost găsit.",
    backToProjects: "Înapoi la proiecte",
    repository: "Repository",
    liveDemo: "Demo live",
    demoVideo: "Video demo",
    overview: "Prezentare studiu de caz",
    goals: "Obiective",
    problem: "Problemă",
    solution: "Soluție",
    workflow: "Flux de lucru",
    features: "Funcționalități principale",
    technicalApproach: "Abordare tehnică",
    quality: "Măsuri de calitate",
    results: "Rezultate",
    lessons: "Lecții",
    limitations: "Limitări",
    privacy: "Notă de confidențialitate sau NDA",
    snapshot: "Rezumat proiect",
    status: "Status",
    role: "Rol",
    category: "Categorie",
    technologyStack: "Stack tehnologic",
    projectLinks: "Linkuri proiect",
    repositoryLink: "Repository GitHub",
    liveDemoLink: "Demo live",
    demoVideoLink: "Video demo",
    previous: "Anterior",
    next: "Următor",
    detailsLabel: (title) => `Detalii proiect ${title}`,
    navigationLabel: "Navigare proiect",
  },
  footer: {
    availability: "Disponibilă pentru proiecte freelance",
    title:
      "Tool-uri Python pentru fluxuri care nu ar trebui să fie încă manuale.",
    description:
      "Automatizare, extracție de date, utilitare desktop și MVP-uri practice construite în jurul constrângerilor reale.",
    remote: "Colaborare remote",
  },
  contactLinks: {
    email: "Email",
    github: "GitHub",
    upwork: "Upwork",
    linkedin: "LinkedIn",
    fiverr: "Fiverr",
    freelancerProfile: "Profil freelancer",
    ariaEmail: (name, email) => `Trimite email către ${name} la ${email}`,
    ariaProfile: (name, platform) => `${name} pe ${platform}`,
  },
  projects: {
    kreacher: {
      category: "Procesare HTML si normalizare de date",
      summary:
        "Tool Python local care transforma HTML salvat in inregistrari normalizate, deduplicate si filtrabile printr-o arhitectura cu adaptoare de parser.",
      detailedDescription:
        "Kreacher proceseaza fisiere HTML salvate local prin adaptoare care definesc structurile acceptate, separand extractia, normalizarea, validarea, deduplicarea, filtrarea, revizuirea si exportul JSON determinist. Repository-ul public include doar un adaptor exemplu si fixture-uri sintetice si ofera fluxuri GUI si CLI.",
      imageAlt: "Miniatura proiectului Kreacher",
      role: "Dezvoltator Python",
      problem:
        "Fisierele HTML salvate sunt greu de revizuit si reutilizat cand parsarea, validarea, deduplicarea si exportul sunt amestecate.",
      solution:
        "Un flux local cu adaptoare de parser converteste HTML compatibil in inregistrari normalizate, le valideaza, le deduplica, le filtreaza si exporta JSON determinist.",
      status: "Portfolio Project",
    },
    dobby: {
      category: "Utilitar de workflow in browser",
      summary:
        "Extensie browser Manifest V3 manuala pentru importul cozilor de URL-uri, navigarea paginilor si salvarea locala a snapshoturilor HTML initiate de utilizator.",
      detailedDescription:
        "Dobby importa o coada JSON generica, sare peste inregistrari invalide, duplicate, nesuportate sau neselectate, permite navigare previous/next controlata de utilizator si salveaza snapshoturi HTML locale doar dupa actiune explicita. Datele raman local, permisiunile sunt minime si extensia nu face crawling automat, login automat, submit de formulare, extragere de cookie-uri, acces la headere de autentificare, bypass CAPTCHA sau evitare anti-bot.",
      imageAlt:
        "Workflow Dobby pentru coada manuala de pagini in browser si snapshoturi",
      role: "Dezvoltator JavaScript",
      problem:
        "Revizuirea manuala a paginilor devine greu de urmarit cand utilizatorul trebuie sa parcurga o lista structurata de URL-uri si sa salveze snapshoturi locale consecvent.",
      solution:
        "O extensie Manifest V3 importa coada, valideaza inregistrarile, permite navigare manuala si salveaza snapshoturi doar la comanda explicita.",
      videoCaption:
        "Video demo local cu navigarea prin coada si workflow-ul de snapshot Dobby.",
      status: "Portfolio Project",
    },
    "email-archive-utility": {
      title: "Utilitar arhivă email",
      shortTitle: "Email Utility",
      category: "Automatizare procesare fișiere",
      summary:
        "Utilitar desktop local pentru organizarea fișierelor EML și MSG, extragerea metadatelor, redenumire sigură și copii TXT căutabile.",
      detailedDescription:
        "Utilitarul procesează fișiere și foldere local, previzualizează modificările, creează nume sigure și transformă mesajele în text căutabil.",
      imageAlt: "Interfața utilitarului de procesare arhivă email",
      role: "Dezvoltator Python",
      problem:
        "Fișierele EML și MSG exportate sunt greu de căutat și organizat când numele și metadatele sunt inconsistente.",
      solution:
        "Un utilitar desktop local previzualizează modificările, creează nume sigure și generează copii TXT căutabile.",
      status: "Proiect de portofoliu",
    },
    "custom-translation-management-system": {
      title: "Sistem personalizat de management al traducerilor",
      shortTitle: "Sistem traduceri",
      category: "Aplicație desktop / Python",
      summary:
        "Am refactorizat și extins un sistem privat desktop de management al traducerilor, bazat pe conceptul original al clientului. Am preluat un V1 existent, am redesenat structura aplicației și am separat logica strâns cuplată în module mentenabile.",
      detailedDescription:
        "Am refactorizat și extins un sistem privat desktop de management al traducerilor, bazat pe conceptul original al produsului și pe cerințele de business ale clientului. Proiectul avea deja un V1 funcțional creat de alt dezvoltator. Rolul meu a fost să înțeleg codul existent, să identific limitările lui și să îl transform într-o aplicație mai curată, mai fiabilă și mai ușor de menținut.",
      features: [
        {
          title: "Analiza V1 existent",
          description:
            "Am revizuit implementarea existentă, am urmărit fluxurile principale și am identificat responsabilități strâns cuplate.",
        },
        {
          title: "Redesign arhitectural",
          description:
            "Am redesenat structura aplicației astfel încât funcționalități noi să poată fi adăugate fără creșterea complexității în codul inițial.",
        },
        {
          title: "Separare în module",
          description:
            "Am separat logica de interfață, logica de procesare, configurația, starea proiectului, serviciile reutilizabile și utilitarele.",
        },
        {
          title: "Stabilizarea fluxurilor",
          description:
            "Am stabilizat funcționalitatea existentă, am rafinat fluxurile, am rezolvat cazuri limită și am pregătit sistemul pentru utilizare reală fiabilă.",
        },
      ],
      imageAlt:
        "Miniatura proiectului Sistem personalizat de management al traducerilor",
      role: "Evoluția tehnică a aplicației",
      problem:
        "Versiunea originală conținea fundația produsului, dar codul necesita restructurare semnificativă înainte ca aplicația să poată fi extinsă și menținută în siguranță.",
      solution:
        "Am reorganizat aplicația în module separate, cu responsabilități mai clare, am redus dependențele dintre componente, am îmbunătățit tratarea erorilor și recuperarea și am creat o structură care poate susține dezvoltarea viitoare.",
      goals: [
        "Înțelegerea codului moștenit și identificarea limitărilor lui.",
        "Transformarea V1 existent într-o aplicație mai curată, mai fiabilă și mai ușor de menținut.",
        "Pregătirea sistemului pentru extindere sigură și dezvoltare continuă.",
      ],
      technicalApproach: [
        "Am revizuit implementarea existentă și am urmărit fluxurile principale.",
        "Am separat logica de interfață de logica de procesare.",
        "Am izolat configurația și starea proiectului.",
        "Am separat serviciile reutilizabile și utilitarele.",
        "Am redus dependențele dintre componente.",
        "Am îmbunătățit tratarea erorilor și recuperarea.",
        "Am făcut părțile individuale mai ușor de testat și modificat.",
      ],
      workflow: [
        "Analiza V1 existent.",
        "Urmărirea fluxurilor principale.",
        "Planificarea refactorului arhitectural.",
        "Refactorizarea codului în module mentenabile.",
        "Implementarea și rafinarea fluxurilor necesare.",
        "Testarea, depanarea și livrarea finală a aplicației.",
      ],
      architecture: [
        {
          title: "Logica interfeței",
          description:
            "Am separat comportamentul interfeței de responsabilitățile de procesare.",
        },
        {
          title: "Logica de procesare",
          description:
            "Am mutat comportamentul principal de procesare în module mai clare și mentenabile.",
        },
        {
          title: "Configurație și stare proiect",
          description:
            "Am izolat configurația și starea proiectului de responsabilități fără legătură directă.",
        },
        {
          title: "Servicii și utilitare reutilizabile",
          description:
            "Am separat serviciile comune și utilitarele pentru ca părțile individuale să poată fi testate și modificate mai ușor.",
        },
      ],
      qualityNotes: [
        "Am stabilizat funcționalitatea existentă.",
        "Am îmbunătățit tratarea erorilor și recuperarea.",
        "Am redus dependențele dintre componente.",
        "Am testat, depanat și pregătit aplicația pentru livrarea finală.",
      ],
      challenges: [
        {
          title: "Implementare moștenită",
          challenge:
            "Aplicația avea deja un V1 funcțional, dar responsabilitățile strâns cuplate făceau dificile extinderea și mentenanța în siguranță.",
          resolution:
            "Am revizuit implementarea, am urmărit fluxurile principale, am identificat limitările și am planificat un refactor arhitectural complet.",
        },
        {
          title: "Refactor dincolo de cleanup",
          challenge:
            "Lucrarea cerea mai mult decât curățare cosmetică, deoarece funcționalitățile noi aveau nevoie de o fundație mai solidă.",
          resolution:
            "Am redesenat structura aplicației în module separate, cu responsabilități mai clare.",
        },
      ],
      decisions: [
        {
          title: "Separarea responsabilităților",
          explanation:
            "Separarea logicii de interfață, logicii de procesare, configurației, stării proiectului, serviciilor și utilitarelor a făcut aplicația mai ușor de menținut și extins.",
        },
        {
          title: "Pregătire pentru dezvoltare viitoare",
          explanation:
            "Refactorul a creat o structură care poate susține dezvoltarea viitoare fără creșterea continuă a complexității în codul inițial.",
        },
      ],
      results: [
        "Am finalizat analiza V1 existent.",
        "Am livrat redesign arhitectural și refactor complet al codului.",
        "Am separat aplicația în module mentenabile.",
        "Am stabilizat funcționalitatea existentă.",
        "Am implementat și rafinat fluxuri.",
        "Am susținut organizarea proiectelor de traducere, configurație specifică unei companii, consistența terminologiei pe bază de glosar, procesare controlată a documentelor și verificarea și aprobarea rezultatelor finalizate.",
        "Am livrat o aplicație desktop mai curată și mai ușor de menținut, cu module separate, responsabilități mai clare și o fundație mai solidă pentru dezvoltare continuă.",
      ],
      limitations:
        "Numele clientului, materialele sursă, capturile de ecran, prompturile, logica internă de business, fluxurile proprietare și arhitectura detaliată nu sunt incluse în acest studiu de caz.",
      confidentialityNote:
        "Acest proiect este protejat prin NDA. Numele clientului, materialele sursă, capturile de ecran, prompturile, logica internă de business, fluxurile proprietare și arhitectura detaliată nu sunt incluse în acest studiu de caz.",
      status: "Proiect privat",
    },
    "excel-to-json-cli": {
      title: "CLI Excel în JSON",
      shortTitle: "Excel JSON",
      category: "Transformare de date",
      summary:
        "Utilitar CLI care convertește coloane selectate din Excel în JSON curat, cu validare și erori clare.",
      detailedDescription:
        "CLI-ul acceptă XLSX, validează antetele, tratează selecții goale sau duplicate, creează directoare de output și include teste automate.",
      imageAlt: "Flux CLI de conversie Excel în JSON",
      role: "Dezvoltator Python",
      problem:
        "Coloanele selectate din Excel trebuie deseori convertite în JSON predictibil fără curățare manuală.",
      solution:
        "Un utilitar CLI validează antetele selectate, tratează cazurile limită și scrie JSON curat.",
      status: "Portfolio Project",
    },
    "books-data-scraper": {
      title: "Scraper date cărți",
      shortTitle: "Books Scraper",
      category: "Web scraping și export",
      summary:
        "Scraper Python testat care colectează date structurate despre cărți, aplică filtre și exportă rezultate reutilizabile.",
      detailedDescription:
        "Proiectul folosește o structură clară de parser, validează înregistrările, susține exporturi filtrate și păstrează logica testabilă.",
      imageAlt: "Flux de export pentru scraperul de date despre cărți",
      role: "Dezvoltator Python",
      problem:
        "Datele despre cărți trebuie colectate într-un format structurat care poate fi filtrat și reutilizat.",
      solution:
        "Un scraper testat colectează înregistrări structurate, aplică filtre, validează date și exportă rezultate reutilizabile.",
      status: "Portfolio Project",
    },
    "desktop-data-extraction-tool": {
      title: "Tool desktop de extracție date",
      shortTitle: "Extraction Tool",
      category: "Automatizare și export date",
      summary:
        "Aplicație desktop Python reutilizabilă pentru extragerea datelor structurate de pe website-uri și export CSV/Excel.",
      detailedDescription:
        "Tool-ul oferă flux configurabil de extracție, validare, loguri și output demonstrativ potrivit pentru portofoliu.",
      imageAlt: "Miniatura proiectului Desktop Data Extraction Tool",
      role: "Dezvoltator Python",
      problem:
        "Fluxurile reutilizabile de extracție web au nevoie de o interfață simplă și opțiuni fiabile de export.",
      solution:
        "O aplicație desktop Python oferă extracție configurabilă, validare, loguri și export CSV sau Excel.",
      status: "Portfolio Project",
    },
  },
};
