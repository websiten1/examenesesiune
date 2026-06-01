import type { ContentBlock } from "./exams";

export type RezumatBlock = {
  curs: string;
  puncte: string[];
};

export type TestQuestion = {
  intrebare: string;
  variante: string[];
  corect: number;
};

// ─── SOS REZUMAT ────────────────────────────────────────────────────────────
export const bizantRezumat: RezumatBlock[] = [
  {
    curs: "Curs I — Iconoclasmul & Dinastia Isauriană",
    puncte: [
      "Leon III (717–741): salvează Constantinopolul de arabi (718 — foc grecesc + iarna geroasă + Tervel bulgarul). Fondează dinastia isauriană.",
      "Ecloga (726): primul cod juridic în greacă al Imperiului. Morală creștină, mutilări corporale în loc de execuții, justiție gratuită.",
      "Iconoclasmul (726–843): 3 motive — teologic (frică de idolatrie + vulcanul din 726), politic (mănăstirile aveau prea mult), providențialist.",
      "Constantin V Copronimul: radicalizează → Sinodul de la Hieria (754), monahomahie (mănăstiri = cazărmi, călugări umiliți în hipodrom).",
      "Irina: convoacă Sinodul VII Ecumenic, Niceea (787) → icoanele revin. Ulterior îl orbește pe fiul ei și domni singură ca 'basileus'.",
      "843 — Triumful Ortodoxiei: Teodora + patriarh Metodie restaurează definitiv icoanele. Celebrat în prima Duminică din Postul Mare.",
      "Kasia: i-a dat-o de rușine lui Teofil la concursul de mirese ('tot prin femeie a venit și binele'). S-a retras la mănăstire, compune imnuri liturgice cântate și azi.",
      "Grapții (Teodor & Teofan): doi frați monahi cărora li s-au gravat pe față cu fierul înroșit versuri batjocoritoare iconoclaste.",
      "Ioan Gramaticul: erudit iconoclast, patriarh sub Teofil (837–843), depus la Triumful Ortodoxiei.",
      "Bardas: reorganizează Universitatea de la Magnaura sub Mihail III. Leon Matematicianul = director.",
      "Schisma Fotiană (858–867): Fotie ales patriarh vs. Ignatie → papa intervine → Fotie îl excomunică pe papă + condamnă Filioque (867).",
    ],
  },
  {
    curs: "Curs II — Perioada Macedoneană (867–1056)",
    puncte: [
      "Vasile I: Procheiron (879) + Epanagoga (886) — noi coduri de legi. Revine la dreptul iustinian.",
      "Leon VI 'Filosoful': educat enciclopedic de Fotie, n-a mers niciodată la război, Cartea Eparhului = breslele și corporațiile Cpolului.",
      "Roman Lecapenos: Igor atacă Constantinopolul (941) cu 1800 corăbii → foc grecesc + Ioan Curcuas → respingere. Tratat comercial (944).",
    ],
  },
  {
    curs: "Curs III — Dinastia Comnenilor & Cruciada IV",
    puncte: [
      "Inocențiu III proclamă Cruciada a IV-a (1198) — fără regi, doar cavaleri subordonați Vaticanului.",
      "Cruciada deviază spre Constantinopol (1204) — Balcanii și statele creștin-ortodoxe din Balcani sunt în plina schimbare politică.",
    ],
  },
  {
    curs: "Curs IV — Paleologii",
    puncte: [
      "Isihasmul: Grigorie Sinaitul + Grigorie Palamas — rugăciunea inimii, distincția energii–esență divină.",
      "Unirea de la Florența (1439): grecii cedează pe Filioque + primat papal → promisiuni de ajutor militar din Occident care nu au venit.",
    ],
  },
  {
    curs: "Curs VI — Moștenirea Bizanțului",
    puncte: [
      "La români: influență indirectă prin slavonă (sec. XIII–XV), directă prin greacă (sec. XVI–XVII — Cantacuzinii, patriarhia etc.).",
      "'Bizanț de după Bizanț' (Nicolae Iorga) = continuarea moștenirii bizantine la popoarele ortodoxe după căderea Cpolului (1453).",
    ],
  },
];

// ─── TEST ────────────────────────────────────────────────────────────────────
export const bizantTest: TestQuestion[] = [
  {
    intrebare: "În ce an a fost promulgată Ecloga și de cine?",
    variante: [
      "717, de Leon III singur",
      "726, de Leon III și Constantin V",
      "754, de Constantin V Copronimul",
      "787, de Împărăteasa Irina",
    ],
    corect: 1,
  },
  {
    intrebare: "Ce inovație principală a adus Ecloga față de dreptul roman clasic?",
    variante: [
      "A reintrodus pedeapsa cu moartea pentru toate infracțiunile",
      "A fost scrisă în latină și greacă în paralel",
      "A introdus pedepse corporale (mutilări) în locul multor execuții, influențată de morala creștină",
      "A abolit complet dreptul de proprietate privată",
    ],
    corect: 2,
  },
  {
    intrebare: "Care dintre următorii termeni îi desemnează pe apărătorii icoanelor?",
    variante: ["Iconoclaști", "Iconomahi", "Iconoduli", "Monotheliți"],
    corect: 2,
  },
  {
    intrebare:
      "Care a fost motivul politic principal al declanșării iconoclasmului de către Leon al III-lea?",
    variante: [
      "Dorința de unificare religioasă cu islamul",
      "Limitarea puterii economice și politice a mănăstirilor",
      "Influența directă a papei de la Roma",
      "Reformarea armatei stratiotice",
    ],
    corect: 1,
  },
  {
    intrebare:
      "Cum se numea faza iconoclasmului îndreptată specific împotriva monahilor sub Constantin V?",
    variante: ["Monofizitism", "Monahomahie", "Monoenergetism", "Montanism"],
    corect: 1,
  },
  {
    intrebare: "Sinodul de la Hieria (754), care a condamnat icoanele, a fost convocat de:",
    variante: [
      "Leon al III-lea Isaurianul",
      "Irina, ca regentă",
      "Constantin al V-lea Copronimul",
      "Patriarhul Tarasie",
    ],
    corect: 2,
  },
  {
    intrebare: "Cine a convocat Sinodul VII Ecumenic de la Niceea (787)?",
    variante: [
      "Mihail al III-lea",
      "Împărăteasa Irina, ca regentă",
      "Patriarhul Fotie",
      "Împăratul Teofil",
    ],
    corect: 1,
  },
  {
    intrebare:
      "Ce i-a răspuns Kasia împăratului Teofil când acesta a spus 'Prin femeie ne-a venit tot răul'?",
    variante: [
      "A tăcut și a acceptat",
      "Nu sunt demnă să fiu împărăteasă",
      "Dar tot prin femeie ne-a venit și tot binele (referire la Maica Domnului)",
      "Prefer viața de mănăstire",
    ],
    corect: 2,
  },
  {
    intrebare: "Cine sunt 'Grapții' și de ce poartă acest nume?",
    variante: [
      "Canonicii care au redactat canoanele Sinodului VII Ecumenic",
      "Doi frați monahi iconofili cărora li s-au gravat versuri insulte pe față cu fierul înroșit",
      "Secretarii patriarhului Fotie",
      "Generalii care au apărat Constantinopolul în 718",
    ],
    corect: 1,
  },
  {
    intrebare: "Cine a restaurat definitiv cultul icoanelor în 843 (Triumful Ortodoxiei)?",
    variante: ["Irina", "Kasia", "Teodora, văduva lui Teofil", "Zoe Porfirogeneta"],
    corect: 2,
  },
  {
    intrebare:
      "Cine a reorganizat Universitatea de la Magnaura sub domnia lui Mihail al III-lea?",
    variante: ["Fotie cel Mare", "Ioan Gramaticul", "Cezarul Bardas", "Leon Matematicianul"],
    corect: 2,
  },
  {
    intrebare: "De ce a izbucnit Schisma Fotiană?",
    variante: [
      "Fotie a refuzat să-l boteze pe hanul bulgar Boris",
      "Ignatie a abdicat, Fotie a fost ales patriarh și papa Nicolae I a refuzat să-l recunoască",
      "Irina a desemnat un patriarh fără acordul sinodului",
      "Fotie a introdus Filioque în Crez",
    ],
    corect: 1,
  },
  {
    intrebare:
      "Ce a condamnat Fotie la sinodul din 867 față de practica Bisericii Apusene?",
    variante: [
      "Celibatul episcopilor",
      "Adaosul Filioque în Crez și pretențiile de primat universal ale papei",
      "Folosirea limbii latine în liturghie",
      "Botezul prin stropire",
    ],
    corect: 1,
  },
  {
    intrebare: "Ce cod de legi a promulgat Vasile I Macedoneanul în 879?",
    variante: ["Ecloga", "Procheiron", "Basilicale", "Epanagoga"],
    corect: 1,
  },
  {
    intrebare: "De ce i s-a dat lui Leon al VI-lea titlul de 'Filosoful'?",
    variante: [
      "A studiat filosofia la Atena",
      "A câștigat bătălii strategice cu inteligență",
      "Cultura sa enciclopedică — titlul cel mai înalt acordat de Universitatea din Constantinopol",
      "A scris un tratat filosofic despre natura imperiului",
    ],
    corect: 2,
  },
  {
    intrebare:
      "Cum a fost respins atacul flotei rusești conduse de Igor asupra Constantinopolului în 941?",
    variante: [
      "Prin o alianță cu bulgarii",
      "Prin focul grecesc al flotei bizantine și trupele lui Ioan Curcuas pe uscat",
      "Printr-o furtună care a distrus flota rusă",
      "Prin plata unui tribut substanțial lui Igor",
    ],
    corect: 1,
  },
  {
    intrebare: "Cine a proclamat Cruciada a IV-a și în ce an?",
    variante: [
      "Papa Urban II, în 1095",
      "Papa Inocențiu III, în 1198",
      "Papa Grigorie IX, în 1202",
      "Împăratul Henric VI, în 1196",
    ],
    corect: 1,
  },
  {
    intrebare:
      "Ce este isihasmul în contextul spiritualității bizantine din sec. XIV?",
    variante: [
      "Un curent iconoclast târziu",
      "O practică de rugăciune contemplativă a inimii și o doctrină despre energiile divine, apărată de Grigorie Palamas",
      "Un curent juridic privind autonomia mănăstirilor",
      "O sectă dualistă condamnată la Sinodul de la Florența",
    ],
    corect: 1,
  },
  {
    intrebare: "Ce s-a decis la Conciliul de la Florența (1439) în privința disputelor teologice?",
    variante: [
      "Răsăritul a convins Apusul să renunțe la Filioque",
      "S-a dat câștig de cauză latinilor în chestiunile controversate (Filioque, primat papal etc.)",
      "S-a ajuns la un compromis egal între cele două tabere",
      "Conciliul s-a încheiat fără niciun acord",
    ],
    corect: 1,
  },
  {
    intrebare:
      "Prin ce formă a ajuns influența bizantină în spațiul românesc înainte de sec. XVI?",
    variante: [
      "Direct în greacă, prin Patriarhia de Constantinopol",
      "Prin traduceri în limba slavonă (medio-bulgară), care era limba oficială a statului și a Bisericii",
      "Prin colonii grecești stabilite pe teritoriul românesc",
      "Prin misionari trimiși direct de la Curtea Imperială",
    ],
    corect: 1,
  },
];

// ─── CURSUL COMPLET ──────────────────────────────────────────────────────────
export const bizantMaterieComplet: ContentBlock[] = [
  {
    type: "chapter",
    title: "Curs I — Iconoclasmul și Dinastia Isauriană (726–843)",
    children: [
      {
        type: "subchapter",
        title: "1. Haosul dinaintea dinastiei și urcarea lui Leon al III-lea (717)",
        children: [
          {
            type: "paragraph",
            text: "Înainte de anul 717, Bizanțul traversa o perioadă de profund haos și anarhie internă. Împărați efemeri se succedau prin revolte militare, în timp ce granițele erau atacate din toate părțile, în special de către arabi, care cucereau teritorii noi și amenințau supraviețuirea imperiului. Această perioadă de instabilitate a cuprins figuri precum Vardanes-Philippicus (711–713), care a luat poziții monofizite, a condamnat Sinodul VI Ecumenic și a pornit lupte împotriva icoanelor — ceea ce a nemulțumit profund populația, clerul din Constantinopol și Papa de la Roma. A urmat Anastasius II (713–715), care a recunoscut Sinodul VI Ecumenic, și Theodosie al III-lea, forțat să accepte coroana și depus la 25 martie 717 de Leon al III-lea.",
          },
          {
            type: "paragraph",
            text: "Leon al III-lea (717–741), originar cel mai probabil din Germanicea (Siria de Nord), deși numit adesea 'Isaurianul' în istoriografie, provenea dintr-o familie modestă transmutată în Thracia de Iustinian al II-lea. Datorită calităților sale militare excepționale, a avansat rapid: devine protospătar și, ulterior, strateg al themei Anatolicilor — una dintre cele mai mari și importante provincii militare ale imperiului. În alianță cu Artavasde, strategul Armeniacilor (și ginerele său), Leon profită de slăbiciunea lui Theodosie al III-lea. La 25 martie 717, el intră triumfător în Constantinopol și este încoronat la Sfânta Sofia, punând bazele unei noi dinastii solide, ce va dura până în 802.",
          },
          {
            type: "paragraph",
            text: "Imediat după urcarea pe tron, Leon s-a confruntat cu cel mai mare test al domniei sale: Marele Asediu Arab al Constantinopolului (717–718). Generalul arab Maslama a atacat capitala cu o flotă uriașă de 1.800 de corăbii și forțe terestre masive. Leon al III-lea a demonstrat o energie și o iscusință remarcabilă: a utilizat strategic focul grecesc pentru a nimici flota arabă, a beneficiat de o iarnă extrem de aspră și de o epidemie de ciumă care au decimat tabăra inamică, și a realizat o alianță cu hanul bulgar Tervel, ale cărui trupe au atacat spatele armatei arabe. În august 718, arabii au ridicat asediul, suferind o înfrângere catastrofală care a salvat nu doar Bizanțul, ci și întreaga Europă.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Activitatea legislativă: Ecloga (726)",
        children: [
          {
            type: "paragraph",
            text: "Leon al III-lea nu a fost doar un general capabil, ci și un reformator al structurilor interne. În anul 726, împreună cu fiul și asociatul său la tron, Constantin al V-lea, el promulgă un nou cod de legi numit Ecloga (Selecția). Ecloga reprezenta o revizuire și o adaptare a Dreptului Roman (în special a Codului lui Iustinian) la noile realități ale secolului al VIII-lea, fiind redactată direct în limba greacă — limba oficializată complet a imperiului.",
          },
          {
            type: "paragraph",
            text: "Caracteristicile principale ale Eclogăi: în primul rând, creștinarea dreptului privat — codul introduce principii morale creștine, protejând instituția căsătoriei, femeia și copiii. Se interzice concubinajul, se îngreunează divorțul și se oferă drepturi sporite văduvelor și copiilor orfani. În al doilea rând, reforma sistemului penal — pentru a înlocui pedeapsa cu moartea (aplicată des în dreptul roman pur), se introduce pe scară largă sistemul mutilărilor corporale (tăierea nasului, orbirea, tăierea limbii sau a mâinilor). Aceste pedepse, deși barbare pentru standardele moderne, aveau la origine influențe orientale și scopul de a oferi vinovatului timp pentru pocăință, eliminând parțial execuțiile. În al treilea rând, egalitatea în fața legii — codul stabilea că actul de justiție trebuie să fie gratuit și accesibil tuturor claselor sociale, judecătorii fiind plătiți din tezaurul public pentru a combate corupția. Ecloga a influențat legislația statelor slave și vechiul drept românesc.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Iconoclasmul: origini, motive și prima fază",
        children: [
          {
            type: "paragraph",
            text: "Măsura care a definit dinastia isauriană și a aruncat imperiul într-o lungă criză internă a fost Iconoclasmul — interzicerea și distrugerea sfintelor icoane. Conflictul a izbucnit oficial în jurul anului 726–730, când Leon al III-lea a emis primele decrete imperiale împotriva reprezentărilor sacre. Motivele erau multiple. Motivul religios-teologic: în secolele VI–VII, cinstirea icoanelor în rândul maselor populare atinsese forme extreme (răzuirea vopselei de pe icoane pentru a fi amestecată în potirul de împărtășanie). Leon și cercul său de episcopi anatolieni considerau că desele eșecuri militare și calamitățile naturale — precum violenta erupție vulcanică din insula Thera din 726 — erau semne ale mâniei lui Dumnezeu împotriva idolatriei creștinilor. Motivul extern: provenind din Siria de Nord, Leon era familiarizat cu iudaismul și islamul emergent, ambele religii aniconice. Motivul politic: mănăstirile bizantine deveniseră state în stat, cu proprietăți uriașe, scutite de taxe, exercitând o influență morală masivă. Sute de mii de tineri alegeau calea monahală în loc să servească în armată. Prin lovitura dată icoanelor, împăratul lovea direct în baza economică și spirituală a monahilor.",
          },
          {
            type: "paragraph",
            text: "Radicalizarea sub Constantin al V-lea Copronimul (741–775): dacă sub Leon al III-lea iconoclasmul a avut un caracter mai degrabă administrativ, fiul său, Constantin al V-lea, a transformat mișcarea într-o prigoană sângeroasă. El oferă o bază dogmatică iconoclasmului prin convocarea Sinodului de la Hiereia (754) — un sinod mincinos, fără participarea patriarhilor răsăriteni sau a papei — care condamnă icoanele ca 'idoli' și îi anatematizează pe marii teologi iconofili. A urmat o fază de monahomahie: mănăstirile au fost închise sau transformate în cazărmi și hanuri, moaștele au fost arse, călugării au fost umiliți public în hipodrom sau obligați să se căsătorească. Cel mai aprig persecutor s-a dovedit Mihail Lachanodrakon, strateg al themei Thracesienilor, care a vândut proprietățile mănăstirilor, a ars manuscrise și a atacat atât de aprig pe monahi încât aceștia nu mai îndrăzneau să poarte haina monahală. Persecuția s-a extins chiar asupra înalților demnitari imperiali — patriarhul Constantin, pe care însuși împăratul îl numise la sinodul din 754, a fost destituit, torturat și executat.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "4. Ruptura cu Roma. Papalitatea și Regatul Franc",
        children: [
          {
            type: "paragraph",
            text: "Criza iconoclastă a avut un impact geopolitic devastator, provocând ruptura legăturilor politice dintre Bizanț și Occident. Papii de la Roma (Grigorie al II-lea și Grigorie al III-lea) au respins vehement decretele iconoclaste. Ca represalii, Leon al III-lea a confiscat veniturile papalității din Sicilia și Calabria și a trecut Illyricumul (inclusiv Grecia și Balcanii) de sub jurisdicția Romei sub cea a Patriarhiei de Constantinopol. Rămasă fără protecția militară a basileului și amenințată de lombarzi, Papalitatea și-a căutat noi protectori politici.",
          },
          {
            type: "paragraph",
            text: "Papa Ștefan al II-lea (752–757) face pasul istoric și apelează la Pepin cel Scurt, regele francilor. În schimbul recunoașterii legitimității dinastiei carolingiene, Pepin îi înfrânge pe lombarzi și dăruiește Papei teritoriile din jurul Romei și Ravennei ('Donatio Pipini') — act ce pune bazele statului papal independent. Procesul culminează la 25 decembrie 800, când Papa Leon al III-lea îl încoronează pe Carol cel Mare ca Imperator Romanorum la Roma. Pentru Bizanț, acest act a fost privit ca o uzurpare intolerabilă a dreptului unic al împăratului de la Constantinopol de a purta titlul roman. Iconoclasmul isaurian a oferit astfel justificarea morală și politică pentru apariția unui nou Imperiu în Occident.",
          },
        ],
      },
      {
        type: "subchapter",
        title:
          "5. Restaurarea icoanelor (787). Împărăteasa Irina și Sinodul VII Ecumenic",
        children: [
          {
            type: "paragraph",
            text: "După moartea lui Leon al IV-lea (780), conducerea imperiului este preluată de văduva sa, Irina, ca regentă pentru fiul ei minor Constantin al VI-lea. Irina era iconofilă convinsă — se povestește că Leon al IV-lea descoperise icoane ascunse sub pernele ei. Cu tact politic și beneficiind de sprijinul noului patriarh Tarasie (un laic excepțional, fostul secretar al împărătesei), ea convoacă Sinodul al VII-lea Ecumenic de la Niceea (787). Prima tentativă, din 786, eșuase — soldații iconoclaști năvăliseră în Chiesa Sfântul Apostoli amenințând episcopii cu armele, iar Irina a scăpat cu greu. A doua oară, în 787, sinodul s-a ținut la Niceea în ordine. Sinodul aduce pacea dogmatică, restabilind cinstirea icoanelor și făcând distincția clară între adorare (latreia, cuvenită doar lui Dumnezeu) și cinstire/venerare relativă (proskynesis, adresată persoanei reprezentate pe icoană).",
          },
          {
            type: "paragraph",
            text: "Irina va deveni ulterior prima femeie din istoria Bizanțului care a domnit singură ca suveran autocrat, semnându-se 'basileus' (masculin), după ce l-a înlăturat și orbit pe propriul ei fiu Constantin al VI-lea în 797. Politica sa economică a fost demagogică: a redus taxele comerciale și a acordat imunități mănăstirilor — măsuri populare, dar care au dus la criza financiară a statului. A fost detronată în 802 printr-o lovitură de palat condusă de Nikephoros (ministrul de finanțe) și exilată în Lesbos, unde a murit în 803. Este cinstită ca sfântă de Biserica Ortodoxă.",
          },
        ],
      },
      {
        type: "subchapter",
        title:
          "6. Al doilea iconoclasm (813–843). Kasia, Grapții, Teodora și Triumful Ortodoxiei",
        children: [
          {
            type: "paragraph",
            text: "O a doua fază, mai palidă, a iconoclasmului s-a manifestat între 813 și 843, promovată de împărați militari (Leon al V-lea Armeanul, Mihail al II-lea, Teofil) care asociau succesele generalilor isauriani cu respingerea icoanelor. Ioan Gramaticul a oferit argumente logice împăratului Teofil. A ajuns patriarh al Constantinopolului (837–843) — era mentorul și unchiul spiritual al împăratului. Adversarii îl acuzau că practică magia și astrologia. A susținut activ persecuția iconofililor și a fost depus odată cu Triumful Ortodoxiei în 843.",
          },
          {
            type: "paragraph",
            text: "Kasia (Sfânta Casiana): poetă, imnografă și compozitoare byzantină de geniu. A participat la concursul de mirese al lui Teofil (aprox. 830). Teofil s-a oprit în fața ei și i-a spus: 'Prin femeie ne-a venit tot răul' — referire la Eva. Kasia i-a răspuns prompt: 'Dar tot prin femeie ne-a venit și tot binele' — referire la Întruparea lui Hristos din Fecioara Maria. Teofil, intimidat de răspunsul ei, a ales-o pe Teodora. Kasia s-a retras la mănăstire, scriind piese muzicale și imnuri teologice nemuritoare folosite și astăzi în cultul ortodox — cea mai cunoscută: stihira 'Doamne, femeia cea căzută în multe păcate' (Marți seara a Săptămânii Patimilor).",
          },
          {
            type: "paragraph",
            text: "Grapții (Teodor și Teofan, Sfântul Teofan al Niceei): doi frați monahi iconofili care au îndurat chinuri groaznice sub Teofil. Au refuzat să renunțe la cinstirea icoanelor și au fost biciuiți repetat, iar în cele din urmă li s-au gravat pe frunte cu fierul înroșit versuri iconoclaste batjocoritoare — de aceea sunt numiți 'Grapții' (gr. graphō = a scrie/a grava). Sf. Teofan al Niceii a murit în urma torturii (829), iar Sf. Teodor a supraviețuit și a trăit până după restaurarea Ortodoxiei.",
          },
          {
            type: "paragraph",
            text: "Triumful Ortodoxiei (843): după moartea lui Teofil, Sfânta Teodora (văduva sa), împreună cu patriarhul Metodie, proclamă Restaurarea Definitivă a Icoanelor în martie 843 — eveniment celebrat în Biserica Răsăriteană până astăzi sub numele de 'Triumful Ortodoxiei' (prima Duminică din Postul Mare, Duminica Ortodoxiei).",
          },
        ],
      },
      {
        type: "subchapter",
        title:
          "7. Mihail al III-lea, Bardas și renașterea culturală. Schisma Fotiană",
        children: [
          {
            type: "paragraph",
            text: "Sub domnia lui Mihail al III-lea (842–867), Bizanțul intră într-o epocă de veritabilă renaștere culturală și expansiune misionară. Mihail al III-lea era prea tânăr la urcarea pe tron, astfel că unchiul său, Cezarul Bardas — un om de stat excepțional — a condus efectiv imperiul. Bardas reorganizează Universitatea din Constantinopol de la Palatul Magnaura, punând accent pe disciplinele laice: filosofie, geometrie, astronomie, gramatică. Leon Matematicianul (sau Leon Filosoful, nu același cu Leon VI) a fost numit în fruntea institutului. Universitatea fusese în declin pronunțat în timpul disputelor iconoclaste — cronicile iconofile menționează chiar că Leon al III-lea ar fi ars o școală celebră cu tot cu profesori și cărți. Scopul reorganizării era formarea noilor cadre administrative și diplomatice ale imperiului. Tot în această perioadă, Sfinții Chiril și Metodie au primit misiunea de creștinare a slavilor din Moravia (863).",
          },
          {
            type: "paragraph",
            text: "Schisma Fotiană (858–867): Patriarhul Ignatie al Constantinopolului a refuzat comuniunea lui Bardas (pentru viață imorală) și a fost silit să abdice (858). În locul lui a fost ales Fotie, cel mai cultivat om al timpului — fostul șef al cancelariei imperiale — care a primit toate gradele hirotoniei în șase zile. Papa Nicolae I a refuzat să recunoască alegerea lui Fotie și l-a susținut pe Ignatie. Conflictul a escaladat și din cauza disputei privind jurisdicția asupra Bulgariei nou-creștinate (864). Fotie a convocat un sinod la Constantinopol (867) care l-a excomunicat pe Papa Nicolae I și a condamnat adaosul Filioque în Crez — prima condamnare explicită a acestei practici occidentale. Împăratul Mihail III a fost asasinat (867), Vasile I Macedoneanul a restaurat pe Ignatie. Sinodul de la Constantinopol (869–870) l-a condamnat pe Fotie. Dar Ignatie a murit (877) și Fotie a revenit ca patriarh (877–886). La moartea lui Vasile I, Leon VI l-a depus din nou pe Fotie (886). Miza teologică: adaosul Filioque (Duhul Sfânt purcede și de la Fiul) introdus în Apus, pe care Răsăritul îl considera erezie — această dispută va alimenta Marea Schismă de la 1054.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Curs II — Perioada Macedoneană (867–1056)",
    children: [
      {
        type: "subchapter",
        title: "Leon al VI-lea — formarea și activitatea sa",
        children: [
          {
            type: "paragraph",
            text: "Noul împărat Leon al VI-lea se deosebea de tatăl său (Vasile I) atât prin felul de a fi, cât și prin cultură. Cu o sănătate șubredă, era un om static, care se complăcea în viața de palat, în cercurile mondene de la curte, fără nicio înclinare spre viața de campanie. Tot timpul vieții nu a participat la niciun război, sarcina aceasta revenind generalilor săi — de aceea domnia lui este caracterizată prin mari insuccese în politica externă. Dacă în câmpul de luptă era absent, în cel al spiritului excelea: educat enciclopedic — mai cu seamă de Fotie — a primit cunoștințe de logică, morală, metafizică, teologie, drept, poetică și chiar de științe oculte și profeții.",
          },
          {
            type: "paragraph",
            text: "Contemporanii l-au numit 'foarte învățatul', iar cunoștințele sale universale au făcut să i se dea numele de 'Filosoful' — titlul cel mai înalt acordat de Universitatea din Constantinopol. Iubea oratoria, a compus și rostit multe discursuri și predici cu prilejul marilor sărbători religioase. Era foarte credincios și în timpul lui puteau fi văzuți la palatul imperial mulți monahi. Leon a beneficiat în activitatea sa de sprijinul unor colaboratori prețioși: Stelianos Zautzes (de origine armeană), care a sugerat realizarea operei juridice, a ocupat funcția de prim-ministru (magister officiorum) și a primit titlul de basileopator. Leon al VI-lea s-a lipsit însă de colaborarea patriarhului Fotie, pe care l-a scos din scaun chiar de la începutul domniei sale.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "Activitatea administrativă: Eparhul și breslele (Cartea Eparhului)",
        children: [
          {
            type: "paragraph",
            text: "Cartea Eparhului (To Eparchikon Biblion) — publicată probabil la începutul anului 912 — reprezintă un cod administrativ al capitalei, ce reflectă complexitatea economică a Constantinopolului. Eparhului îi erau subordonate numeroasele corporații (colegii și bresle): notari, negustori de metale și pietre prețioase, zarafi, negustori de haine de mătase, țesători, negustori de săpun, fabricanți de in, de alifii, de parfumuri și medicamente, producători de lumânări, lucrători în piele, măcelari, negustori de pește, brutari, constructori de case — și lista continuă.",
          },
          {
            type: "paragraph",
            text: "Eparhul controla întreaga viață economică a capitalei: fixarea cantităților și prețurilor pe piață, stimularea importurilor, limitarea strictă a exporturilor, numirea conducătorilor breslelor. Atribuțiile lui erau mult mai largi decât ale unui simplu controlor economic: ca judecător prezida consistorium principis în lipsa împăratului; ca șef al poliției asigura ordinea publică cu soldați de ordine și praefectus vigilum (inclusiv pompierii); ca primar se îngrijea de curățenia orașului. Cartea Eparhului rămâne un document de prim ordin pentru cunoașterea economiei și administrației urbane bizantine.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "Roman Lekapenos și raporturile cu rușii",
        children: [
          {
            type: "paragraph",
            text: "În iunie 941, când împăratul Roman Lecapenul se pregătea să profite de dezbinările din sânul Emiratelor Arabe trimițindu-și armata acolo, Constantinopolul a fost atacat pe neașteptate de o importantă flotă rusească condusă de Igor, cel mai tânăr fiu al lui Rurik și succesorul lui Oleg la conducerea cnezatului de Kiev. Expediția fusese pregătită în secret și a reușit să aducă pagube importante populației de pe ambele maluri ale Bosforului. Scopul ei era — se pare — să forțeze împăratul să acorde privilegii comerciale negustorilor ruși. Atacul ruşilor este atestat de numeroşi cronicari bizantini, de izvoare hagiografice şi de episcopul Liutprand de Cremona.",
          },
          {
            type: "paragraph",
            text: "Atacul a fost zdrobit de flota bizantină condusă de protovestiarul Teofane, care a utilizat focul grecesc, iar pe uscat de trupele lui Ioan Curcuas — acesta a trebuit să se întoarcă din Asia Mică special pentru aceasta. Igor nu a renunțat la planurile sale și în 944 organizează o nouă expediție, mai puternică, cu pecenego-bulgari înrolați. Avertizat de bulgari, Roman Lecapenul a trimis ambasadori și a oferit condiții de pace avantajoase. Astfel s-a încheiat un tratat comercial care reglementa relațiile bizantine cu Rusia Kieveană.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Curs III — Dinastia Comnenilor. Cruciada a IV-a",
    children: [
      {
        type: "subchapter",
        title: "Situarea Balcanilor și cauzele declanșării Cruciadei a IV-a",
        children: [
          {
            type: "paragraph",
            text: "La cumpăna secolelor XII–XIII, Imperiul Bizantin traversa una dintre cele mai critice perioade din istoria sa. Sub Alexios III Angelos, imperiul era subminat din interior de crize de succesiune, în timp ce în Balcani apăreau noi state independente: un stat vlaho-bulgar recunoscut în 1201, Serbia independentă sub Ștefan 'cel dintâi încoronat'. O primejdie serioasă venea și din partea Imperiului German — Henric VI, moștenitor al normanzilor, revendica teritorii bizantine din Peninsula Balcanică, silindu-l pe Alexios III să plătească un tribut de 1.500 de livre de aur pe an.",
          },
          {
            type: "paragraph",
            text: "Cruciada a IV-a a fost proclamată de Papa Inocențiu III în august 1198, la foarte puțin timp după instalarea sa. Intenția papei era ca, de data aceasta, conducătorii să nu mai fie suverani, ci cavaleri — feudali mari care puteau mai ușor sta în dependență de Vatican. În Franța, de unde s-au recrutat cei mai mulți viitori cruciați, expediția a fost predicată de cardinalul Pietro Capueno și de Foulques de Neuilly. Primele echipe s-au format în noiembrie 1198, în frunte cu Thibaud de Champagne și Lois de Blois. Cruciada, care pornise cu scopul eliberării Ierusalimului, a deturnat spre Constantinopol, cu consecințe devastatoare pentru lumea creștino-ortodoxă.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Curs IV — Paleologii. Isihasmul și Unirea de la Florența",
    children: [
      {
        type: "subchapter",
        title: "Isihasmul și disputa palamită",
        children: [
          {
            type: "paragraph",
            text: "Isihasmul a căpătat un nou avânt în a treia decadă a veacului al XIV-lea, datorită propovăduirii și scrierilor Sfântului Grigorie Sinaitul, care — după o ședere la Muntele Sinai și în Creta — a ajuns la Muntele Athos, răspândind învățătura sa despre rugăciunea inimii sau a numelui lui Hristos. Grigorie Sinaitul a murit în noiembrie 1346. Grigorie Palamas a reluat, sistematizându-le și îmbogățindu-le, învățăturile lui Grigorie Sinaitul, provocat de un conflict cu Varlaam din Seminara — un călugăr calabrez care critica practica isihastă. Disputa palamită — centrată pe distincția dintre esența divină (incognoscibilă) și energiile divine (prin care Dumnezeu se comunică lumii) — a dus la o serie de sinoade la Constantinopol, unde Palamas a ieșit victorios. Isihasmul a fost recunoscut ca doctrină ortodoxă.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "Unirea religioasă de la Florența (1439)",
        children: [
          {
            type: "paragraph",
            text: "Disperat de pericolul otoman iminent, împăratul Ioan al VIII-lea Paleologul a participat personal la Conciliul de la Ferrara-Florența (1438–1439), însoțit de patriarhul Iosif al II-lea și de o numeroasă delegație de teologi greci. Negocierile au durat luni întregi. S-a căutat acord asupra formulărilor prudente privind primatul papal — la 26 iunie s-a convenit o formulare — și la 6 iulie, în catedrala din Florența, decretul de unire s-a citit solemn în latină și greacă. Cu excepția primatului papal (pentru care susceptibilitățile grecești erau parțial menajate), în toate celelalte chestiuni controversate (Filioque, azima, Purgatoriu) s-a dat câștig de cauză latinilor. Papa a înălțat la rangul de cardinal pe Isidor al Kievului și pe Visarion al Niceii.",
          },
          {
            type: "paragraph",
            text: "La Constantinopol și în Imperiul de Răsărit, opoziția față de unire a fost puternică — mai ales în rândurile poporului, ale monahilor și ale clerului mărunt. Patriarhul Iosif I nu a acceptat Unirea și a trebuit să părăsească scaunul, în locul său fiind ridicat Ioan Bekkos. Mihail VIII a respectat făgăduințele de la Lyon (o unire anterioară) și a fost destul de aspru cu oponenții. Dar și de data aceasta, tranzacția nu a adus imperiului ajutorul militar așteptat din Occident — Constantinopolul a căzut sub otomani în mai 1453, la numai 14 ani de la semnarea unirii.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Curs VI — Moștenirea Bizanțului",
    children: [
      {
        type: "subchapter",
        title: "Impactul cultural: Bizanțul și popoarele creștin-ortodoxe",
        children: [
          {
            type: "paragraph",
            text: "Numeroase scrieri bizantine au intrat în literatura noastră veche, însă sub forma unor traduceri în limba slavă (medio-bulgară), care era la noi limba oficială a Statului și a Bisericii. Avem astfel opere istorice, juridice, de literatură populară, dar mai ales religioase bizantine, înveșmântate în haină slavonă. Influența bizantină directă — adică sub forma ei greacă — va pătrunde mai târziu, când se vor reactiva legăturile Patriarhiei din Constantinopol cu Biserica Română, în sec. XVI și XVII, și când numeroși greci (negustori, cărturari, călugări, ierarhi sau membri ai unor vechi familii bizantine cum este familia Cantacuzino) s-au stabilit sau au poposit vreme mai îndelungată pe meleagurile noastre.",
          },
          {
            type: "paragraph",
            text: "Înrâurirea acestui 'Bizanț de după Bizanț' — cum l-a numit Nicolae Iorga — asupra noastră a fost puternică și a imprimat pecetea asupra unei mari părți din vechea cultură românească. Această influență era și mai veche în Balcani. În ce privește Rusia pravoslavnică, acolo influența bizantină s-a continuat pe multe tărâmuri până în secolul al XIX-lea. Bizanțul a murit la 1453 ca stat, dar moștenirea sa — canonică, liturgică, artistică, juridică și spirituală — a continuat să trăiască în lumea ortodoxă.",
          },
        ],
      },
    ],
  },
];
