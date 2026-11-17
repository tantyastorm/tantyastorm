import type { Translation } from "../types";

export const roProjectTranslations = {
  "workflowforge": {
    "title": "WorkflowForge",
    "shortTitle": "WorkflowForge",
    "category": "Automatizarea fluxului de lucru pentru documente open-source",
    "summary": "Platformă open-source pentru asimilarea fiabilă a documentelor, fluxuri de lucru asistate de AI, execuție în fundal și revizuire umană.",
    "detailedDescription": "WorkflowForge este o platformă open source de automatizare a fluxului de lucru pentru documente, concepută pentru utilizare operațională reală. Acceptă documente, le procesează prin pași configurabili ai fluxului de lucru, acceptă extragerea și validarea asistată de AI și permite operatorilor umani să revizuiască, să compare, să aprobe, să reîncerce sau să respingă rezultatele. Proiectul se concentrează pe fiabilitate, trasabilitate, extensibilitate și design curat al sistemului, mai degrabă decât să fie un înveliș subțire în jurul unui API AI.",
    "seoTitle": "WorkflowForge | Automatizarea fluxului de lucru pentru documente open-source",
    "seoDescription": "WorkflowForge este o platformă open source de automatizare a fluxului de lucru pentru documente, construită cu FastAPI, PostgreSQL, Redis, Celery, React și Docker.",
    "badges": [
      "Dezvoltare activa",
      "Open Source",
      "Construit în public",
      "Arhitectură orientată spre producție"
    ],
    "features": [
      {
        "title": "Ingestie de documente",
        "description": "Acceptă documente, păstrează metadatele și urmărește starea documentului."
      },
      {
        "title": "Detectarea dublelor SHA-256",
        "description": "Hashează conținutul documentului și acceptă bazele de detectare a dublelor."
      },
      {
        "title": "Execuție idempotent",
        "description": "Păstrează repetabilă execuția lucrărilor cu baze de reîncercare și de tratare a eșecurilor."
      },
      {
        "title": "Conducerea statului",
        "description": "Modelează fluxul de lucru și starea documentului, astfel încât procesarea să poată fi urmărită."
      },
      {
        "title": "Persistența PostgreSQL",
        "description": "Utilizează PostgreSQL cu mapări SQLAlchemy și migrări Alambic."
      },
      {
        "title": "Redis și țelină",
        "description": "Coordonează lucrătorii de fundal, execuția programată și starea sarcinii."
      },
      {
        "title": "Controale de sănătate în dependență",
        "description": "Verifică API-ul, baza de date, Redis, stocarea obiectelor, lucrătorii și starea programatorului."
      },
      {
        "title": "Stocare compatibilă cu S3",
        "description": "Păstrează stocarea documentelor în spatele limitei infrastructurii de stocare a obiectelor."
      },
      {
        "title": "Interfața operator React",
        "description": "Oferă baza de front-end pentru fluxurile de lucru ale documentelor operaționale."
      },
      {
        "title": "Mediul Docker Compose",
        "description": "Rulează API local, frontend, baze de date, Redis, stocare obiecte, lucrători și servicii de planificare."
      },
      {
        "title": "Teste automate",
        "description": "Include backend, frontend, integrare și acoperire a testelor de arhitectură."
      },
      {
        "title": "Fișă publică de inginerie",
        "description": "Utilizează GitHub Actions, ADR-uri, documentație tehnică și versiuni incrementale."
      }
    ],
    "plannedCapabilities": [
      "Fluxuri de lucru pentru documente configurabile în mai mulți pași",
      "Abstracția furnizorului AI",
      "Selectarea modelului pe pas",
      "Ieșiri AI structurate cu validare a schemei",
      "Cozile de evaluare și aprobare umane",
      "Comparație versiuni",
      "Istoricul auditului",
      "Scrisoare moartă și instrumente de recuperare",
      "Validare și evidențiere CSV și XLSX",
      "Primirea documentelor Telegram",
      "Exemple de fluxuri de lucru pentru facturi, CV-uri și contracte",
      "Metrici, observabilitate și îndrumări pentru implementarea producției"
    ],
    "imageAlt": "Arhitectura platformei WorkflowForge și miniatura fluxului de lucru al operatorului",
    "role": "Dezvoltator de platforme full-stack",
    "problem": "Operațiunile grele de documente necesită asimilare repetabilă, stare de urmărire, puncte de revizuire și procesare rezistentă în fundal în loc de scripturi AI unice.",
    "solution": "Un monolit modular V1 combină un backend FastAPI, persistența PostgreSQL, execuția Redis și Celery, stocarea compatibilă cu S3 și o interfață de operator React cu limite documentate.",
    "goals": [
      "Creați o platformă open-source funcțională pentru asimilarea documentelor și executarea fluxului de lucru.",
      "Mențineți capacitățile finalizate separat clar de AI planificate și de funcțiile de revizuire.",
      "Documentați arhitectura, deciziile, testele, CI și fazele de lansare în public."
    ],
    "technicalApproach": [
      "Utilizați FastAPI pentru API-ul HTTP și React pentru interfața operatorului.",
      "Persistați starea domeniului în PostgreSQL prin SQLAlchemy și Alambic.",
      "Coordonați munca asincronă cu Redis, lucrătorii de țelină și sarcinile programate.",
      "Stocați obiecte de document prin abstracții de infrastructură compatibile cu S3.",
      "Acoperiți backend-ul, front-end-ul, integrarea și comportamentul arhitecturii cu teste automate."
    ],
    "workflow": [
      "Ingerați un document și păstrați metadatele acestuia.",
      "Hash conținutul cu SHA-256 și detectează conținut duplicat.",
      "Creați lucrări de procesare idempotente și urmăriți modificările stării.",
      "Execută sarcini de fundal prin lucrătorii de țelină susținuți de Redis.",
      "Expune starea de sănătate și dependență pentru dezvoltarea locală și CI."
    ],
    "architecture": [
      {
        "title": "Monolit modular V1",
        "description": "Prima versiune menține implementarea simplă, menținând în același timp granițele de domeniu clare și abstracțiile infrastructurii."
      },
      {
        "title": "Stratul de aplicație FastAPI",
        "description": "Expune punctele finale REST și verificările de sănătate a dependenței în jurul serviciilor de aplicație."
      },
      {
        "title": "Persistența PostgreSQL",
        "description": "Utilizează mapările SQLAlchemy și migrările Alambic pentru o stare durabilă a fluxului de lucru."
      },
      {
        "title": "Redis și execuție țelină",
        "description": "Coordonează lucrătorii de bază, execuția programată, reîncercări și starea operațională."
      },
      {
        "title": "Stocare compatibilă cu S3",
        "description": "Păstrează stocarea documentelor în spatele limitei infrastructurii pentru stocarea obiectelor locale și compatibile cu producția."
      },
      {
        "title": "Interfața operator React",
        "description": "Oferă baza de front-end pentru vizualizările document, caz, lot și starea sistemului."
      },
      {
        "title": "Mediul Docker Compose",
        "description": "Rulează local API, frontend, baze de date, Redis, stocare obiecte, lucrători și servicii de planificare."
      },
      {
        "title": "Acțiuni Pytest și GitHub",
        "description": "Verifică domeniul, aplicația, infrastructura, API-ul, frontend-ul, integrarea și comportamentul arhitecturii în CI."
      }
    ],
    "qualityNotes": [
      "Modelarea domeniului în jurul documentelor, loturi, cazuri, identitate, autorizare și preocupări de audit.",
      "Design API REST cu scheme tipizate și limite explicite de dependență.",
      "Procesare asincronă prin lucrători țelină și sarcini de planificare.",
      "Consecvența tranzacțională și idempotenta pentru fundațiile de procesare a documentelor.",
      "Fundații de recuperare a eșecului prin reîncercări, controale de sănătate și contracte de sarcini.",
      "Testarea strategiei în fluxurile de lucru de unitate, integrare, frontend, arhitectură și CI.",
      "Integrarea infrastructurii cu PostgreSQL, Redis, stocare compatibilă cu S3, Docker Compose și GitHub Actions.",
      "Istoric Git menținut cu livrare incrementală prin faze și solicitări de extragere."
    ],
    "decisions": [
      {
        "title": "Mai întâi monolit modular",
        "explanation": "V1 menține controlată complexitatea operațională, păstrând în același timp limite clare pentru extracția viitoare."
      },
      {
        "title": "Infrastructura din spatele porturilor",
        "explanation": "Baza de date, Redis, stocarea și comportamentul de sănătate sunt integrate fără scurgeri de probleme legate de infrastructură în codul de domeniu."
      },
      {
        "title": "Fiabilitate înainte de amploarea AI",
        "explanation": "Fundația platformei prioritizează starea, idempotitatea, testele și fiabilitatea execuției înainte de a adăuga funcții mai largi ale fluxului de lucru AI."
      }
    ],
    "results": [
      "Fundamentele pentru absorbția de documente funcționale și persistența metadatelor.",
      "Comportamentul de hashing al conținutului SHA-256 și de detectare a duplicaturilor.",
      "Fundații de execuție a locurilor de muncă idempotente.",
      "Integrare PostgreSQL, Redis, Celery, stocare compatibilă cu S3 și Docker Compose.",
      "Teste de backend, frontend, integrare și arhitectură care rulează prin GitHub Actions.",
      "Înregistrările deciziei de arhitectură și documentația tehnică păstrate public."
    ],
    "lessons": [
      "Produsele pentru fluxul de lucru AI au nevoie de stare durabilă și de revizuire a granițelor înainte ca caracteristicile modelului să devină utile.",
      "O construcție publică bazată pe etape face compromisurile arhitecturii mai ușor de auditat și îmbunătățit."
    ],
    "developmentStatus": [
      {
        "label": "Stare",
        "value": "Dezvoltare activa"
      },
      {
        "label": "Licență",
        "value": "Open Source"
      },
      {
        "label": "Stadiul actual",
        "value": "Fundația platformei de bază și infrastructura de procesare a documentelor"
      },
      {
        "label": "Model de dezvoltare",
        "value": "Depozitare publică, solicitări de extragere incrementale, teste automate și decizii de arhitectură documentate"
      }
    ],
    "status": "Dezvoltare activa"
  },
  "kreacher": {
    "title": "Kreacher",
    "shortTitle": "Kreacher",
    "category": "Procesarea HTML și normalizarea datelor",
    "summary": "Un instrument Python local pentru conversia HTML salvat în înregistrări normalizate, deduplicate, filtrabile printr-o arhitectură de analiză conectabilă.",
    "detailedDescription": "Kreacher procesează fișierele HTML salvate local cu adaptoare de analiză care definesc structurile HTML acceptate. Depozitul public include un exemplu de adaptor sintetic și accesorii sintetice, separă extracția, normalizarea, validarea, deduplicarea, filtrarea, revizuirea și exportul straturilor și acceptă atât fluxurile de lucru GUI, cât și CLI pentru exportul JSON structurat determinist. Căile surselor locale sunt omise în mod implicit. Nu revendică analiza universală HTML, nu ocolește autentificarea sau controalele de acces, nu rezolvă CAPTCHA-urile sau eluda sistemele anti-bot.",
    "features": [
      {
        "title": "Arhitectura adaptorului de analiză",
        "description": "Păstrează structurile HTML acceptate explicite prin adaptoare conectabile."
      },
      {
        "title": "Încărcare HTML salvată",
        "description": "Procesează fișierele HTML salvate local în loc să ajungă la sesiunile autentificate."
      },
      {
        "title": "Schema de înregistrare normalizată",
        "description": "Convertește HTML compatibil în înregistrări structurate previzibile."
      },
      {
        "title": "Validare și deduplicare",
        "description": "Separă validarea și manipularea duplicat de extracție."
      },
      {
        "title": "Filtrare prin cuvinte cheie și numerică",
        "description": "Permite restrângerea înregistrărilor înainte de examinare și exportare."
      },
      {
        "title": "Fluxuri de lucru GUI și CLI",
        "description": "Acceptă revizuirea locală într-o interfață desktop și utilizarea repetabilă a liniei de comandă."
      },
      {
        "title": "Export determinist JSON",
        "description": "Scrie înregistrări normalizate și date de analiză într-un format de export stabil."
      },
      {
        "title": "Corpuri publice sintetice",
        "description": "Documentează analizatorul public cu exemple neutre de HTML și date."
      }
    ],
    "imageAlt": "Miniatura proiectului Kreacher",
    "role": "Dezvoltator Python",
    "problem": "HTML salvat poate fi dificil de revizuit și reutilizat atunci când analizarea, validarea, gestionarea duplicaturilor și exportul sunt amestecate.",
    "solution": "Un flux de lucru local cu adaptor de analizor convertește HTML-ul salvat acceptat în înregistrări normalizate, le validează și le deduplică, acceptă filtrarea și revizuirea și exportă JSON determinist.",
    "goals": [
      "Procesați fișierele HTML salvate local prin adaptoare de analiză acceptate în mod explicit.",
      "Păstrați extracția, normalizarea, validarea, deduplicarea, filtrarea, examinarea și exportul separat.",
      "Publicați o versiune publică igienizată cu corpuri sintetice și un exemplu de adaptor sintetic."
    ],
    "technicalApproach": [
      "Încărcați codul HTML salvat local și rutați fișierele compatibile prin adaptoarele de analiză.",
      "Normalizați valorile extrase într-o schemă de înregistrare stabilă înainte de validare.",
      "Deduplicați și filtrați înregistrările înainte de examinare și export JSON.",
      "Omiteți implicit căile surselor locale din rezultatul exportat."
    ],
    "workflow": [
      "Încărcați unul sau mai multe fișiere HTML salvate.",
      "Selectați sau detectați un adaptor parser compatibil.",
      "Extrageți și normalizați înregistrările.",
      "Validați și deduplicați înregistrările.",
      "Filtrați și revizuiți rezultatele.",
      "Exportați JSON normalizat și date de analiză."
    ],
    "architecture": [
      {
        "title": "Stratul de încărcare HTML",
        "description": "Citește fișierele HTML salvate local în fluxul de lucru de procesare."
      },
      {
        "title": "Strat adaptor parser",
        "description": "Definește ce structuri HTML sunt acceptate și cum sunt extrase înregistrările."
      },
      {
        "title": "Nivelul de normalizare și validare",
        "description": "Convertește valorile brute extrase în înregistrări structurate validate."
      },
      {
        "title": "Stratul de deduplicare",
        "description": "Elimină înregistrările repetate înainte de examinare și export."
      },
      {
        "title": "Strat de filtrare",
        "description": "Suporta cuvinte cheie și filtrare numerică pentru revizuire."
      },
      {
        "title": "Stratul de prezentare GUI și CLI",
        "description": "Oferă atât fluxuri de lucru desktop, cât și pe linia de comandă."
      },
      {
        "title": "Export layer",
        "description": "Scrie ieșire JSON structurată deterministă."
      }
    ],
    "qualityNotes": [
      "Adaptoarele definesc structurile acceptate în loc să pretindă analiza HTML universală.",
      "Exemplele publice folosesc dispozitive sintetice.",
      "Căile surselor locale sunt omise în mod implicit.",
      "Nu ocolește autentificarea, controalele de acces, CAPTCHA-urile sau sistemele anti-bot."
    ],
    "challenges": [
      {
        "title": "Corpuri publice igienizate",
        "challenge": "Versiunea publică trebuia să demonstreze comportamentul analizorului fără a combina date reale ale platformei.",
        "resolution": "Depozitul include un exemplu de adaptor sintetic și accesorii HTML sintetice."
      },
      {
        "title": "Ștergeți domeniul de aplicare al analizorului",
        "challenge": "Instrumentele HTML pot fi confundate cu analizoare universale dacă suportul adaptorului nu este explicit.",
        "resolution": "Proiectul descrie adaptoarele ca limite de compatibilitate pentru structurile suportate."
      }
    ],
    "decisions": [
      {
        "title": "Analiza bazată pe adaptor",
        "explanation": "Adaptoarele păstrează codul de extracție specific structurii izolat de validare, filtrare și export."
      },
      {
        "title": "Date publice sintetice",
        "explanation": "Fixările neutre fac depozitul public fără a expune mostre specifice sursei."
      }
    ],
    "results": [
      "Extracție separată, normalizare, validare, deduplicare, filtrare și export.",
      "S-au adăugat adaptoare neutre de analiză.",
      "S-au înlocuit dispozitivele reale ale platformei cu HTML sintetic.",
      "S-au adăugat fluxuri de lucru GUI și CLI.",
      "A publicat un depozit public igienizat, cu licență MIT."
    ],
    "lessons": [
      "Compatibilitatea analizatorului este mai clară atunci când adaptoarele dețin ipoteze specifice sursei.",
      "Dispozitivele sintetice fac documentația publică mai sigură și mai ușor de testat."
    ],
    "gallery": [
      {
        "src": "active/proiecte/kreacher/kreacher_screen.png",
        "alt": "Interfață de procesare HTML locală Kreacher, filtrare și export de înregistrări normalizate",
        "caption": "Flux de lucru local de procesare HTML salvat cu filtrare, deduplicare și export structurat."
      }
    ],
    "status": "Proiect de portofoliu"
  },
  "dobby": {
    "title": "Dobby",
    "shortTitle": "Dobby",
    "category": "Utilitar pentru fluxul de lucru în browser",
    "summary": "O extensie manuală de browser Manifest V3 pentru importarea cozilor de adrese URL, navigarea în pagini și salvarea locală a instantaneelor HTML inițiate de utilizator.",
    "detailedDescription": "Dobby este o extensie manuală de browser Manifest V3 pentru importarea unei cozi JSON generice, deschiderea paginilor pe rând și salvarea instantaneelor HTML locale numai după o acțiune explicită a utilizatorului. Înregistrările din coadă pot include câmpuri precum id, titlu, url, stare, selectat și sursă, cu id și url necesare. Înregistrările nevalide, duplicate, neacceptate sau neselectate sunt ignorate. Navigarea este controlată de utilizator cu mișcarea cozii anterioare și următoare, numele de fișiere generate sunt sigure pentru sistemul de fișiere, datele din coadă sunt stocate local, iar extensia folosește permisiuni minime de browser fără permisiuni largi de gazdă. Nu accesează cu crawlere paginile automat, nu automatizează autentificarea, nu trimite formulare, nu extrage cookie-uri, nu accesează anteturile de autentificare, nu ocolește CAPTCHA-urile sau nu evadează sistemele anti-bot.",
    "features": [
      {
        "title": "Import de coadă JSON generic",
        "description": "Acceptă înregistrări structurate cu câmpuri obligatorii pentru ID și URL, plus metadate opționale."
      },
      {
        "title": "Navigare manuală în pagină",
        "description": "Deschide paginile selectate pe rând și păstrează mișcarea sub controlul utilizatorului."
      },
      {
        "title": "Instantanee inițiate de utilizator",
        "description": "Salvează local instantanee HTML numai după o acțiune explicită a utilizatorului."
      },
      {
        "title": "Generare sigură de nume de fișiere",
        "description": "Creează nume sigure pentru sistemul de fișiere pentru fișierele instantanee locale."
      },
      {
        "title": "Stare de coadă locală",
        "description": "Stochează local starea de coadă importată în fluxul de lucru cu extensia de browser."
      },
      {
        "title": "Permisiuni minime pentru browser",
        "description": "Evită permisiunile largi de gazdă și menține domeniul de aplicare a extensiei restrâns."
      }
    ],
    "imageAlt": "Coada manuală a paginilor de browser Dobby și fluxul de lucru instantaneu",
    "role": "Dezvoltator JavaScript",
    "problem": "Examinarea manuală a paginii poate deveni greu de urmărit atunci când un utilizator trebuie să treacă printr-o listă structurată de adrese URL și să salveze în mod constant instantaneele paginilor locale.",
    "solution": "O extensie Manifest V3 importă o coadă de adrese URL structurată, omite înregistrările nevalide sau neacceptate, permite utilizatorului să navigheze manual în paginile anterioare și următoare și salvează instantanee numai la o comandă explicită.",
    "goals": [
      "Importați cozi JSON generice cu validare clară.",
      "Mențineți navigarea în pagină și salvarea instantaneelor controlate de utilizator.",
      "Stocați starea cozii la nivel local, cu permisiuni minime de browser."
    ],
    "technicalApproach": [
      "Validați înregistrările importate și omiteți intrările nevalide, duplicate, neacceptate sau neselectate.",
      "Utilizați API-urile extensiei Manifest V3 pentru un flux de lucru restrâns al browserului.",
      "Generați nume de fișiere instantanee sigure pentru sistemul de fișiere înainte de salvarea locală.",
      "Evitați permisiunile largi ale gazdei și comportamentul de accesare automată cu crawlere."
    ],
    "workflow": [
      "Importați o coadă JSON structurată.",
      "Deschideți o pagină selectată prin extensie.",
      "Navigați manual între înregistrările din coadă.",
      "Salvați pagina curentă ca instantaneu HTML local după o acțiune explicită a utilizatorului."
    ],
    "architecture": [
      {
        "title": "Coadă de import și strat de validare",
        "description": "Verifică câmpurile obligatorii și filtrează înregistrările nevalide, duplicate, neacceptate sau neselectate."
      },
      {
        "title": "Stratul de stare locală de coadă",
        "description": "Stochează local înregistrările de coadă importate pentru navigare și progres."
      },
      {
        "title": "Stratul de navigare controlat de utilizator",
        "description": "Acceptă mișcarea anterioară și următoare prin înregistrările din coadă fără accesare automată."
      },
      {
        "title": "Instantaneu și stratul de nume de fișier sigur",
        "description": "Salvează instantanee HTML locale la acțiuni explicite cu nume de fișiere sigure pentru sistemul de fișiere."
      }
    ],
    "qualityNotes": [
      "Necesită o acțiune explicită a utilizatorului înainte de a salva instantaneele.",
      "Utilizează permisiuni minime de browser și nu permisiuni de gazdă largi.",
      "Nu automatizează autentificarea, nu trimite formulare, nu extrage cookie-uri, nu accesează anteturile de autentificare, nu ocolește CAPTCHA-urile sau nu evită sistemele anti-bot."
    ],
    "challenges": [
      {
        "title": "Igienizarea unui ajutor specific sursei",
        "challenge": "Versiunea publică trebuia să elimine ipotezele specifice platformei, păstrând în același timp fluxul de lucru util în coadă.",
        "resolution": "Extensia acceptă acum înregistrări JSON generice și își documentează limitele manuale."
      },
      {
        "title": "Evitarea accesului larg la browser",
        "challenge": "O extensie de browser poate solicita cu ușurință mai multe permisiuni decât are nevoie un flux de lucru manual.",
        "resolution": "Versiunea publică elimină permisiunile largi de gazdă și păstrează acțiunile inițiate de utilizator."
      }
    ],
    "decisions": [
      {
        "title": "Format de coadă JSON generic",
        "explanation": "O schemă de coadă neutră menține extensia utilă fără a o lega la o anumită sursă."
      },
      {
        "title": "Comandă manuală instantanee",
        "explanation": "Salvarea instantaneelor numai după o acțiune explicită menține fluxul de lucru orientat spre revizuire."
      }
    ],
    "results": [
      "Transformat un ajutor specific platformei într-un utilitar neutru pentru fluxul de lucru al browserului.",
      "S-au eliminat permisiunile ample de gazdă.",
      "S-au adăugat teste pentru validarea importului, stocare, nume de fișiere și comportamentul lucrătorului de service.",
      "A publicat implementarea igienizată sub licența MIT."
    ],
    "lessons": [
      "Utilitarele manuale ale browserului au nevoie de limite clare în ceea ce privește navigarea, salvarea și permisiunile.",
      "O schemă mică de coadă poate facilita revizuirea repetitivă a paginii, fără a o transforma în accesare cu crawlere."
    ],
    "videoCaption": "Video demonstrativ local cu navigarea în coadă Dobby și fluxul de lucru instantaneu.",
    "status": "Proiect de portofoliu"
  },
  "email-archive-utility": {
    "title": "Utilitar Arhivare e-mail",
    "shortTitle": "Utilitar de e-mail",
    "category": "Automatizarea procesării fișierelor",
    "summary": "Un utilitar de desktop local pentru organizarea fișierelor EML și MSG exportate, extragerea metadatelor, redenumirea în siguranță a fișierelor și generarea de copii TXT care pot fi căutate.",
    "detailedDescription": "Acest utilitar gestionează introducerea fișierelor și folderelor, previzualizează modificările planificate, creează nume sigure pentru duplicat, convertește mesajele în text care poate fi căutat și procesează arhivele local.",
    "features": [
      {
        "title": "Suport EML și MSG",
        "description": "Gestionează formatele comune de mesaje de e-mail exportate într-un flux de lucru local de procesare."
      },
      {
        "title": "Nume de fișiere bazate pe metadate",
        "description": "Utilizează metadatele extrase ale mesajelor pentru a produce nume de fișiere de arhivă mai semnificative."
      },
      {
        "title": "Previzualizare înainte de modificare",
        "description": "Afișează modificările planificate înainte ca numele fișierelor să fie schimbate."
      },
      {
        "title": "Numire în siguranță pentru duplicat",
        "description": "Evită suprascrierea fișierelor atunci când numele generate s-ar ciocni."
      },
      {
        "title": "Conversia TXT și urmărirea progresului",
        "description": "Creează copii de text care pot fi căutate, păstrând în același timp vizibil procesul de lot."
      }
    ],
    "imageAlt": "Interfață de procesare desktop a Utilitarului de arhivare de e-mail",
    "videoCaption": "Video demonstrativ local al fluxului de lucru de redenumire, previzualizare și procesare a arhivei de e-mail.",
    "role": "Dezvoltator Python",
    "problem": "Fișierele EML și MSG exportate sunt dificil de căutat și organizat atunci când numele fișierelor și metadatele sunt inconsecvente.",
    "solution": "Un utilitar de desktop local previzualizează modificările planificate, creează nume de fișiere sigure pentru duplicat și generează copii TXT care pot fi căutate.",
    "goals": [
      "Ușurează căutarea și răsfoirea arhivelor de e-mail exportate.",
      "Evitați redenumirea nesigură în loturi prin previzualizarea modificărilor planificate.",
      "Păstrați procesarea e-mailurilor la nivel local și ținând cont de confidențialitate."
    ],
    "technicalApproach": [
      "Acceptați introducerea fișierelor și a folderului pentru procesarea arhivelor în lot.",
      "Extrageți metadatele de e-mail disponibile pentru o denumire mai sigură și mai semnificativă.",
      "Generați copii de text care pot fi căutate în timp ce urmăriți progresul lotului."
    ],
    "workflow": [
      "Selectați fișiere sau foldere care conțin mesaje de e-mail exportate.",
      "Previzualizați extragerea planificată a metadatelor și modificările numelui fișierelor.",
      "Generați nume de fișiere sigure pentru duplicat și copii TXT care pot fi căutate la nivel local."
    ],
    "architecture": [
      {
        "title": "Selectarea intrării",
        "description": "Acceptă introducerea fișierelor și folderelor locale pentru loturi de arhivă."
      },
      {
        "title": "Extragerea metadatelor",
        "description": "Citește datele de mesaj necesare pentru numele fișierelor și conversia textului."
      },
      {
        "title": "Strat de ieșire sigur",
        "description": "Aplică denumire sigură pentru duplicat și creează copii TXT care pot fi căutate."
      }
    ],
    "qualityNotes": [
      "Previzualizează modificările planificate înainte de a modifica numele fișierelor.",
      "Gestionează denumirea în siguranță pentru duplicat pentru a evita suprascrierile accidentale.",
      "Procesează arhivele la nivel local pentru gestionarea fișierelor care ține cont de confidențialitate."
    ],
    "challenges": [
      {
        "title": "Mai multe formate de e-mail",
        "challenge": "Utilitarul trebuie să proceseze atât exporturile EML, cât și MSG, păstrând în același timp comportamentul ușor de înțeles.",
        "resolution": "Fluxul de lucru se concentrează pe extragerea, previzualizarea și conversia metadatelor, mai degrabă decât pe expunerea complexității specifice formatului."
      },
      {
        "title": "Siguranță pentru redenumirea lotului",
        "challenge": "Redenumirea automată poate crea greșeli greu de anulat dacă modificările sunt aplicate orbește.",
        "resolution": "Previzualizarea și denumirea în siguranță pentru duplicat fac parte din fluxul de lucru principal."
      }
    ],
    "decisions": [
      {
        "title": "Utilitar desktop local",
        "explanation": "Procesarea locală se potrivește mai bine cu munca de arhivă sensibilă decât un formular găzduit sau flux de lucru backend."
      },
      {
        "title": "Previzualizare-primul comportament",
        "explanation": "Afișarea modificărilor planificate înainte de modificare reduce riscul în operațiunile cu fișiere batch."
      }
    ],
    "results": [
      "A făcut ca arhivele de e-mail exportate să fie mai ușor de căutat și organizat la nivel local.",
      "A creat un flux mai sigur pentru redenumirea bazată pe metadate și conversia textului."
    ],
    "lessons": [
      "Automatizarea fișierelor necesită previzualizare și gestionarea coliziunilor ca caracteristici de primă clasă.",
      "Instrumentele locale sunt potrivite atunci când datele pot fi sensibile sau private."
    ],
    "status": "Proiect de portofoliu"
  },
  "custom-translation-management-system": {
    "title": "Sistem personalizat de management al traducerilor",
    "shortTitle": "Sistem de traducere",
    "category": "Aplicație desktop / Python",
    "summary": "A refactorizat și extins un sistem de gestionare a traducerilor desktop privat, bazat pe conceptul original al clientului. Am moștenit un V1 existent, am reproiectat structura aplicației și am separat logica strâns cuplată în module care pot fi întreținute. M-am ocupat de arhitectură, de dezvoltare Python, de testare, de depanare, de îmbunătățiri ale fluxului de lucru, de consistența glosarului și de livrarea finală. Rezultatul a fost o aplicație mai curată, mai stabilă și mai ușor de întreținut, pregătită pentru dezvoltarea continuă. Detaliile proiectului sunt limitate din cauza NDA.",
    "detailedDescription": "Am refactorizat și extins un sistem de management al traducerilor desktop privat, bazat pe conceptul original de produs și pe cerințele de afaceri ale clientului.",
    "features": [],
    "imageAlt": "Miniatura proiectului Sistemului de management al traducerilor personalizate",
    "role": "Dezvoltator Python și arhitect software",
    "caseStudyIntro": [
      "Am refactorizat și extins un sistem de management al traducerilor desktop privat, bazat pe conceptul original de produs și pe cerințele de afaceri ale clientului.",
      "Proiectul avea deja un V1 funcțional creat de un alt dezvoltator. Rolul meu a fost să înțeleg baza de cod existentă, să identific limitele acesteia și să o transform într-o aplicație mai curată, mai fiabilă și mai ușor de întreținut."
    ],
    "caseStudySections": [
      {
        "title": "Punctul de plecare",
        "paragraphs": [
          "Versiunea originală conținea baza produsului, dar codul necesita o restructurare semnificativă înainte ca aplicația să poată fi extinsă și menținută în siguranță.",
          "Am revizuit implementarea existentă, am urmărit principalele fluxuri de lucru, am identificat responsabilități strâns legate și am planificat un refactor arhitectural complet."
        ]
      },
      {
        "title": "Refactor complet",
        "paragraphs": [
          "Am reorganizat aplicația în module separate cu responsabilități mai clare.",
          "Refactorul sa concentrat pe:"
        ],
        "list": [
          "separarea logicii interfeței cu utilizatorul de logica de procesare;",
          "izolarea configurației și a stării proiectului;",
          "separarea serviciilor reutilizabile și a utilităților;",
          "reducerea dependențelor dintre componente;",
          "îmbunătățirea gestionării erorilor și a recuperării;",
          "ușurând testarea și modificarea pieselor individuale;",
          "crearea unei structuri care ar putea sprijini dezvoltarea viitoare."
        ],
        "afterListParagraphs": [
          "Aceasta nu a fost o curățare cosmetică. Structura aplicației a fost reproiectată astfel încât să poată fi adăugate noi funcționalități fără a continua creșterea complexității în baza de cod originală."
        ]
      },
      {
        "title": "Ce am livrat",
        "paragraphs": [
          "Munca mea a inclus:"
        ],
        "list": [
          "analiza completă a V1-ului existent;",
          "reproiectare arhitecturală;",
          "refactorizare completă a bazei de cod;",
          "separarea în module care pot fi întreținute;",
          "stabilizarea funcționalității existente;",
          "implementarea și rafinarea fluxurilor de lucru;",
          "organizarea proiectelor de traducere;",
          "configurație specifică companiei;",
          "consecvența terminologiei bazată pe glosar;",
          "procesare controlată a documentelor;",
          "revizuirea și aprobarea rezultatelor finalizate;",
          "testare, depanare și livrare finală."
        ]
      },
      {
        "title": "Contribuția mea",
        "paragraphs": [
          "Clientul a oferit ideea originală de produs și direcția de afaceri.",
          "Mi-am asumat responsabilitatea pentru evoluția tehnică a aplicației: înțelegerea codului moștenit, reproiectarea structurii acestuia, implementarea fluxurilor de lucru necesare, rezolvarea cazurilor marginale și pregătirea sistemului pentru o utilizare fiabilă în lumea reală.",
          "Rezultatul a fost o aplicație desktop semnificativ mai curată și mai ușor de întreținut, cu module separate, responsabilități mai clare și o bază mai solidă pentru dezvoltarea continuă."
        ]
      }
    ],
    "caseStudyNotice": "Acest proiect este protejat de NDA. Numele clienților, materialele sursă, capturile de ecran, solicitările, logica internă de afaceri, fluxurile de lucru proprietare și arhitectura detaliată nu sunt incluse în acest studiu de caz.",
    "sourceCodeNote": "Proiect privat. Codul sursă nu este disponibil public.",
    "status": "Proiect privat"
  },
  "excel-to-json-cli": {
    "title": "Excel în JSON CLI",
    "shortTitle": "Excel JSON",
    "category": "Transformarea datelor",
    "summary": "Un utilitar de linie de comandă care convertește coloanele selectate ale foii de lucru Excel în JSON curat, cu validare și tratare clară a erorilor.",
    "detailedDescription": "CLI acceptă intrarea XLSX, validează selecțiile antetului, gestionează opțiunile goale sau duplicate, creează directoare de ieșire și include teste automate pentru fluxurile de lucru cheie.",
    "features": [
      {
        "title": "Intrare XLSX",
        "description": "Citește datele din registrul de lucru Excel pentru transformarea în linia de comandă."
      },
      {
        "title": "Antete selectabile",
        "description": "Convertește numai coloanele din foaia de lucru selectate pentru ieșirea JSON."
      },
      {
        "title": "Gestionarea selecției duble și goale",
        "description": "Validează selecțiile și returnează erori mai clare pentru introducerea nevalidă."
      },
      {
        "title": "Export JSON",
        "description": "Scrie datele selectate ale foii de lucru într-un format structurat reutilizabil."
      },
      {
        "title": "Teste automate",
        "description": "Acoperă fluxurile de lucru de conversie și validare cheie cu pytest."
      }
    ],
    "imageAlt": "Miniatura proiectului Excel în JSON CLI",
    "role": "Dezvoltator Python",
    "problem": "Coloanele selectate ale foii de lucru Excel trebuie adesea convertite în JSON previzibil fără curățare manuală.",
    "solution": "Un utilitar de linie de comandă validează anteturile selectate, gestionează cazurile marginale și scrie rezultate JSON curate.",
    "goals": [
      "Faceți conversia XLSX în JSON repetabilă din linia de comandă.",
      "Validați selecțiile utilizatorului înainte de a scrie rezultatul.",
      "Păstrați stările de eroare suficient de clare pentru utilizarea practică a CLI."
    ],
    "technicalApproach": [
      "Utilizați openpyxl pentru a citi datele din registrul de lucru XLSX.",
      "Validați selecțiile antetului înainte de a începe conversia.",
      "Serializați coloanele selectate ale foii de lucru în JSON și creați directoare de ieșire atunci când este necesar.",
      "Utilizați pytest pentru a acoperi fluxurile de lucru importante de conversie și de tratare a erorilor."
    ],
    "workflow": [
      "Încărcați un registru de lucru XLSX și inspectați antetele foilor de lucru disponibile.",
      "Validați coloanele selectate înainte de export.",
      "Scrieți JSON curat într-o locație de ieșire pregătită."
    ],
    "architecture": [
      {
        "title": "Cititor caiet de lucru",
        "description": "Încarcă datele din foile de calcul și expune antetele foilor de lucru pentru selecție."
      },
      {
        "title": "Stratul de validare",
        "description": "Verifică selecțiile goale, duplicate și nevalide înainte de export."
      },
      {
        "title": "Scriitor JSON",
        "description": "Creează directoare de ieșire și scrie date JSON structurate."
      }
    ],
    "qualityNotes": [
      "Validează selecțiile de antet goale și duplicate.",
      "Creează directoare de ieșire atunci când este necesar.",
      "Include teste automate pentru fluxurile de lucru de conversie cheie."
    ],
    "challenges": [
      {
        "title": "Ștergeți erorile CLI",
        "challenge": "Selecțiile de antet nevalide pot produce rezultate confuze dacă validarea are loc prea târziu.",
        "resolution": "CLI validează opțiunile goale și duplicate înainte de a scrie JSON."
      },
      {
        "title": "Ieșire repetabilă a fișierului",
        "challenge": "Exporturile manuale pot eșua atunci când folderele de ieșire nu există deja.",
        "resolution": "Utilitarul pregătește directoare de ieșire ca parte a fluxului de lucru de conversie."
      }
    ],
    "decisions": [
      {
        "title": "Interfață de linie de comandă",
        "explanation": "Un CLI este o potrivire ușoară pentru sarcini repetabile de transformare a datelor."
      },
      {
        "title": "acoperire pytest",
        "explanation": "Testele sunt utile aici, deoarece regulile de conversie și cazurile marginale de validare sunt ușor de regresat."
      }
    ],
    "results": [
      "Am creat un flux de lucru repetabil de la XLSX la JSON cu teste automate.",
      "S-a făcut mai clare erorile de selecție a antetului înainte ca rezultatul să fie scris."
    ],
    "lessons": [
      "Instrumentele de date mici beneficiază de aceeași disciplină de validare ca și aplicațiile mai mari.",
      "Acoperirea testului se plătește rapid atunci când un CLI are mai multe cazuri de intrare."
    ],
    "status": "Proiect de portofoliu"
  },
  "books-data-scraper": {
    "title": "Cărți Data Scraper",
    "shortTitle": "Cărți Scraper",
    "category": "Web Scraping și Export",
    "summary": "Un scraper Python compact care extrage datele din cărți în ieșiri structurate JSON și CSV, cu validare de bază și teste automate.",
    "detailedDescription": "Proiectul folosește o structură de analiză concentrată, validează înregistrările colectate, scrie ieșiri JSON și CSV și păstrează logica de scraping acoperită de testele automate.",
    "features": [
      {
        "title": "Arhitectură structurată a parserului",
        "description": "Menține analizarea paginilor organizată și mai ușor de adaptat."
      },
      {
        "title": "Filtre",
        "description": "Acceptă restrângerea înregistrărilor din cărți colectate înainte de export."
      },
      {
        "title": "Export CSV sau JSON",
        "description": "Scrie formate de ieșire reutilizabile pentru analiză sau procesare ulterioară."
      },
      {
        "title": "Validare",
        "description": "Verifică înregistrările colectate înainte de a le trata ca fiind pregătite pentru export."
      },
      {
        "title": "Teste automate",
        "description": "Păstrează testabil comportamentul de răzuire a miezului și de analiză."
      }
    ],
    "imageAlt": "Miniatura proiectului Books Data Scraper",
    "role": "Dezvoltator Python",
    "problem": "Datele cărților trebuie colectate într-un format structurat care poate fi filtrat și reutilizat.",
    "solution": "Un racletor testat colectează înregistrări structurate de carte, aplică filtre, validează datele și exportă rezultate reutilizabile.",
    "goals": [
      "Colectați înregistrările din cărți într-o structură coerentă.",
      "Păstrați logica parserului suficient de curată pentru a testa și adapta.",
      "Exportați datele în formate care pot fi reutilizate în afara scraperului."
    ],
    "technicalApproach": [
      "Utilizați solicitările pentru a prelua paginile sursă.",
      "Utilizați lxml pentru a analiza informațiile structurate ale cărții din conținutul paginii.",
      "Validați înregistrările colectate înainte de export.",
      "Suportă ieșire CSV și JSON pentru fluxuri de lucru de date reutilizabile."
    ],
    "workflow": [
      "Solicitați pagini cu lista cărților de la sursa selectată.",
      "Analizați și validați înregistrările de carte structurate.",
      "Aplicați filtre și exportați date CSV sau JSON reutilizabile."
    ],
    "architecture": [
      {
        "title": "Aducător",
        "description": "Preia conținutul paginii pentru fluxul de lucru de scraping."
      },
      {
        "title": "Analizator",
        "description": "Extrage înregistrările structurate ale cărților din conținutul HTML."
      },
      {
        "title": "Exportator",
        "description": "Scrie înregistrările validate în CSV sau JSON."
      }
    ],
    "qualityNotes": [
      "Menține logica parserului suficient de separată pentru a fi testată.",
      "Validează înregistrările colectate înainte de export.",
      "Acceptă formate de ieșire reutilizabile pentru procesare ulterioară."
    ],
    "challenges": [
      {
        "title": "Mentenabilitatea analizatorului",
        "challenge": "Logica de scraping poate deveni greu de adaptat atunci când preocupările privind preluarea, analizarea, filtrarea și exportul sunt amestecate.",
        "resolution": "Proiectul păstrează o structură de parser curată și validează înregistrările înainte de export."
      },
      {
        "title": "Ieșire reutilizabilă",
        "challenge": "Datele colectate au valoare limitată dacă nu pot fi reutilizate în alte instrumente.",
        "resolution": "Opțiunile de export CSV și JSON fac rezultatele mai ușor de inspectat sau procesat ulterior."
      }
    ],
    "decisions": [
      {
        "title": "HTTP și lxml",
        "explanation": "Proiectul rămâne în mod intenționat ușor, cu solicitări HTTP și analiză HTML directă, mai degrabă decât automatizarea browserului."
      },
      {
        "title": "Teste în jurul logicii scraper",
        "explanation": "Testele automate ajută la menținerea stabilă a comportamentului de analiză pe măsură ce scraperul evoluează."
      }
    ],
    "results": [
      "Produse exporturi de date structurate ale cărților dintr-un flux de lucru clar al analizorului.",
      "A păstrat testarea logicii de scraping printr-o structură de proiect mai curată."
    ],
    "lessons": [
      "Scraperele sunt mai ușor de întreținut atunci când pașii de preluare, analizare, validare și export rămân separați.",
      "Validarea protejează fluxurile de lucru din aval de înregistrările colectate neformate."
    ],
    "status": "Proiect de portofoliu"
  },
  "desktop-data-extraction-tool": {
    "title": "Instrument de extragere a datelor de pe desktop",
    "shortTitle": "Instrument de extracție",
    "category": "Automatizare și export de date",
    "summary": "O aplicație desktop Python reutilizabilă pentru extragerea datelor de site-uri web structurate și exportarea rezultatelor în CSV și Excel.",
    "detailedDescription": "Instrumentul oferă un flux de lucru de extracție configurabil, validare, înregistrare și eșantion de ieșire în siguranță pentru portofoliu pentru demonstrație.",
    "features": [
      {
        "title": "Interfață desktop",
        "description": "Oferă o interfață de utilizare locală pentru configurarea și rularea fluxurilor de lucru de extracție."
      },
      {
        "title": "Flux de lucru de extracție configurabil",
        "description": "Păstrează instrumentul reutilizabil în loc să fie legat de o sursă privată de date."
      },
      {
        "title": "Exporturi CSV și Excel",
        "description": "Scrie datele colectate în formate familiare pentru utilizare operațională."
      },
      {
        "title": "Validare și înregistrare",
        "description": "Adaugă vizibilitate comportamentului de extracție și calității rezultatelor."
      },
      {
        "title": "Eșantion de ieșire în siguranță pentru portofoliu",
        "description": "Demonstrează fluxul de lucru fără a expune date surse private."
      }
    ],
    "imageAlt": "Miniatura proiectului Instrumentului de extragere a datelor de pe desktop",
    "role": "Dezvoltator Python",
    "problem": "Fluxurile de lucru reutilizabile de extragere a datelor site-ului au nevoie de o interfață simplă pentru operator și de opțiuni de export de încredere.",
    "solution": "O aplicație desktop Python oferă extracție configurabilă, validare, înregistrare și export CSV sau Excel.",
    "goals": [
      "Furnizați un flux de lucru desktop reutilizabil pentru extragerea datelor de pe site.",
      "Acceptă exportul CSV și Excel pentru o utilizare familiară în aval.",
      "Păstrați portofoliul de date demonstrative în siguranță."
    ],
    "technicalApproach": [
      "Utilizați Tkinter pentru o interfață desktop locală.",
      "Păstrați modul de comportament de scraping, astfel încât logica de extracție să poată fi configurată.",
      "Validați datele colectate și înregistrați activitatea fluxului de lucru.",
      "Exportați rezultatul structurat în formatele CSV și Excel."
    ],
    "workflow": [
      "Configurați fluxul de lucru de extracție din interfața desktop.",
      "Colectați și validați datele structurate ale site-ului web.",
      "Exportați rezultatele în CSV sau Excel cu suport de înregistrare."
    ],
    "architecture": [
      {
        "title": "Interfața Tkinter",
        "description": "Oferă operatorului o suprafață de control local pentru configurare și execuție."
      },
      {
        "title": "Modul de extracție",
        "description": "Se ocupă de comportamentul de colectare a datelor site-ului web reutilizabil."
      },
      {
        "title": "Stratul de validare și export",
        "description": "Verifică înregistrările colectate și scrie rezultate CSV sau Excel."
      }
    ],
    "qualityNotes": [
      "Separă comportamentul interfeței de logica de extracție reutilizabilă.",
      "Include validarea și înregistrarea în jurnal pentru vizibilitate operațională.",
      "Utilizează eșantionul de ieșire sigur pentru portofoliu, mai degrabă decât date private."
    ],
    "challenges": [
      {
        "title": "Reutilizabil fără date private",
        "challenge": "Instrumentul necesar pentru a demonstra capacitatea de extracție fără a expune o sursă privată sau un set de date.",
        "resolution": "Proiectul folosește un eșantion sigur pentru portofoliu și o descriere configurabilă a fluxului de lucru."
      },
      {
        "title": "Vizibilitatea operatorului",
        "challenge": "Instrumentele de extragere de pe desktop se pot simți opace dacă rulează fără feedback.",
        "resolution": "Validarea și înregistrarea în jurnal fac parte din fluxul de lucru, astfel încât activitatea și calitatea rezultatelor rămân vizibile."
      }
    ],
    "decisions": [
      {
        "title": "Aplicația desktop Tkinter",
        "explanation": "Tkinter se potrivește unui instrument Python local în care greutatea instalării și simplitatea operațională contează."
      },
      {
        "title": "Exporturi CSV și Excel",
        "explanation": "Aceste formate corespund nevoilor comune de transfer pentru date operaționale structurate."
      }
    ],
    "results": [
      "Am construit o structură de instrumente de extracție sigură pentru portofoliu, cu suport local de export.",
      "A creat un model reutilizabil pentru extragerea, validarea și exportul configurabile."
    ],
    "lessons": [
      "Instrumentele de automatizare desktop sunt mai puternice atunci când expun configurația și progresul clar.",
      "Exemplele de portofoliu pot demonstra arhitectura fără a dezvălui seturi de date private."
    ],
    "gallery": [
      {
        "src": "active/proiecte/bnbscraper/main.png",
        "alt": "Interfața principală a instrumentului de extragere a datelor de pe desktop",
        "caption": "Interfață desktop principală pentru configurarea și rularea sarcinilor de extracție."
      },
      {
        "src": "active/proiecte/bnbscraper/output_xlsx.png",
        "alt": "Ieșire din foaia de calcul generată de instrumentul de extragere a datelor de pe desktop",
        "caption": "Ieșire de foi de calcul generată din înregistrările colectate."
      },
      {
        "src": "active/proiecte/bnbscraper/progress.png",
        "alt": "Instrumentul de extragere a datelor de pe desktop rulează vizualizarea progresului",
        "caption": "Vizualizare progres pentru o sesiune de extragere în curs de desfășurare."
      }
    ],
    "status": "Proiect de portofoliu"
  },
  "filegatekeeper": {
    "title": "FileGatekeeper",
    "shortTitle": "FileGatekeeper",
    "category": "Utilitar de securitate Windows",
    "summary": "Un utilitar de securitate local Windows pentru inspectarea, scanarea, izolarea și eliberarea în siguranță a fișierelor client care nu sunt de încredere înainte de utilizare.",
    "detailedDescription": "FileGatekeeper este un utilitar de securitate desktop Windows în curs de desfășurare, conceput pentru liber profesioniști, dezvoltatori, recrutori și echipe mici care primesc în mod regulat fișiere de la clienți sau alte surse externe. Acesta creează un flux de lucru de inspecție controlat pentru PDF-uri, documente Microsoft Office, imagini, arhive ZIP și 7z, arhive imbricate, foldere cu cod sursă, scripturi, executabile, medii virtuale, foldere de dependență, cârlige Git și configurații IDE. Aplicația combină detectarea tipului de fișier real, integrarea Microsoft Defender, inspecția statică, scorarea deterministă a riscului, analiza arhivă și a folderelor de proiect și un seif local de carantină securizat. Utilizatorii primesc constatări clare, care pot fi citite de om și pot rescana, elibera, șterge sau crea copii igienizate ale conținutului acceptat. Aplicația nu execută niciodată automat fișierele inspectate și nu oferă niciodată garanții absolute de siguranță. Accesul la depozit este disponibil la cerere pentru clienții calificați sau pentru recenzii tehnice.",
    "seoTitle": "FileGatekeeper | Utilitar de securitate Windows | TantyaStorm",
    "seoDescription": "FileGatekeeper este un utilitar de desktop Windows în curs de desfășurare pentru inspectarea, scanarea, izolarea și revizuirea fișierelor client neîncrezătoare folosind Python, PySide6, Microsoft Defender și analize statice explicabile.",
    "heroSubtitle": "Inspectați fișierele care nu sunt de încredere înainte de utilizare",
    "heroText": "Un utilitar de securitate local Windows pentru inspecția controlată a fișierelor, carantină, evaluarea riscului explicabilă și decizii explicite ale utilizatorilor.",
    "requestAccessLabel": "Solicitați acces la depozit",
    "exploreFeaturesLabel": "Explorați funcțiile",
    "badges": [
      "Proiect în derulare",
      "Depozit privat",
      "Desktop Windows",
      "Procesare locală"
    ],
    "features": [
      {
        "title": "Detectarea tipului de fișier real",
        "description": "Inspectează semnăturile și structura fișierelor în loc să trateze extensiile de fișiere ca fiind autorizate."
      },
      {
        "title": "Integrarea Microsoft Defender",
        "description": "Rulează scanări locale Defender CLI ca parte a fluxului de lucru de inspecție."
      },
      {
        "title": "Analiza arhivelor și folderelor",
        "description": "Recenzii ZIP, 7z, arhive imbricate, foldere cu codul sursă, scripturi, cârlige, configurația IDE, .venv și indicatorii node_modules."
      },
      {
        "title": "Verificarea documentelor",
        "description": "Efectuează verificări statice pentru PDF-uri, documente OOXML Office, imagini și fluxuri de copii igienizate acceptate."
      },
      {
        "title": "Scor de risc explicabil",
        "description": "Calculează nivelurile de risc deterministe din constatări bazate pe dovezi și le prezintă într-un limbaj care poate fi citit de om."
      },
      {
        "title": "Seif local de carantină",
        "description": "Păstrează fișierele care nu sunt de încredere izolate până când utilizatorul le scanează, eliberează, igienizează sau șterge în mod explicit."
      }
    ],
    "imageAlt": "Interfața utilitarului de securitate FileGatekeeper Windows care arată carantina fișierelor, etapele de inspecție, constatările de risc și acțiunile explicite ale fișierului.",
    "role": "Dezvoltator de aplicații desktop Python",
    "problem": "Independenții și echipele tehnice primesc frecvent documente, arhive, foldere cu cod sursă, executabile, scripturi, dependențe și configurații de proiecte ascunse din surse externe. Deschiderea sau rularea acestor fișiere direct introduce riscuri inutile. Ieșirea antivirus tradițională poate detecta amenințările cunoscute, dar adesea nu explică structura completă a fișierelor, indicatorii riscanți, conținutul încorporat, compoziția arhivei sau configurația la nivel de proiect într-un mod care să susțină o decizie informată.",
    "solution": "FileGatekeeper creează un flux de lucru local controlat: primiți un fișier sau folder, izolați-l, detectați tipul său real, scanați-l cu Microsoft Defender, efectuați o inspecție statică, calculați un nivel de risc explicabil, prezentați constatări și solicitați o decizie explicită a utilizatorului înainte de rescanare, lansare, crearea unei copii igienizate sau ștergere.",
    "workflow": [
      "Aportul",
      "Izolarea",
      "Detectare tip",
      "Defender Scan",
      "Inspecție statică",
      "Evaluarea riscurilor",
      "Recenzie utilizator",
      "Eliberați, dezinfectați, rescanați sau ștergeți"
    ],
    "architecture": [
      {
        "title": "Fără execuție automată",
        "description": "Fișierele inspectate nu sunt niciodată lansate sau rulate ca parte a fluxului de lucru de revizuire."
      },
      {
        "title": "Prelucrare locală",
        "description": "Inspecția, scorul, carantina și deciziile utilizatorilor rămân pe computerul Windows local."
      },
      {
        "title": "Constatări bazate pe dovezi",
        "description": "Constatările pot fi citite de om și disting rezultatele scanării cunoscute, structura fișierelor, indicatorii statici și riscurile la nivel de proiect."
      },
      {
        "title": "Scor determinist",
        "description": "Nivelurile de risc sunt calculate pe baza unor reguli explicabile și nu sunt niciodată prezentate ca garanții absolute de siguranță."
      },
      {
        "title": "Acțiuni finale explicite",
        "description": "Utilizatorii trebuie să confirme deciziile de eliberare, crearea copiei igienizate, rescanarea sau ștergerea."
      },
      {
        "title": "Limbajul măsurat",
        "description": "Aplicația nu poate raporta nicio amenințare cunoscută detectată, dar nu pretinde că fișierele sunt lipsite de riscuri."
      }
    ],
    "qualityNotes": [
      "Au trecut 343 de teste automate",
      "1 test sărit în mod intenționat",
      "Ruff curat",
      "mypy clean",
      "Nu există descoperiri de bandit de mare severitate",
      "Execuție întărită a subprocesului",
      "Limitele de copiere a fișierelor verificate",
      "Interfețe de acces la date tastate",
      "Arhiva defensivă și analiza documentelor"
    ],
    "limitations": "FileGatekeeper nu garantează că fișierele inspectate nu prezintă riscuri. Este conceput pentru a oferi izolare locală, rezultate de scanare, dovezi statice și decizii explicite de revizuire fără a executa automat conținutul inspectat.",
    "repositoryAccess": {
      "title": "Acces la depozitul privat",
      "text": "FileGatekeeper este dezvoltat în prezent într-un depozit privat. Accesul la depozit poate fi oferit la cerere clienților calificați pentru evaluare tehnică. În funcție de cerințele de revizuire, accesul poate include codul sursă selectat, arhitectura, teste, documentație și detalii de implementare.",
      "buttonLabel": "Solicitați acces la depozit"
    },
    "developmentStatus": [
      {
        "label": "Stare",
        "value": "Proiect privat în derulare"
      },
      {
        "label": "Teste automate",
        "value": "343 în trecere"
      },
      {
        "label": "Teste sărite",
        "value": "1 sărit în mod intenționat"
      },
      {
        "label": "Verificări statice",
        "value": "Ruff curat, mypy curat"
      },
      {
        "label": "Verificări de securitate",
        "value": "Nu există descoperiri de bandit de mare severitate"
      }
    ],
    "confidentialityNote": "Accesul la depozit este disponibil la cerere pentru clienții calificați sau pentru recenzii tehnice.",
    "status": "Proiect privat în derulare"
  }
} satisfies Translation["projects"];
