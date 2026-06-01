export type ExamStart = {
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
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
  data: string; // text afișat
  interval: string;
  sala: string;
  examStart: ExamStart | null; // null pentru VP
  isVP: boolean;
  materie: ContentBlock[];
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
      {
        type: "chapter",
        title: "Capitolul I — Introducere în civilizația bizantină",
        children: [
          {
            type: "key-idea",
            text: "Imperiul Bizantin reprezintă continuarea Imperiului Roman de Răsărit, cu centrul la Constantinopol (330–1453).",
          },
          {
            type: "definition",
            term: "Bizanț",
            text: "Termen folosit de istoricii moderni pentru Imperiul Roman de Răsărit, derivat din numele vechii colonii grecești Byzantion.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Spiritualitatea ortodoxă în Bizanț",
        children: [
          {
            type: "key-idea",
            text: "Teologia icoanei, controversele hristologice și monahismul athonit sunt pilonii spiritualității bizantine.",
          },
        ],
      },
      {
        type: "exam-questions",
        questions: [
          "Care sunt trăsăturile definitorii ale civilizației bizantine?",
          "Descrieți influența Bizanțului asupra Ortodoxiei românești.",
          "Explicați rolul iconografiei în spiritualitatea bizantină.",
        ],
      },
      {
        type: "observation",
        text: "Adaugă materia specifică predată la curs și seminar.",
      },
    ],
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
    // Countdown starts de la prima zi
    examStart: { date: "2026-06-15", time: "08:30", timezone: "Europe/Bucharest" },
    isVP: false,
    materie: [
      {
        type: "chapter",
        title: "Capitolul I — Începuturile creștinismului pe teritoriul României",
        children: [
          {
            type: "key-idea",
            text: "Creștinismul a pătruns în Dacia și Dobrogea în primele secole, prin misionari și prin comerț.",
          },
          {
            type: "definition",
            term: "Scythia Minor",
            text: "Provincie romană corespunzătoare actualei Dobroge, leagăn al creștinismului românesc.",
          },
        ],
      },
      {
        type: "chapter",
        title: "Capitolul II — Organizarea Bisericii Ortodoxe Române",
        children: [
          {
            type: "key-idea",
            text: "Mitropolia Ungrovlahiei (1359) și Mitropolia Moldovei (1401) reprezintă primele structuri bisericești oficiale.",
          },
        ],
      },
      {
        type: "observation",
        text: "Examenul se desfășoară pe parcursul a două zile (15 și 16.06.2026), 08:30–20:00. Countdown-ul numără până la prima zi.",
      },
      {
        type: "exam-questions",
        questions: [
          "Care sunt sursele istorice privind creștinarea românilor?",
          "Prezentați organizarea bisericească medievală a Țărilor Române.",
          "Care este rolul Bisericii Ortodoxe Române în istoria națională?",
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
