import {
  type RezumatBlock,
  type TestQuestion,
  bizantRezumat,
  bizantTest,
  bizantMaterieComplet,
} from "./bizant-extra";
import { ibuTest } from "./ibu-extra";
import { iborRezumat, iborMaterieComplet, iborTest } from "./ibor-extra";

export type { RezumatBlock, TestQuestion } from "./bizant-extra";

export type ExamStart = {
  date: string;
  time: string;
  timezone: string;
};

export type ContentBlock =
  | { type: "chapter"; title: string; children?: ContentBlock[] }
  | { type: "subchapter"; title: string; children?: ContentBlock[] }
  | { type: "key-idea"; text: string }
  | { type: "definition"; term: string; text: string }
  | { type: "quote"; text: string; source?: string }
  | { type: "exam-questions"; questions: string[] }
  | { type: "observation"; text: string }
  | { type: "paragraph"; text: string };

export type Exam = {
  slug: string;
  discipline: string;
  profesor: string;
  data: string;
  interval: string;
  sala: string;
  examStart: ExamStart | null;
  isVP: boolean;
  materie: ContentBlock[];
  rezumat?: RezumatBlock[];
  test?: TestQuestion[];
  materieComplet?: ContentBlock[];
};

export const exams: Exam[] = [
  {
    slug: "istoria-si-spiritualitatea-bizantului",
    discipline: "Istoria și spiritualitatea Bizanțului",
    profesor: "Conf. dr. Cojocaru Marcel",
    data: "02.06.2026",
    interval: "13:00–16:00",
    sala: "Iustin Moisescu",
    examStart: { date: "2026-06-02", time: "13:00", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      // ── CURS I ──────────────────────────────────────────────────────────────
      {
        type: "chapter",
        title: "Curs I — Iconoclasmul și Dinastia Isauriană (726–843)",
        children: [
          {
            type: "subchapter",
            title: "Activitatea legislativă a lui Leon III — Ecloga (726)",
            children: [
              {
                type: "paragraph",
                text: "În anul 726, Leon al III-lea și fiul său Constantin al V-lea au publicat Ecloga, un manual juridic redactat în limba greacă, ce cuprindea cele mai importante legi civile și penale. Ecloga adaptează dreptul lui Iustinian la realitățile epocii, fiind puternic influențată de morala creștină — proteja femeia și copilul — și introducea pedepse corporale de origine orientală (mutilări în locul pedepsei cu moartea). A fost redactată într-un limbaj clar și accesibil, influențând legislația statelor slave și vechiul drept românesc.",
              },
              {
                type: "key-idea",
                text: "Ecloga (726) — primul cod juridic în greacă al Imperiului, adaptat valorilor creștine; a influențat legislația slavă și română.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Cei 4 termeni esențiali",
            children: [
              {
                type: "definition",
                term: "Iconoclasm",
                text: "Distrugerea icoanelor (din gr. eikon = chip + kláo = a sparge). Curentul care respinge și distruge icoanele.",
              },
              {
                type: "definition",
                term: "Iconomahie",
                text: "Lupta împotriva icoanelor (gr. máchē = luptă). Sinonim cu iconoclasmul, accentuând caracterul militant al mișcării.",
              },
              {
                type: "definition",
                term: "Iconoclaști / Iconomahi",
                text: "Susținătorii distrugerii icoanelor — împărații și teologii care promovau politica iconoclastă.",
              },
              {
                type: "definition",
                term: "Iconoduli / Iconofili",
                text: "Apărătorii icoanelor (gr. doûlos = slujitor; fílos = prieten). Cei care cinstesc icoanele și le apără teologic.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Motivațiile pornirii iconoclasmului",
            children: [
              {
                type: "key-idea",
                text: "Motiv teologic: teama de idolatrie și interpretarea literală a interdicției veterotestamentare de a face 'chip cioplit'. Influența iudaismului și a islamului, care interziceau reprezentările figurative, a jucat un rol important. Influența pavlicienilor și a altor secte dualiste care respingeau materia.",
              },
              {
                type: "key-idea",
                text: "Motiv politic și economic: Leon al III-lea dorea limitarea puterii mănăstirilor, care dețineau domenii imense și se bucurau de imunități fiscale. Monahii iconofili erau o forță politică independentă față de stat.",
              },
              {
                type: "key-idea",
                text: "Motiv providențialist: în 726, un vulcan a erupt între insulele Thera și Therasia — Leon al III-lea a interpretat acest fenomen ca mânie divină din cauza 'idolatriei' icoanelor.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Relațiile papei cu Regatul Francilor în perioada iconoclastă (fără Sinodul VII Ecumenic)",
            children: [
              {
                type: "key-idea",
                text: "Iconoclasmul a creat o ruptură profundă între Răsărit și Apus, forțând papii să caute noi aliați politici în Occident.",
              },
              {
                type: "key-idea",
                text: "Papa Ștefan al II-lea (752–757) a traversat Alpii în iarna 753–754 — prima vizită a unui papă în regatul francilor — și s-a aliat cu regele Pepin cel Scurt (751–768). Pepin a eliberat teritoriile cucerite de longobarzi și le-a donat papei: Exarhatul de Ravenna și alte teritorii centrale ('Donatio Pipini') — aceasta pune bazele Statului Papal.",
              },
              {
                type: "key-idea",
                text: "Încoronarea lui Carol cel Mare (800): Papa Leon al III-lea l-a încoronat pe Carol la Roma, în noaptea de Crăciun 800, ca 'Împărat al romanilor'. Acest act a oficializat ruptura politică de Bizanț și a creat un rival direct al împăratului de la Constantinopol.",
              },
              {
                type: "observation",
                text: "Profesorul cere această temă FĂRĂ Sinodul VII Ecumenic (787). Nu intra în detalii despre Sinodul de la Niceea II în contextul relațiilor cu francii.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Activitatea Sfintei Irina post-Sinodul VII Ecumenic (787–802)",
            children: [
              {
                type: "key-idea",
                text: "Sf. Împărăteasă Irina a convocat și prezideat Sinodul VII Ecumenic de la Niceea (787), care a restabilit cultul icoanelor. A guvernat ca regentă pentru fiul ei Constantin al VI-lea, intrând în conflict cu acesta. În 797, l-a orbit pe Constantin al VI-lea și a preluat puterea singură, cu titlul masculin de 'basileus' — primul caz în istoria Bizanțului.",
              },
              {
                type: "key-idea",
                text: "Politică economică demagogică: a redus taxele comerciale în portul Capitalei și a acordat imunități fiscale mănăstirilor — măsuri populare, dar care au dus la criză financiară severă a statului.",
              },
              {
                type: "key-idea",
                text: "Detronată în 802 printr-o lovitură de palat condusă de Nikephoros (ministrul de finanțe), exilată mai întâi în insula Prinkipo, apoi în Lesbos, unde a murit în 803. Este cinstită ca sfântă de Biserica Ortodoxă.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Ioan Gramaticul (Gramaticianul) — în mai multe situații",
            children: [
              {
                type: "key-idea",
                text: "1. Sub Leon V Armeanul (815): Ioan a fost trimis ca ambasador la curtea lui Carol cel Mare. La revenire, împăratul i-a încredințat misiunea de a aduna documentația teologică patristică pentru reluarea iconoclasmului — a compus o culegere de texte iconoclaste, utilizată la sinodul iconoclast din 815.",
              },
              {
                type: "key-idea",
                text: "2. Ca patriarh sub Teofil (837–843): Ioan a ajuns patriarh al Constantinopolului — era mentorul și unchiul spiritual al împăratului Teofil. Adversarii îl acuzau că practică magia și astrologia. A susținut activ persecuția iconofililor în a doua perioadă iconoclastă.",
              },
              {
                type: "key-idea",
                text: "3. Depunerea din 843: după moartea lui Teofil, împărăteasa Teodora a restaurat cultul icoanelor. Ioan Gramaticul a fost depus din scaunul patriarhal în 843 (Duminica Ortodoxiei, 11 martie) și trimis în exil.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Sfânta Kasia și Împărăteasa Teodora",
            children: [
              {
                type: "paragraph",
                text: "Kasia și Teodora apar în același context: concursul de frumusețe organizat de împăratul Teofil (aprox. 830) pentru a-și alege soția.",
              },
              {
                type: "key-idea",
                text: "Teofil s-a oprit în fața Kasiei, cea mai înzestrată dintre candidate, și i-a spus: 'Prin femeie ne-a venit tot răul' (referire la Eva). Kasia i-a răspuns prompt: 'Dar tot prin femeie ne-a venit și tot binele' (referire la Maica Domnului). Teofil, intimidat de răspunsul ei, a ales-o pe Teodora.",
              },
              {
                type: "key-idea",
                text: "Kasia s-a retras la o mănăstire pe care a ctitorit-o, devenind imnografă de seamă. Compozițiile ei liturgice sunt cântate și astăzi în Biserica Ortodoxă, cea mai cunoscută fiind stihira 'Doamne, femeia cea căzută în multe păcate' (Marți seara a Săptămânii Patimilor).",
              },
              {
                type: "key-idea",
                text: "Teodora a guvernat ca regentă pentru fiul ei Mihail al III-lea după moartea lui Teofil (842). În 843, a restaurat definitiv cultul icoanelor — eveniment celebrat ca 'Triumful Ortodoxiei' (prima Duminică din Postul Mare). Teodora este cinstită ca sfântă.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Grapții — Sfântul Teodor și Sfântul Teofan al Niceii",
            children: [
              {
                type: "key-idea",
                text: "Teodor și Teofan au fost doi frați monahi iconofili, martiri ai celei de-a doua perioade iconoclaste (sub Teofil). Au refuzat să renunțe la cinstirea icoanelor și au fost supuși unor torturi severe: biciuiți repetat și, în cele din urmă, li s-au gravat pe frunte cu fierul înroșit versuri iconoclaste batjocoritoare — de aceea sunt numiți 'Grapții' (gr. graphō = a scrie/a grava). Sf. Teofan al Niceii a murit în urma torturii (829), iar Sf. Teodor a supraviețuit și a trăit până după restaurarea Ortodoxiei.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Realizările din timpul lui Mihail III sub coordonarea lui Bardas",
            children: [
              {
                type: "key-idea",
                text: "Mihail al III-lea (842–867) era prea tânăr la urcarea pe tron, astfel că unchiul său Bardas, caesar din 862, a condus efectiv imperiul.",
              },
              {
                type: "key-idea",
                text: "Reorganizarea și restaurarea Universității din Constantinopol (la palatul Magnaura): Bardas a pus accent pe disciplinele laice — filosofie, geometrie, astronomie, gramatică. Leon Matematicianul a fost numit în fruntea institutului, contribuind decisiv la formarea unei elite intelectuale de funcționari și savanți.",
              },
              {
                type: "key-idea",
                text: "Tot în această perioadă, Sfinții Chiril și Metodiu au primit misiunea de creștinare a slavilor din Moravia (863) — o consecință directă a renașterii culturale și misionare bizantine.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Schisma fotiană — de la un capăt la altul",
            children: [
              {
                type: "key-idea",
                text: "Context și personaje: Patriarhul Ignatie al Constantinopolului a refuzat comuniunea lui Bardas (pentru viață imorală) și a fost silit să abdice (858). În locul lui a fost ales Fotie, un laic excepțional de cultivat, care a primit toate gradele hirotoniei în șase zile.",
              },
              {
                type: "key-idea",
                text: "Intervenția papei Nicolae I: Papa a refuzat să recunoască alegerea lui Fotie și l-a susținut pe Ignatie. Conflictul a escaladat și din cauza disputei privind jurisdicția asupra Bulgariei nou-creștinate (864) — atât Roma cât și Constantinopolul o revendicau.",
              },
              {
                type: "key-idea",
                text: "Contraatacul lui Fotie: Fotie a convocat un sinod la Constantinopol (867) care l-a excomunicat pe Papa Nicolae I și a condamnat adaosul Filioque în Crez — prima condamnare explicită a acestei practici occidentale.",
              },
              {
                type: "key-idea",
                text: "Împăcarea și reluarea conflictului: Împăratul Mihail III a fost ucis (867), Vasile I Macedoneanul a restaurat pe Ignatie (867). Sinodul de la Constantinopol (869–870) l-a condamnat pe Fotie. Dar Ignatie a murit (877) și Fotie a revenit ca patriarh (877–886), recunoscut de Roma. La moartea lui Vasile I, Leon VI l-a depus din nou pe Fotie (886).",
              },
              {
                type: "key-idea",
                text: "Miza teologică esențială: adaosul Filioque (Duhul Sfânt purcede și de la Fiul) introdus în Apus în Crez, pe care Fotie și Răsăritul îl considerau erezie — această dispută va alimenta Schisma cea Mare din 1054.",
              },
            ],
          },
          {
            type: "exam-questions",
            questions: [
              "Care este conținutul Eclogăi lui Leon al III-lea și prin ce se distinge de legislația anterioară?",
              "Explicați cei 4 termeni: iconoclasm, iconomahie, iconoclaști, iconoduli.",
              "Care au fost motivațiile teologice, politice și sociale ale declanșării iconoclasmului?",
              "Descrieți relațiile papei cu Regatul Francilor pe parcursul perioadei iconoclaste (Papa Ștefan II, Pepin cel Scurt, încoronarea lui Carol cel Mare).",
              "Care a fost activitatea Sfintei Irina după Sinodul VII Ecumenic și cum a ajuns să domine singură imperiul?",
              "În ce trei situații distincte apare Ioan Gramaticul în istoria iconoclasmului?",
              "Descrieți contextul în care apar Kasia și Teodora și ce reprezintă fiecare pentru istoria Bizanțului.",
              "Cine sunt Grapții și de ce poartă acest nume?",
              "Care au fost realizările culturale și educaționale din timpul lui Mihail III sub coordonarea lui Bardas?",
              "Prezentați schisma fotiană de la un capăt la altul: cauze, personaje, succesiune, mize teologice.",
            ],
          },
        ],
      },

      // ── CURS II ─────────────────────────────────────────────────────────────
      {
        type: "chapter",
        title: "Curs II — Perioada Macedoneană (867–1056)",
        children: [
          {
            type: "subchapter",
            title: "Vasile I Macedoneanul — activitate legislativă și ordine internă",
            children: [
              {
                type: "key-idea",
                text: "Procheiron (879): manual practic de legi pentru judecători, menit să înlocuiască Ecloga lui Leon III. Reprezintă o revenire la principiile juridice iustinianee, revizuite în spiritul creștin.",
              },
              {
                type: "key-idea",
                text: "Epanagoga (886, finalizată sub Leon VI): reglementează armonia dintre puterea imperială și cea patriarhală. Prevede că patriarhul este 'sufletul' statului, iar împăratul 'trupul' — concept important pentru relația Stat-Biserică în Bizanț.",
              },
              {
                type: "key-idea",
                text: "Politică anti-feudală: Vasile I a restaurat dreptul de preemțiune al țăranilor liberi și a dus o politică de limitare a expansiunii marilor proprietari (dynatoi), apărând proprietatea micilor agricultori (mikrói).",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Leon VI Filosoful — întreaga activitate",
            children: [
              {
                type: "key-idea",
                text: "Leon VI (886–912) poartă supranumele de 'Filosoful' sau 'Înțeleptul' datorită formației sale enciclopedice — a primit o educație temeinică sub îndrumarea patriarhului Fotie. Ironia istoriei: Leon VI a fost cel care l-a depus pe Fotie (886).",
              },
              {
                type: "key-idea",
                text: "Activitate legislativă: a finalizat Basilicalele — 60 de cărți de legi care codificau întregul drept bizantin în greacă, înlocuind definitiv Corpus Iuris Civilis latin al lui Iustinian. A emis și 113 Novele (legi noi).",
              },
              {
                type: "key-idea",
                text: "Prima soție — Sfânta Teofana: Leon a fost căsătorit mai întâi cu Teofana, o femeie evlavioasă care a dus o viață ascetică profundă. Este cinstită ca sfântă; moaștele sale se află în Catedrala Patriarhiei Ecumenice din Fanar.",
              },
              {
                type: "key-idea",
                text: "Disputa tetragamică: Leon VI s-a căsătorit de patru ori — lucru prohibit de canoane (a treia căsătorie era acceptată cu penitență, a patra era strict interzisă). Ultima căsătorie a fost cu Zoe Carbonopsina (904), mama viitorului Constantin VII. Patriarhul Nicolae Misticul i-a refuzat intrarea în Sfânta Sofia de Crăciun 906. Leon a cerut dispensă la Roma și l-a depus pe Nicolae, instalând pe Eftimie.",
              },
              {
                type: "key-idea",
                text: "Succesiunea Eftimie — Nicolae Misticul: La moartea lui Leon (912), Nicolae Misticul a revenit ca patriarh, l-a depus pe Eftimie și a organizat sinodul din 920 care a rezolvat criza tetragamică, interzicând definitiv a patra căsătorie în canoanele răsăritene.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Roman I Lekapenos — doar Sfânta Mahramă",
            children: [
              {
                type: "key-idea",
                text: "Roman I Lekapenos (920–944) a fost un general care a acaparat puterea, devenind co-împărat alături de Constantin VII Porfirogenetul (pe care l-a marginalizat). Profesorul cere un singur eveniment: aducerea Sfintei Mahrame.",
              },
              {
                type: "key-idea",
                text: "Sfânta Mahramă (Mandylionul) de la Edessa (944): Generalul Ioan Curcuas a cucerit Edessa și a obținut, prin negocieri, predarea Sfintei Mahrame — pânza pe care s-a imprimat în chip minunat chipul lui Hristos ('Icoana nefăcută de mână omenească', Acheiropoietos). La 15 august 944, Mahrama a fost adusă cu mare fast la Constantinopol, primită cu procesiune solemnă pe malul Bosforului de co-împărații Roman și Constantin.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Constantin VII Porfirogenetul — accent pe activitatea literară",
            children: [
              {
                type: "key-idea",
                text: "'Porfirogenetul' înseamnă 'născut în Purpură' (în Camera de Porfir a palatului imperial), indicând nașterea sa legitimă din căsătoria imperială. Constantin VII (913–959, domnie efectivă 945–959) este cel mai cult împărat bizantin.",
              },
              {
                type: "key-idea",
                text: "De Administrando Imperio (Despre administrarea imperiului): lucrare enciclopedică adresată fiului său Romanos, ce conține informații despre popoarele vecine (pecenegi, unguri, ruși, arabi), relațiile diplomatice și geopolitica imperiului.",
              },
              {
                type: "key-idea",
                text: "De Ceremoniis (Despre ceremonii): culegere de protocoale și ritualuri de curte, esențială pentru înțelegerea vieții ceremoniale bizantine.",
              },
              {
                type: "key-idea",
                text: "De Thematibus (Despre teme): lucrare geografico-administrativă despre organizarea teritorială a imperiului pe teme (provincii militare).",
              },
              {
                type: "key-idea",
                text: "A susținut enciclopedismul: a ordonat compilarea de mari enciclopedii pe teme diverse (agricultură, tactică militară, ambasade, legiuiri), contribuind la păstrarea literaturii antice și bizantine.",
              },
              {
                type: "observation",
                text: "Profesorul cere: fără Teofana împărăteasa, fără Nichifor Focas pentru această secțiune.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Creștinarea rușilor — trocul și botezul lui Vladimir",
            children: [
              {
                type: "key-idea",
                text: "Vladimir I al Kievului (980–1015) a trimis soli în mai multe state pentru a alege religia potrivită. Solii au vizitat musulmani, evrei, catolici germani și greci. Relatarea din cronica 'Povestea anilor de demult' descrie uimirea solilor la liturghia din Sf. Sofia: 'Nu știam dacă suntem în cer sau pe pământ.'",
              },
              {
                type: "key-idea",
                text: "Trocul politic (988–989): Vladimir a cucerit cetatea Cherson (Crimeea). Împăratul Vasile al II-lea, în dificultate militară, i-a cerut ajutor. S-au înțeles: Vladimir îi trimitea 6.000 de varegi ca ajutor militar, iar Vasile îi dădea de soție pe sora sa, prițesa Ana — singura femeie porfirogenetă disponibilă, o onoare imensă. Condiția: Vladimir trebuia să se boteze.",
              },
              {
                type: "key-idea",
                text: "Botezul lui Vladimir a avut loc la Cherson în 988/989, luând numele creștin Vasile. S-a căsătorit cu Ana și a botezat poporul rus în Nipru. Acest act a integrat Rusia în orbita civilizației bizantine — culturale, liturgice și artistice.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Împărătesele Zoe și Teodora pe tronul Bizanțului",
            children: [
              {
                type: "key-idea",
                text: "Zoe (978–1050), fiica lui Constantin VIII și nepoata lui Vasile II, reprezenta legitimitatea macedoneană. A fost căsătorită succesiv cu: Roman III Argyros (1028–1034), Mihail IV Paflagonul (1034–1041) și Constantin IX Monomahos (1042–1050). A co-domnit cu sora sa Teodora în 1042, după o răscoală populară ce l-a înlăturat pe Mihail V Calafatul (adoptat de Zoe).",
              },
              {
                type: "key-idea",
                text: "Teodora (980–1056) a refuzat inițial căsătoria și viața de curte, trăind retrasă. A co-domnit cu Zoe în 1042 (singura perioadă de co-domnie a două femei în istoria Bizanțului). După moartea lui Zoe (1050), Teodora a domnit singură (1055–1056) — ultima reprezentantă a Dinastiei Macedonene. A murit fără moștenitor, stingând dinastia.",
              },
              {
                type: "key-idea",
                text: "De câte ori a fost Zoe pe tron? — ca soție a trei împărați (Roman III, Mihail IV, Constantin IX) + co-domnia cu Teodora (1042). De câte ori a fost Teodora pe tron? — o dată ca co-domnitoare (1042) și o dată singură (1055–1056). Subiect posibil de examen: 'Teodora pe tronul Bizanțului' sau 'soție de Împărat?' — răspuns: Teodora nu a fost niciodată soție de împărat, ci a domnit singură sau co-domnitoare.",
              },
            ],
          },
          {
            type: "exam-questions",
            questions: [
              "Care este activitatea legislativă a lui Vasile I Macedoneanul și politica sa față de marii proprietari?",
              "De ce se numește Leon VI 'Filosoful' și în ce a constat activitatea sa legislativă?",
              "Explicați disputa tetragamică și conflictul dintre patriarhii Eftimie și Nicolae Misticul.",
              "Cine a fost Sfânta Teofana și unde se află moaștele ei?",
              "Ce este Sfânta Mahramă și în ce împrejurări a ajuns la Constantinopol sub Roman Lekapenos?",
              "Prezentați activitatea literară a lui Constantin Porfirogenetul (cele trei lucrări principale).",
              "Descrieți trocul dintre Vasile al II-lea și Vladimir la creștinarea rușilor.",
              "De câte ori a fost Zoe sau Teodora pe tronul Bizanțului? A fost Teodora soție de împărat?",
            ],
          },
        ],
      },

      // ── CURS III ─────────────────────────────────────────────────────────────
      {
        type: "chapter",
        title: "Curs III — Dinastia Comnenilor (1081–1185)",
        children: [
          {
            type: "subchapter",
            title: "Alexie I Comnenul și alianta cu venețienii (1081–1118)",
            children: [
              {
                type: "key-idea",
                text: "Alexie I Comnenul (1081–1118) a preluat un imperiu în criză gravă: amenințat de normanzi în Occident (Robert Guiscard), de turci selgiucizi în Anatolia și de pecenegi la Dunăre. A acceptat tronul ca o misiune de salvare.",
              },
              {
                type: "key-idea",
                text: "Factorii alianței cu venețienii (1082): Bizanțul nu mai dispunea de o flotă militară eficientă și nu putea face față normanzilor fără ajutor naval. Veneția era singura putere cu flota necesară. Alexie a negociat rapid.",
              },
              {
                type: "key-idea",
                text: "Hrisovul de Aur (1082): Alexie a acordat venețienilor privilegii comerciale fără precedent — scutire totală de taxe vamale în întreg imperiul, dreptul de a comercia liber în toate porturile (inclusiv Constantinopol), și un cartier propriu în Capitală (cu depozite, biserică, piețe). Venețienii deveneau mai avantajați comercial decât proprii supuși ai imperiului.",
              },
              {
                type: "key-idea",
                text: "Ce a însemnat venirea venețienilor în Constantinopol: prezența lor masivă (cu cartier propriu) a creat o enclavă comercială care controla schimburile din capitală. Pe termen scurt, Alexie a salvat imperiul de normanzi. Pe termen lung, privilegiile acordate au dus la dominarea economică a imperiului de către Veneția — tensiunile vor culmina cu devierea Cruciadei IV spre Constantinopol (1204).",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Pecenegii — de ce nu au rezistat în istorie",
            children: [
              {
                type: "key-idea",
                text: "Pecenegii erau un popor nomad de stepă (turanic) care la sf. sec. IX–X ocupau stepa dintre Dunăre și Don, amenințând Bizanțul, Rusia și Ungaria. Constantin Porfirogenetul, în De Administrando Imperio, îl sfătuia pe fiul său Romanos să mențină bune relații cu pecenegii, deoarece atât rușii cât și ungurii se tem de ei — pecenegii erau un instrument diplomatic util.",
              },
              {
                type: "key-idea",
                text: "Declinul și dispariția: Au fost zdrobiți definitiv de Alexie I Comnenul în bătălia de la Levounion (1091), în alianță cu cumanii. O altă lovitură decisivă a venit sub Ioan II Comnenul (1122). Spre deosebire de alte popoare nomade care s-au asimilat sau și-au format state stabile, pecenegii nu au reușit să-și consolideze o structură politică durabilă și au fost absorbiți de cumani și alte neamuri.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Cruciada a IV-a (1204) — urmări și formațiuni statale bizantine",
            children: [
              {
                type: "paragraph",
                text: "Cruciada IV (1202–1204), predicată cu scopul eliberării Ierusalimului, a fost deviată spre Constantinopol sub influența venețiană (dogele Enrico Dandolo) și a pretendentului bizantin Alexios IV Angelos. La 13 aprilie 1204, cruciații au cucerit și jefuit Constantinopolul — cel mai mare dezastru din istoria Bizanțului.",
              },
              {
                type: "key-idea",
                text: "Imperiul Latin de Răsărit (1204–1261): înființat de cruciați la Constantinopol, condus de Baldouin de Flandra ca prim împărat. A controlat Tracia, o parte din Grecia și câteva insule. Stat fragil, dependent militar și comercial de Veneția.",
              },
              {
                type: "key-idea",
                text: "1. Imperiul de la Niceea (1204–1261) — Lascarizii: Teodor I Laskaris a organizat rezistența în nord-vestul Anatoliei. A revendicat succesiunea legitimă a Imperiului Bizantin, cu propriul patriarh și curte imperială. Sub Ioan III Vatatzes și Teodor II Laskaris a recucerit treptat teritorii europene. Generalul Alexios Stratigopulos a recucerit Constantinopolul în iulie 1261.",
              },
              {
                type: "key-idea",
                text: "2. Imperiul de Trapezunt (1204–1461) — Marii Comneni: fondat de Alexios I și David Comneni pe coasta Mării Negre. A supraviețuit chiar mai mult decât Bizanțul propriu-zis, până în 1461, când a căzut sub otomani.",
              },
              {
                type: "key-idea",
                text: "3. Despotatul Epirului (1205–1479) — Anghelii: fondat de Mihail I Angelos în nord-vestul Greciei și Albania. A revendicat și el succesiunea imperială.",
              },
              {
                type: "observation",
                text: "Profesorul cere: doar formațiunile bizantine (Niceea, Trapezunt, Epir) și Imperiul Latin. Nu intra în detalii despre celelalte ducate latine (Principatul Achaeei, Ducatul Atenei etc.).",
              },
            ],
          },
          {
            type: "exam-questions",
            questions: [
              "Care au fost factorii care au dus la alianta lui Alexie I Comnenul cu venețienii și ce a însemnat venirea acestora la Constantinopol?",
              "Cum a evoluat alianta bizanț-veneția pe parcursul ei și care au fost consecințele pe termen lung?",
              "De ce nu au rezistat pecenegii în istorie? Cum îi vedea Constantin Porfirogenetul?",
              "Prezentați Cruciada IV și formațiunile statale bizantine create după 1204.",
              "Care a fost traseul Imperiului de la Niceea până la restaurarea din 1261?",
            ],
          },
        ],
      },

      // ── CURS IV ─────────────────────────────────────────────────────────────
      {
        type: "chapter",
        title: "Curs IV — Paleologii (1261–1453)",
        children: [
          {
            type: "subchapter",
            title: "Restaurarea Imperiului Bizantin — când, cum, în ce condiții, de către cine (1261)",
            children: [
              {
                type: "key-idea",
                text: "Când: iulie 1261. Cum: generalul Alexios Stratigopulos, conducând un corp expediționiar mic (câteva sute de soldați), a descoperit că Constantinopolul era practic neapărat — garnizoana latină plecase cu flota venețiană într-o expediție în Marea Neagră. A intrat noaptea prin porțile Blachernelor deschise de localnici, surprinzând garnizoanele latine.",
              },
              {
                type: "key-idea",
                text: "Cine: Mihail VIII Paleologul (1259–1282), care devenise regent și apoi împărat la Niceea. A intrat triumfal în Constantinopol pe 15 august 1261 (de Adormirea Maicii Domnului), restaurând Imperiul Bizantin. A fondat Dinastia Paleologilor, ultima dinastie bizantină (1261–1453).",
              },
              {
                type: "key-idea",
                text: "Condiții: imperiul restaurat era umbra celui de dinainte de 1204 — sărăcit, teritorial redus, permanent amenințat de angevini, bulgari, sârbi și, ulterior, turci otomani. Mihail VIII a încercat o apropiere de Roma (Unirea de la Lyon, 1274) pentru a obține sprijin apusean, dar unirea a fost respinsă intern.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Isihasmul și disputa palamită — Ioan V și Ioan VI",
            children: [
              {
                type: "key-idea",
                text: "Isihasmul (gr. hesychia = liniște) este practica spirituală a rugăciunii inimii și contemplației, practicată de monahii athoniți. Constă în rugăciunea neîncetată ('Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-mă pe mine, păcătosul'), urmărind vederea luminii necreate.",
              },
              {
                type: "key-idea",
                text: "Sfântul Grigorie Palama (1296–1359), arhiepiscopul Tesalonicului, a elaborat distincția teologică fundamentală dintre esența lui Dumnezeu (incognoscibilă, transcendentă) și energiile lui Dumnezeu (necreate, accesibile omului prin har). Lumina văzută de apostoli la Schimbarea la Față (lumina taborică) este o energie necreată reală, nu simbolică.",
              },
              {
                type: "key-idea",
                text: "Disputele cu Varlaam din Calabria (1337–1341): Varlaam, monah grec format în Occident, a atacat practica isihastă ca superstiție și a susținut că energiile divine sunt create. Palama i-a răspuns cu Triadele în apărarea sfinților isihaști. S-au ținut mai multe sinoade la Constantinopol (1341, 1347, 1351).",
              },
              {
                type: "key-idea",
                text: "Ioan VI Cantacuzino (1347–1354): a sprijinit activ isihasmul și pe Sf. Grigorie Palama. Sinodul din 1351, sub patronajul său, a proclamat doctrina palamită ca dogmă oficială a Bisericii Ortodoxe. A abdicat (1354) și s-a călugărit sub numele Ioasaf.",
              },
              {
                type: "key-idea",
                text: "Ioan V Paleologul (1341–1391, cu întreruperi): împăratul legitim, rival al lui Ioan VI Cantacuzino. Perioada lor a fost marcată de un război civil devastator (1341–1347) în care isihasmul a devenit și o miză politică. Ioan V s-a convertit la catolicism (1369) în speranța obținerii de ajutor apusean împotriva turcilor — gest fără efect practic.",
              },
              {
                type: "observation",
                text: "Profesorul cere: fără Sinodul de la Ferrara-Florența (1439).",
              },
            ],
          },
          {
            type: "exam-questions",
            questions: [
              "Când, cum și în ce condiții a fost restaurat Imperiul Bizantin în 1261 și de către cine?",
              "Ce este isihasmul și care sunt elementele centrale ale doctrinei palamite (distincția esență-energii)?",
              "Care a fost rolul lui Ioan VI Cantacuzino în proclamarea isihasmului ca dogmă oficială?",
              "Care a fost poziția lui Ioan V Paleologul față de disputele religioase și politice ale epocii?",
            ],
          },
        ],
      },

      // ── CURS V ──────────────────────────────────────────────────────────────
      {
        type: "chapter",
        title: "Curs V — Căderea Constantinopolului (1453)",
        children: [
          {
            type: "subchapter",
            title: "Cei 4 cronicari",
            children: [
              {
                type: "key-idea",
                text: "Textele celor 4 cronicari se citesc cu 'mintea de student': Georgios Sphrantzes (secretarul personal al lui Constantin XI, cel mai apropiat martor), Doukas (perspectivă mai favorabilă otomanilor), Laonikos Chalkokondyles (perspectivă grecă largă, influențată de Tucidide) și Kritobulos din Imbros (favorabil lui Mehmed II, scrie în stil tucididean).",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Asediul și căderea Constantinopolului (29 mai 1453)",
            children: [
              {
                type: "key-idea",
                text: "Sultanul Mehmed al II-lea (1451–1481) a asediat Constantinopolul cu o armată de 80.000–100.000 de oameni față de apărătorii creștini (circa 7.000, inclusiv genovezi sub comanda lui Giovanni Giustiniani). A utilizat artilerie grea de ultimă generație, inclusiv tunurile uriașe turnate de inginerul maghiar Urban, care au spart zidurile teodosiene.",
              },
              {
                type: "key-idea",
                text: "Inovație tactică: Mehmed a transportat pe uscat, peste dealurile Galatei, 70 de corăbii direct în Cornul de Aur (noaptea de 21–22 aprilie 1453), ocolind lanțul care bloca intrarea. Astfel a deschis un al doilea front naval, paralizând apărarea.",
              },
              {
                type: "key-idea",
                text: "Căderea, 29 mai 1453: asaltul decisiv a început în zorii zilei. Giustiniani a fost rănit și s-a retras, creând panică în rândul apărătorilor. Ienicerii au pătruns prin breșele zidurilor și prin Kerkoporta (o poartă mică uitată deschisă). Constantin al XI-lea Dragas Paleologul a murit eroic în luptă, în ziduri — trupul nu a mai fost identificat.",
              },
              {
                type: "key-idea",
                text: "Mehmed II a intrat victorios în oraș, s-a dus direct la Sfânta Sofia și a transformat-o în moschee. A primit titlul de 'Kayser-i Rum' (Cezar al Romei/romanilor), prezentându-se ca succesorul împăraților bizantini.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Tabloul cu familia imperială — Constantin nu apare",
            children: [
              {
                type: "key-idea",
                text: "Tabloul de la începutul prezentării (ppt) înfățișează familia imperială a ultimilor Paleologi: apar Ioan VIII Paleologul, Toma Paleologul și Dimitrie Paleologul (frații lui Constantin XI). Constantin al XI-lea NU apare în tablou — tabloul prezintă o reuniune a fraților în altă calitate sau a fost realizat înainte ca Constantin să devină împărat.",
              },
              {
                type: "key-idea",
                text: "Destinul fraților: Toma Paleologul a guvernat Despotatul Moreei (Pelopones), a fugit în Italia după căderea Moreei (1460) și a adus la Roma Capul Sfântului Apostol Andrei. Fiica sa Sofia Paleologina s-a căsătorit cu Ivan al III-lea al Rusiei (1472), ducând moștenirea imperială spre Moscova ('a treia Romă'). Dimitrie Paleologul a rămas sub protecție otomană, trăind la curtea sultanului.",
              },
            ],
          },
          {
            type: "exam-questions",
            questions: [
              "Cine sunt cei 4 cronicari ai căderii Constantinopolului și care este perspectiva fiecăruia?",
              "Descrieți asediul și căderea Constantinopolului în 1453: forțe, tactici, evenimentele decisive.",
              "Cum a murit Constantin al XI-lea și de ce nu apare în tabloul cu familia imperială?",
              "Care a fost destinul fraților lui Constantin XI (Toma și Dimitrie) după căderea Bizanțului?",
            ],
          },
        ],
      },

      // ── CURS VI ─────────────────────────────────────────────────────────────
      {
        type: "chapter",
        title: "Curs VI — Moștenirea Bizanțului",
        children: [
          {
            type: "subchapter",
            title: "Indictionul și cronografia (cultură generală, fără Olimpiade)",
            children: [
              {
                type: "key-idea",
                text: "Indictionul: ciclu de 15 ani, utilizat inițial de romani ca perioadă de recalculare a impozitelor (din sec. IV). Bizanțul l-a preluat și l-a folosit în datarea documentelor oficiale și liturgice. A rămas în uz în documentele Bisericii Ortodoxe și în cancelariile Țărilor Române până în epoca modernă. Indictionul 1 corespunde anului 312 d.Hr.",
              },
              {
                type: "key-idea",
                text: "Cronografia: disciplina care studiază sistemele de calcul al timpului. Bizanțul a folosit 'Era de la Crearea Lumii' (Annus Mundi), socotind că lumea a fost creată cu 5508 ani î.Hr. față de nașterea lui Hristos. Documentele bizantine datau astfel: de ex. Anul 6500 de la Facerea Lumii = circa 992 d.Hr.",
              },
              {
                type: "observation",
                text: "Profesorul cere cronografia ca 'informație de cultură generală'. Indictionul este subliniat specific. FĂRĂ Olimpiade.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Moștenirea liturgică, artistică și culturală",
            children: [
              {
                type: "key-idea",
                text: "Moștenirea liturgică: ritul bizantin stă la baza practicii liturgice a tuturor Bisericilor Ortodoxe. Muzica psaltică, imnografia (Sf. Roman Melodul, Sf. Ioan Damaschinul, Sf. Cosma de Maiuma, Sfânta Kasia) sunt moșteniri directe ale Bizanțului.",
              },
              {
                type: "key-idea",
                text: "Moștenirea artistică: iconografia ortodoxă, mozaicurile, arhitectura cu cupolă (tipul Sf. Sofia), miniatura manuscriselor — toate se transmit prin Bizanț în cultura ortodoxă universală. 'Bizanț după Bizanț' (expresia istoricului Nicolae Iorga): Țările Române, Serbia, Bulgaria și Rusia au continuat tradițiile bizantine după 1453.",
              },
              {
                type: "key-idea",
                text: "Moștenirea culturală: conservarea literaturii antice grecești în scriptoriile bizantine — fără Bizanț, mult din filosofia și literatura greacă veche ar fi dispărut. Enciclopedismul lui Constantin Porfirogenetul a salvat surse istorice esențiale.",
              },
            ],
          },
          {
            type: "subchapter",
            title: "Organizarea Bisericii ca moștenire a Bizanțului",
            children: [
              {
                type: "key-idea",
                text: "Patriarhia Ecumenică a continuat să funcționeze la Constantinopol (Fanar) și după 1453, sub suzeranitate otomană. Primul patriarh după cădere a fost Ghenadie Scholarios (Gheorghe Kurtesis), ales chiar de Mehmed II, care a garantat autonomia religioasă a creștinilor (milletul ortodox/rum millet).",
              },
              {
                type: "key-idea",
                text: "Sistemul pentarhiei (cele 5 Patriarhii istorice: Roma, Constantinopol, Alexandria, Antiohia, Ierusalim) și ordinea onorabilă (taxis) au rămas cadrul organizatoric al Ortodoxiei. Modelul sinodalității bizantine stă la baza autoguvernării Bisericilor Ortodoxe autocefale.",
              },
              {
                type: "key-idea",
                text: "Influența în Țările Române și Rusia: mitropolia Ungrovlahiei (1359) și a Moldovei (1401) au urmat tipicul și canoanele bizantine. Moscova s-a proclamat 'A treia Romă' — continuatoarea misiunii imperiale și ecleziastice a Bizanțului, mai ales după căsătoria lui Ivan III cu Sofia Paleologina (1472).",
              },
            ],
          },
          {
            type: "exam-questions",
            questions: [
              "Ce este Indictionul și cum era utilizat în Bizanț și în Țările Române?",
              "Ce înseamnă sintagma 'Bizanț după Bizanț' și cum se manifestă moștenirea culturală bizantină?",
              "Cine a fost Ghenadie Scholarios și în ce condiții a continuat Patriarhia Ecumenică după 1453?",
              "Cum a influențat modelul organizatoric bizantin structura Bisericilor Ortodoxe?",
            ],
          },
        ],
      },
    ],
    rezumat: bizantRezumat,
    test: bizantTest,
    materieComplet: bizantMaterieComplet,
  },
  {
    slug: "didactica-specializarii",
    discipline: "Didactica specializării",
    profesor: "Lect. dr. Bolocan Carmen Maria",
    data: "04.06.2026",
    interval: "09:00–12:00",
    sala: "S1",
    examStart: { date: "2026-06-04", time: "09:00", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Fundamente ale didacticii religiei",
        children: [
          {
            type: "key-idea",
            text: "Didactica este știința predării-învățării, aplicată la specificul disciplinei teologice.",
          },
          {
            type: "definition",
            term: "Competență didactică",
            text: "Ansamblul cunoștințelor, abilităților și atitudinilor necesare unui cadru didactic pentru a realiza un act educativ eficient.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Metode și mijloace de predare în ora de religie",
        children: [
          {
            type: "key-idea",
            text: "Metodele active (conversația euristică, descoperirea, jocul didactic) stimulează implicarea elevilor.",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Care sunt principiile didacticii aplicate la ora de religie?",
          "Descrieți proiectul didactic al unei lecții de religie.",
          "Cum se evaluează competențele la disciplina religie?",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar.",
      },
    ],
  },
  {
    slug: "aghiografie",
    discipline: "Aghiografie",
    profesor: "Lect. dr. Dinu Adrian Lucian",
    data: "05.06.2026",
    interval: "18:00–20:00",
    sala: "S2",
    examStart: { date: "2026-06-05", time: "18:00", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Introducere în aghiografie",
        children: [
          {
            type: "definition",
            term: "Aghiografie",
            text: "Disciplina teologică care studiază viețile sfinților, actele martirice și cultul sfinților în Biserică.",
          },
          {
            type: "key-idea",
            text: "Sfântul este modelul desăvârșirii creștine, omul transfigurat de harul divin.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Categorii de sfinți",
        children: [
          {
            type: "key-idea",
            text: "Martiri, mărturisitori, apostoli, ierahi, cuvioși, mucenici — fiecare categorie reflectă un mod specific de sfințenie.",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Ce este aghiografia și care este obiectul ei de studiu?",
          "Enumerați principalele categorii de sfinți din calendarul ortodox.",
          "Care este importanța cultului sfinților în viața Bisericii?",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar.",
      },
    ],
  },
  {
    slug: "elemente-de-exegeza-biblica",
    discipline: "Elemente de exegeză biblică",
    profesor: "Conf. dr. Hârlăoanu Paul-Cezar",
    data: "08.06.2026",
    interval: "10:00–12:00",
    sala: "Iustin Moisescu",
    examStart: { date: "2026-06-08", time: "10:00", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Principii de hermeneutică biblică",
        children: [
          {
            type: "definition",
            term: "Exegeză",
            text: "Interpretarea riguroasă a textelor biblice prin metode filologice, istorice și teologice.",
          },
          {
            type: "key-idea",
            text: "Sensul literal și sensul spiritual al Scripturii se completează reciproc în tradiția patristică.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Metode exegetice",
        children: [
          {
            type: "key-idea",
            text: "Metoda istorico-critică, analiza literară și lectura patristică sunt instrumentele principale ale exegezei.",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Care sunt principalele metode de exegeză biblică?",
          "Explicați relația dintre sensul literal și sensul spiritual al Scripturii.",
          "Cum interpretează Sfinții Părinți un text biblic?",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar.",
      },
    ],
  },
  {
    slug: "studiul-vechiului-testament",
    discipline: "Studiul Vechiului Testament",
    profesor: "Conf. dr. Vatamanu Cătălin",
    data: "10.06.2026",
    interval: "13:00–15:00",
    sala: "Iustin Moisescu",
    examStart: { date: "2026-06-10", time: "13:00", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Introducere în Vechiul Testament",
        children: [
          {
            type: "definition",
            term: "Canon",
            text: "Lista cărților recunoscute de Biserică ca inspirate și normative pentru credință și viață.",
          },
          {
            type: "key-idea",
            text: "Vechiul Testament cuprinde 39 de cărți protocanonice și 14 deuterocanonice, conform tradiției ortodoxe.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Teologia Vechiului Testament",
        children: [
          {
            type: "key-idea",
            text: "Revelația progresivă a lui Dumnezeu în Vechiul Testament atinge împlinirea în Iisus Hristos.",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Prezentați canonul Vechiului Testament în tradiția ortodoxă.",
          "Care sunt temele teologice centrale ale Pentateuhului?",
          "Cum este prezentată mesia în cărțile profetice?",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar.",
      },
    ],
  },
  {
    slug: "muzica-bisericeasca",
    discipline: "Muzică bisericească",
    profesor: "Asist. dr. Barnea Alexandrel",
    data: "11.06.2026",
    interval: "10:00–18:00",
    sala: "S1",
    examStart: { date: "2026-06-11", time: "10:00", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Istoria muzicii bisericești ortodoxe",
        children: [
          {
            type: "key-idea",
            text: "Muzica bizantină este moștenirea directă a cântării bisericești din primele secole creștine.",
          },
          {
            type: "definition",
            term: "Octoih",
            text: "Carte de cult care cuprinde cântările celor opt glasuri, folosite alternativ pe parcursul anului liturgic.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Glasurile și semnele muzicii psaltice",
        children: [
          {
            type: "key-idea",
            text: "Sistemul celor opt glasuri (ehuri) structurează repertoriul muzical al Bisericii Ortodoxe.",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Descrieți principalele trăsături ale muzicii bizantine.",
          "Care este structura sistemului de opt glasuri?",
          "Prezentați cântările Liturghiei Sfântului Ioan Gură de Aur.",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar. Atenție: intervalul orar este 10:00–18:00.",
      },
    ],
  },
  {
    slug: "istoria-bisericii-ortodoxe-romane",
    discipline: "Istoria Bisericii Ortodoxe Române",
    profesor: "Prof. dr. Vicovan Ion",
    data: "15 și 16.06.2026",
    interval: "08:30–20:00",
    sala: "S2",
    examStart: { date: "2026-06-15", time: "08:30", timezone: "Europe/Bucharest" },
    isVP: false,
    rezumat: iborRezumat,
    materieComplet: iborMaterieComplet,
    test: iborTest,
    materie: [
      {
        type: "observation",
        text: "Examenul se desfășoară pe 15 și 16.06.2026, 08:30–20:00. Materia completă este disponibilă în tab-urile de mai jos.",
      },
      {
        type: "chapter",
        title: "Ierarhii secolului XIX (1803–1885)",
        children: [
          { type: "key-idea", text: "Veniamin Costachi (1803–1842) — 'luminătorul Moldovei', fondator Seminar Socola (1803), traducător NT 1817." },
          { type: "key-idea", text: "Grigorie Dascălul (1823–1834) — ucenic Sf. Paisie, traducător Filocalie, canonizat de BOR." },
          { type: "key-idea", text: "Chesarie al Buzăului (1825–1846) — fondator școli de psaltichie și pictură, tipografie Buzău." },
          { type: "key-idea", text: "Sf. Calinic al Râmnicului (1850–1868) — monah la Cernica, canonizat 1955, tipografii liturgice." },
          { type: "key-idea", text: "Dionisie Romano al Buzăului (1859–1864) — fondator 'Vestitorul Bisericesc', primul ziar bisericesc românesc." },
          { type: "key-idea", text: "Andrei Șaguna (1864–1873) — restauratorul Mitropoliei Ardealului, Statut Organic 1868, 'Telegraful Român'." },
        ],
      },
      {
        type: "chapter",
        title: "Reforme și Autocefalie (1831–1885)",
        children: [
          { type: "key-idea", text: "Regulamentele Organice (1831/1832) — control statal asupra numirii clerului, tribunal civil, registre parohiale." },
          { type: "key-idea", text: "Cuza: secularizarea averilor mănăstirești (1863), Legea Sinodului Organic (1864), școli laice." },
          { type: "key-idea", text: "Autocefalia recunoscută 25 aprilie 1885 — Tomos semnat de Patriarhul Ioachim IV al Constantinopolului." },
          { type: "key-idea", text: "Melchisedec Ștefănescu (1879–1892) — manuale teologice, cronici istorice, membru Academia Română." },
          { type: "key-idea", text: "Iosif Naniescu (1875–1902) — Catedrala Mitropolitană Iași, cor mixt, revistă teologică." },
        ],
      },
      {
        type: "chapter",
        title: "Patriarhia Română (1918–2007)",
        children: [
          { type: "key-idea", text: "1918 — Marea Unire; Legea BOR 1925 unifică structurile; Concordat cu Vaticanul 1929." },
          { type: "key-idea", text: "Miron Cristea (1925–1939) — primul Patriarh al României, regent, prim-ministru, născut în Toplița." },
          { type: "key-idea", text: "Nicodim Munteanu (1939–1948) — traducătorul Bibliei 1944, studii la Kiev." },
          { type: "key-idea", text: "Irineu Mihalcescu (1939–1947) — 540+ lucrări publicate, Teologia dogmatică și simbolică." },
          { type: "key-idea", text: "Nicolae Bălan (1920–1955) — restaurator Sâmbăta de Sus, apărător BOR în Senat contra Concordat." },
          { type: "key-idea", text: "Justinian Marina (1948–1977) — apostolat social, reintegrarea greco-catolicilor (1948), Statut 1948." },
          { type: "key-idea", text: "Justin Moisescu (1977–1986) — inițiator colecție PSB (Părinți și Scriitori Bisericești), doctorat Atena/Strasbourg." },
          { type: "key-idea", text: "Teoctist Arăpașu (1986–2007) — 57 de ani de episcopat, canonizarea sfinților 1992, vizita Ioan Paul II 1999." },
        ],
      },
    ],
  },
  {
    slug: "studiul-noului-testament",
    discipline: "Studiul Noului Testament",
    profesor: "Prof. dr. Melniciuc Puica Ilie",
    data: "17.06.2026",
    interval: "14:00–17:00",
    sala: "Iustin Moisescu",
    examStart: { date: "2026-06-17", time: "14:00", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Introducere în Noul Testament",
        children: [
          {
            type: "definition",
            term: "Evanghelie",
            text: '„Veste bună” — termenul desemnează atât mesajul mântuirii, cât și cele patru cărți canonice despre viața lui Iisus.',
          },
          {
            type: "key-idea",
            text: "Noul Testament cuprinde 27 de cărți: Evanghelii, Faptele Apostolilor, Epistole și Apocalipsa.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Teologia sinoptică",
        children: [
          {
            type: "key-idea",
            text: "Evangheliile după Matei, Marcu și Luca sunt numite sinoptice datorită perspectivei comune asupra vieții lui Hristos.",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Prezentați canonul Noului Testament.",
          "Care sunt particularitățile teologice ale Evangheliei după Ioan?",
          "Descrieți teologia paulină a mântuirii.",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar.",
      },
    ],
  },
  {
    slug: "istoria-bisericeasca-universala",
    discipline: "Istoria Bisericească Universală",
    profesor: "Lect. dr. Niță Danielescu Daniel",
    data: "19.06.2026",
    interval: "10:00–14:00",
    sala: "Iustin Moisescu",
    examStart: { date: "2026-06-19", time: "10:00", timezone: "Europe/Bucharest" },
    isVP: false,
    test: ibuTest,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Istoria Bisericii în primele trei secole",
        children: [
          {
            type: "key-idea",
            text: "Persecuțiile romane, martiriul și apologetica au definit identitatea Bisericii primare.",
          },
          {
            type: "definition",
            term: "Ecumenic",
            text: "Termen care desemnează un conciliu general al întregii Biserici, recunoscut ca normativ pentru credință.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Cele șapte Sinoade Ecumenice",
        children: [
          {
            type: "key-idea",
            text: "Cele șapte Sinoade Ecumenice (325–787) au definit dogmele fundamentale ale credinței creștine.",
          },
          {
            type: "quote",
            text: '„Credința dreaptă nu se inventează, ci se transmite."',
            source: "Principiu patristic",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Prezentați cauzele și consecințele Schismei din 1054.",
          "Care au fost principalele decizii ale Sinodului I Ecumenic de la Niceea?",
          "Descrieți expansiunea creștinismului în primele secole.",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar.",
      },
    ],
  },
  // Discipline VP
  {
    slug: "limba-latina",
    discipline: "Limba latină",
    profesor: "Lect. dr. Târnăuceanu Dorina Claudia",
    data: "—",
    interval: "—",
    sala: "—",
    examStart: null,
    isVP: true,
    materie: [
      {
        type: "chapter",
        title: "Gramatică latină — noțiuni esențiale",
        children: [
          {
            type: "key-idea",
            text: "Declinările substantivelor, conjugările verbale și sintaxa propoziției latine.",
          },
        ],
      },
      {
        type: "observation",
        text: "Disciplina este marcată ca verificare pe parcurs (VP). Adaugă materia conform indicațiilor cadrului didactic.",
      },
    ],
  },
  {
    slug: "practica-de-specialitate",
    discipline: "Practica de specialitate",
    profesor: "Conf. dr. Cojocaru Marcel",
    data: "—",
    interval: "—",
    sala: "—",
    examStart: null,
    isVP: true,
    materie: [
      {
        type: "observation",
        text: "Disciplina este marcată ca verificare pe parcurs (VP). Adaugă materia conform indicațiilor cadrului didactic.",
      },
    ],
  },
  {
    slug: "educatie-fizica",
    discipline: "Educație fizică",
    profesor: "Prep. dr. Tomozei Răzvan Andrei",
    data: "—",
    interval: "—",
    sala: "—",
    examStart: null,
    isVP: true,
    materie: [
      {
        type: "observation",
        text: "Disciplina este marcată ca verificare pe parcurs (VP). Adaugă materia conform indicațiilor cadrului didactic.",
      },
    ],
  },
  {
    slug: "ansamblu-coral-ii",
    discipline: "Ansamblu coral II",
    profesor: "Asist. dr. Năstasă Ionuț Gabriel",
    data: "—",
    interval: "—",
    sala: "—",
    examStart: null,
    isVP: true,
    materie: [
      {
        type: "observation",
        text: "Disciplina este marcată ca verificare pe parcurs (VP). Adaugă materia conform indicațiilor cadrului didactic.",
      },
    ],
  },
];

export const regularExams = exams.filter((e) => !e.isVP);
export const vpExams = exams.filter((e) => e.isVP);
