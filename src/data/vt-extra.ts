import type { ContentBlock } from "./exams";
import type { RezumatBlock, TestQuestion } from "./bizant-extra";

// ─── SOS REZUMAT ─────────────────────────────────────────────────────────────
export const vtRezumat: RezumatBlock[] = [
  {
    curs: "Profetul Agheu",
    puncte: [
      "Carte postexilică; numele din ebr. Haggai = 'sărbătorile mele'; activitate august–decembrie 520 î.Hr. (anul 2 al lui Darius I).",
      "Context: Decretul lui Cirus (539–537) → ~50.000 evrei repatriați sub Zorobabel și Iosua; samarinenii refuzați au blocat lucrările 17 ani.",
      "Secetă ca pedeapsă divină; Templul finalizat în 515 î.Hr., ziua a 3-a a lunii Adar, în al 6-lea an al lui Darius.",
      "4 cuvântări: (1) combate scuza 'n-a sosit vremea'; (2) noul templu va întrece în slavă pe cel al lui Solomon; (3) curăție rituală și morală; (4) Zorobabel = 'sluga Domnului', 'inel cu pecete'.",
      "Stilul: proză cu aramaisme; formula 'Așa zice Yahweh, Domnul oștirilor' repetată excesiv.",
      "Septuaginta îi atribuie Psalmii 145–148; Fericitul Ieronim: 'Agheu a învățat să se semene cu lacrimi ca să se poată culege cu bucurie'.",
    ],
  },
  {
    curs: "Profetul Amos",
    puncte: [
      "Numele = 'sarcină/greutate'; originar din Tecoa (Iuda), misiune în Regatul de Nord; cel mai vechi profet scriitor; pomenire 15 iunie.",
      "Activitate ~750 î.Hr., domnia lui Ieroboam II; 2 ani înainte de un cutremur major (posibil gr. 8); conflict cu preotul Amasia din Betel.",
      "Structura: Cap 1–6 (mustrări + formula 'pentru trei păcate... ba chiar pentru patru'); Cap 7–9 (5 viziuni); Epilog (restaurarea cortului lui David).",
      "5 viziuni: lăcustele, focul mistuitor (oprite prin rugăciune), îngerul cu plumbul de cumpănă, panerul cu fructe coapte, Dumnezeu pe altar.",
      "Teologie: alegerea lui Israel = responsabilitate; combate formalismul; 'Profetul dreptății sociale'.",
      "NT: Sf. Arhidiacon Ștefan și Sf. Ap. Iacob citează din Amos; 'voi ridica cortul cel căzut al lui David' = Învierea lui Hristos (Sf. Chiril Alex., Fer. Ieronim).",
    ],
  },
  {
    curs: "Profetul Avacum",
    puncte: [
      "Septuaginta: Abakoum; Vulgata: Habacum; etimologie: 'el a îmbrățișat'; Fer. Ieronim: 'luptă/luptător'; pomenire 2 decembrie.",
      "Datare: 609–605 î.Hr.; contemporan cu Ieremia; indiciu cronologic major: menționarea caldeilor (babilonienilor).",
      "Structura: Cap 1–2 (două dialoguri profet–Dumnezeu; 5 blesteme 'vai' împotriva babilonienilor); Cap 3 (teofanie grandioasă; credința = unica salvare).",
      "Mesajul central: 'dreptul din credință va fi viu' — de săpat pe table de piatră; Providența universală.",
      "NT: Sf. Ap. Pavel citează în Antiohia Pisidiei și în Galateni, Romani, Evrei — nucleul teologiei pauline.",
      "Mesianism: venirea din Teman/Paran = nașterea din Betleem; zdrobirea capului = Învierea lui Hristos; artă: Il Zuccone de Donatello.",
    ],
  },
  {
    curs: "Profetul Avdie",
    puncte: [
      "Cea mai scurtă carte din Vechiul Testament; Obadyah = 'servul/sluga lui Dumnezeu'; pomenire 19 noiembrie.",
      "Datare probabilă: sec. VI, contemporan cu Ieremia, catastrofa din 587 î.Hr.; Edom = descendenții lui Esau.",
      "Structura: (1) condamnarea mândriei Edomului (Petra = invulnerabilitate falsă); (2) păcatele specifice; (3) Ziua Domnului și restaurarea.",
      "Ura ancestrală Iacob-Esau; apogeul: participarea Edomului la jefuirea Ierusalimului din 587 î.Hr.",
      "Legea talionului: 'Cum ai făcut, așa ți se va face'; concluzia eshatologică: 'A Domnului va fi împărăția'.",
      "Stil: poezie ebraică clasică; afinități cu Ieremia și Ioel; mesianism: Sionul = prefigurare a Bisericii (Sf. Ioan Gură de Aur, Fer. Ieronim).",
    ],
  },
  {
    curs: "Profetul Ioel",
    puncte: [
      "Ioel = 'Yahweh este Dumnezeu'; fiul lui Petuel; se adresează exclusiv Ierusalimului și preoților; 'clasicul profeților scriitori'.",
      "Structura: Cap 1–2 (invazia lăcustelor în 4 termeni ebraici graduali + Ziua Domnului); Cap 3–4 (restaurarea + Judecata Universală).",
      "Tema centrală: revărsarea Duhului peste 'tot trupul' — fii, fiice, bătrâni, tineri; 'Sfâșiați inimile voastre, iar nu hainele voastre'.",
      "NT: Sf. Ap. Petru citează la Cincizecime; Sf. Ap. Pavel în Romani; imageria lui Ioel prezentă în Evanghelii și Apocalipsă.",
      "Mesianism: revărsarea Duhului = trecerea de la VT la NT; izvorul din Casa Domnului = harul Sfântului Duh.",
      "Artă: fresca lui Michelangelo pe plafonul Capelei Sixtine; pasajele despre post = pericope în Săptămâna Brânzei.",
    ],
  },
  {
    curs: "Profetul Iona",
    puncte: [
      "Iona = 'porumbel'; fiul lui Amitai; din Gat-Hefer (seminția lui Zabulon); activitate ~793–753 î.Hr.; pomenire 21 septembrie.",
      "Structura simetrică: Cap 1–2 (fuga, furtuna, peștele, rugăciunea-psalm); Cap 3–4 (a 2-a poruncă, pocăința Ninivei, lecția curcubetei).",
      "Ninive: capitala Imperiului Asirian, 3 zile de traversat, >120.000 oameni; regele se pocăiește în sac și cenușă; chiar animalele postesc.",
      "Teologie: universalitatea iubirii divine; Yahweh nu e zeu național; păgânii mai receptivi decât profetul.",
      "NT: Hristos validează istoricitatea; 'semnul profetului Iona'; bărbații din Ninive vor condamna generația lui Hristos.",
      "Mesianism: Iona 3 zile în pântecele peștelui = îngroparea și Învierea lui Hristos — cel mai clar tip mesianic din VT.",
    ],
  },
  {
    curs: "Profetul Maleahi",
    puncte: [
      "Malaki = 'trimisul Meu/îngerul Meu'; posibil pseudonim; ultima carte cronologic din VT; pomenire 3 ianuarie.",
      "Context postexilic, sec. V î.Hr., ~450–430; termenul 'peha' (guvernator persan); dezinteres după reformele lui Neemia.",
      "Structura: 6 dispute + epilog: iubirea divină, mustrarea preoților, infidelitate conjugală, Trimișii (Ioan Botezătorul + Mesia), zeciuielile, distincția drepți/răi.",
      "5 mesageri: profetul, adevărații preoți, Sf. Ioan Botezătorul, Mesia, Ilie; epilog: 'inima părinților către fii și a fiilor către părinți'.",
      "Stil: proză didactică postexilică; metoda disputei — 6 afirmații + 6 obiecții + răspuns.",
      "Mesianism: 'Îngerul Legământului' = Hristos; 'Soarele dreptății' = Hristos, Lumina lumii; Hristos confirmă că Ioan Botezătorul = Ilie.",
    ],
  },
  {
    curs: "Profetul Miheia",
    puncte: [
      "Miheia = 'Cine este ca Yahweh?'; din Moreșet-Gat; statut social modest; activitate 740–700 î.Hr.; pomenire 14 august.",
      "Contemporan cu Isaia; context: Imperiul Asirian, Războiul Siro-Efraimitic (734–732), căderea Samariei 722.",
      "Structura: Cap 1–2 (judecată, condamnă răpirea terenurilor); Cap 3–5 (mustrare căpetenii/preoți + epoca mesianică); Cap 6–7 (procesul lui Dumnezeu, doxologie).",
      "Profeția din Betleem Efrata (Cap 5): locul nașterii lui Mesia; 'obârșia Lui este din zilele veșniciei' = cele două firi ale lui Hristos.",
      "Teologie: solidaritate față de săraci; combate corupția liderilor; 'liturghie profetică' în Cap 7.",
      "NT: profeția Betleemului citată de arhierei la Irod (Matei); Hristos citează Miheia despre dezbinarea familiilor.",
    ],
  },
  {
    curs: "Profetul Naum",
    puncte: [
      "Naum = 'confort/cel care mângâie'; locul natal Elcoș (localizare disputată); datare: 663–612 î.Hr.; manuscrisul de la Qumran (4QpNah) confirmă autenticitatea.",
      "Context: coaliția mezi+babilonieni+sciți a distrus Ninive; râul Khosr a inundat zidurile; Ninive redescoperită abia în 1850.",
      "Comparație cu Iona: Iona (sec. VIII) = mila divină, pocăința ninivitenilor; Naum (sec. VII) = judecata definitivă, pocăința temporară.",
      "Structura: 3 capitole = 9 nuclee; Psalmul acrostih (cap 1–2:3) = fundament teologic; parodie dramatică a cântecelor funebre.",
      "Paralele cu Ieremia: jugul sfărâmat, dezgolirea poalelor veșmântului; expresii din Naum integrate de Ieremia.",
      "Mesianism: 'Bun este Domnul, loc de scăpare în zi de strâmtorare' (1:7) = Hristos ca unic loc de scăpare (Fer. Ieronim).",
    ],
  },
  {
    curs: "Profetul Osea",
    puncte: [
      "Osea = 'mântuire/El a mântuit'; fiul lui Beeri; misiune exclusiv în Regatul de Nord; activitate 750–730 î.Hr.; pomenire 17 octombrie.",
      "Structura: Cap 1–3 (drama familială: Gomer + 3 copii simbolici); Cap 4–13 (mustrări profetice); Cap 14 (epilog: pocăință).",
      "Cei 3 copii simbolici: Izreel ('Dumnezeu împrăștie'), Lo Ruhama ('Cea neiubită'), Lo Ami ('Nu este poporul Meu').",
      "Verbul șuv ('a se întoarce/pocăi') apare de 23 de ori; teologie: 'Milă voiesc, iar nu jertfă, și cunoașterea lui Dumnezeu mai mult decât arderile de tot'.",
      "NT: citat de 17 ori; Hristos citează 'Milă voiesc'; Mt: 'Din Egipt am chemat pe Fiul Meu'; Sf. Ap. Pavel: 'Unde este, moarte, biruința ta?'.",
      "Mesianism: teologia mirelui divin; Hristos ca Mire, Biserica ca Mireasă; universalitate mântuirii.",
    ],
  },
  {
    curs: "Profetul Sofonie",
    puncte: [
      "Tefania = 'Yahweh ocrotește'; genealogie la a 4-a generație: strănepotul regelui Iezechia; origine aristocratică/prințară.",
      "Activitate: 640–612 î.Hr. (zilele lui Iosia); contemporan cu Ieremia; înaintea reformei din 622; context: moștenire de la Manase.",
      "Structura: 3 capitole; tema 'Ziua lui Yahweh' (de 7 ori): judecată universală (cap 1), pocăință + oracole (cap 2), mustrare + restaurare (cap 3).",
      "Oracolele (cap 2): filistenii (apus), Moab+Amon (est), etiopienii (sud), asirienii+Ninive (nord).",
      "Concluzie: 'rămășița' purificată, popor smerit și sărac; Dumnezeu ca Împărat și Izbăvitor; 'Bucură-te, fiică a Sionului'.",
      "Mesianism: convertirea neamurilor; adorarea universală; deschide calea revelației lui Hristos despre închinarea în duh și în adevăr.",
    ],
  },
  {
    curs: "Profetul Zaharia",
    puncte: [
      "Zaharia = 'Dumnezeu Își amintește'; fiul lui Berechia, fiul lui Ido (familie preoțească); activitate 520 î.Hr.; contemporan cu Agheu.",
      "Structura: Cap 1–8 (8 viziuni nocturne + posturile transformate în sărbătoare); Cap 9–14 (oracole eshatologice hristocentriste).",
      "8 viziuni: călăreții, 4 coarne/fierari, tânărul cu funia, Iosua și Satan, sfeșnicul+măslinii, sulul zburător, femeia în baniță, 4 care.",
      "Oracole mesianice directe: intrarea pe mânz de asin (cap 9); cei 30 de arginți (cap 11); 'vor privi la Mine, pe Care L-au străpuns' (cap 12); 'Bate-voi păstorul' (cap 13).",
      "Cap 14: picioarele Domnului pe Muntele Măslinilor; ape vii = har universal; tot Ierusalimul = templu sfânt.",
      "Cartea lui Zaharia = una dintre cele mai citate în NT datorită caracterului hristocentric pronunțat.",
    ],
  },
];

// ─── MATERIE COMPLET ─────────────────────────────────────────────────────────
export const vtMaterieComplet: ContentBlock[] = [
  {
    type: "chapter",
    title: "Profetul Agheu — Cartea și mesajul său",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "key-idea",
            text: "Cartea profetului Agheu face parte din cărțile postexilice ale Vechiului Testament, alături de Zaharia și Maleahi.",
          },
          {
            type: "definition",
            term: "Profetul Agheu — Numele și personalitatea",
            text: "Numele Agheu provine din ebraicul Haggai, cu semnificația 'sărbătorile mele'. Exegetul L. Gauthier a avansat ipoteza că profetul s-ar fi născut într-o zi de sărbătoare. Forme asemănătoare se regăsesc în VT: Hagghi (fiul lui Gad) și Haghita (soția lui David).",
          },
          {
            type: "paragraph",
            text: "Septuaginta îi atribuie Psalmii 145–148, iar Vulgata Psalmii 111 și 145. Fericitul Ieronim a formulat o caracterizare memorabilă a activității sale: 'Agheu a învățat să se semene cu lacrimi ca să se poată culege cu bucurie'. Activitatea lui Agheu este consemnată direct și în cartea Ezdra.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Context istoric",
        children: [
          {
            type: "paragraph",
            text: "Decretul lui Cirus (539–537 î.Hr.) a permis întoarcerea a aproximativ 50.000 de evrei sub conducerea guvernatorului Zorobabel și a arhiereului Iosua. Samarinenii, care au cerut să participe la rezidirea Templului, au fost refuzați deoarece nu trecuseră prin suferința exilului. Drept răzbunare, au blocat lucrările prin intrigi la curtea persană, iar construcția a fost abandonată timp de 17 ani.",
          },
          {
            type: "observation",
            text: "O secetă severă a lovit țara ca pedeapsă divină pentru dezinteresul față de Casa Domnului. Agheu își concentrează activitatea profetică între august și decembrie 520 î.Hr. (anul 2 al lui Darius I). Templul a fost finalizat în cele din urmă în 515 î.Hr., în a treia zi a lunii Adar, în al șaselea an al lui Darius.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Cele 4 cuvântări",
        children: [
          {
            type: "paragraph",
            text: "Prima cuvântare este adresată lui Zorobabel și Iosua și combate scuza generală a poporului că 'n-a sosit vremea' de a zidi Casa Domnului. Efectul a fost imediat, dar entuziasmul a dispărut după 23 de zile.",
          },
          {
            type: "paragraph",
            text: "A doua cuvântare (ziua 21 a lunii a 7-a) răspunde descurajării bătrânilor care comparau noul templu cu cel al lui Solomon. Promisiunea divină: 'slava acestui loc mai de pe urmă va fi mai mare decât cea dintâi' — o deschidere clară spre epoca mesianică.",
          },
          {
            type: "paragraph",
            text: "A treia cuvântare (ziua 24 a lunii a 9-a) abordează tema curăției rituale și morale, pe baza Legii: nu este suficient să aduci daruri dacă viața nu este sfântă.",
          },
          {
            type: "key-idea",
            text: "A patra cuvântare îl numește pe Zorobabel 'sluga Domnului', descendent davidic și purtător al speranțelor mesianice, promițând că Dumnezeu îl va ține aproape 'ca un inel cu pecete'.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "4. Stil și teologie",
        children: [
          {
            type: "paragraph",
            text: "Stilul cărții este proză cu aramaisme. Formula autoritară 'Așa zice Yahweh, Domnul oștirilor' este repetată în mod excesiv. Teologia lui Agheu subliniază că refacerea Templului este o prioritate națională, că sfințenia vieții este scopul ultim, și că există o deschidere universală spre toate neamurile.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Amos — Profetul dreptății sociale",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Amos — Numele și originea",
            text: "Numele Amos înseamnă 'sarcină' sau 'greutate'. Profetul este originar din Tecoa, în Regatul de Sud (Iuda), la 10 km sud de Betleem, dar misiunea sa se desfășoară exclusiv în Regatul de Nord, la Samaria și Betel. Este considerat cel mai vechi profet scriitor. Pomenirea sa în calendarul ortodox este pe 15 iunie.",
          },
          {
            type: "paragraph",
            text: "Amos se autodefinește cu claritate: 'Eu nu sunt proroc și nici fecior de proroc, ci sunt păstor și adunător de sicomore'. Metafora care explică ascultarea față de porunca divină: 'Dacă leul mugește, cine nu se va înfricoșa? Și dacă Domnul grăiește, cine nu va profeți?'.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Context istoric",
        children: [
          {
            type: "paragraph",
            text: "Activitatea lui Amos se plasează în jurul anului 750 î.Hr., în domnia lui Ieroboam II — o epocă de expansiune politică dar de profundă degradare morală. Cronologia sa este ancorată de un cutremur major, posibil de gradul 8, care a afectat cetăți precum Gath, Hazor și Lachiș, menționat și de Zaharia și Josephus Flavius.",
          },
          {
            type: "observation",
            text: "Idolatria atinsese apogeul în patru centre: Dan, Betel, Ghilgal și Beerșeba. Israelul era cea mai populată țară din Levant (~350.000 de locuitori), prosperă din comerț cu ulei, vin și cai. Amos intră în conflict deschis cu preotul Amasia din Betel, care îl denunță regelui.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Structura cărții",
        children: [
          {
            type: "paragraph",
            text: "Cap 1–6 conțin mustrări adresate popoarelor vecine și lui Israel, cu formula fixă: 'Pentru trei păcate... ba chiar pentru patru'. Femeile bogate ale Israelului sunt numite 'juncane de Basan'. Avertismentul central: 'Pregătește-te, Israele, să te întâlnești cu Dumnezeul tău!'.",
          },
          {
            type: "key-idea",
            text: "Cap 7–9 conțin 5 viziuni: (1) Invazia lăcustelor (oprită prin rugăciune); (2) Focul mistuitor (oprit prin rugăciune); (3) Îngerul cu plumbul de cumpănă — judecata iminentă a dinastiei lui Ieroboam; (4) Panerul cu fructe coapte — foamete spirituală de cuvântul Domnului; (5) Dumnezeu stând pe altar — nimicirea definitivă.",
          },
          {
            type: "paragraph",
            text: "Epilogul promite restaurarea cortului lui David și întoarcerea din robie. Stilul este simplu, sobru, elegant, cu pasaje doxologice despre Orion și Pleiade.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "4. Teologie și mesianism",
        children: [
          {
            type: "paragraph",
            text: "Amos a primit supranumele de 'Profetul dreptății sociale': alegerea lui Israel înseamnă responsabilitate, nu privilegiu. Combate formalismul religios. Sf. Arhidiacon Ștefan și Sf. Apostol Iacob citează din cartea sa. Sintagma mesianică 'voi ridica iarăși cortul cel căzut al lui David' este interpretată de Sf. Chiril al Alexandriei și Fericitul Ieronim ca referire la Învierea lui Hristos.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Avacum — Dreptul din credință va fi viu",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Avacum — Numele și pomenirea",
            text: "Profetul apare ca Abakoum în Septuaginta și ca Habacum în Vulgata. Etimologia numelui: habac = 'el a îmbrățișat'; Fericitul Ieronim propune alternativ 'luptă' sau 'luptător'. Pomenirea: 2 decembrie.",
          },
          {
            type: "paragraph",
            text: "Unele scrieri rabinice îl identifică cu fiul Sunamitencei, înviat de Elisei; o legendă necanonică afirmă că un înger l-a purtat de părul capului la Daniel în groapa cu lei. Sf. Epifanie și Dorotei al Tyrului indică drept loc natal Bet Zoher (Simeon), la 16 km sud de Ierusalim.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Context și datare",
        children: [
          {
            type: "key-idea",
            text: "Indiciul cronologic major: menționarea caldeilor (babilonienilor) în text implică o scriere după moartea lui Iosia. Datare: 609–605 î.Hr. Avacum este contemporan cu Ieremia.",
          },
          {
            type: "paragraph",
            text: "Contextul: moartea lui Iosia la Meghido, faraonul Neco II, Nabucodonosor, bătălia de la Carchemiș și asediile succesive au marcat această perioadă de crize geopolitice.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Structura cărții",
        children: [
          {
            type: "paragraph",
            text: "Cap 1–2 cuprind două dialoguri: (1) profetul se tânguiește de violențele din Iuda, iar Dumnezeu anunță caldeii ca instrument al judecății; (2) profetul întreabă de ce permite Dumnezeu unui neam mai rău să pedepsească Israel; răspunsul divin culminează cu: 'dreptul din credință va fi viu' — de săpat pe table de piatră. Urmează 5 blesteme ('vai') împotriva babilonienilor.",
          },
          {
            type: "paragraph",
            text: "Cap 3 conține o teofanie grandioasă: Dumnezeu vine din Teman/Paran. Credința neclintită este proclamată ca unică salvare. Autenticitatea acestui capitol a fost disputată (termenul liturgic sela, menționarea dirijorului), dar argumentele conservatoare susțin unitatea cărții.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "4. Teologie și mesianism",
        children: [
          {
            type: "paragraph",
            text: "Stilul atinge nivelul literaturii clasice ebraice, similar lui Isaia sau Miheia; structura cap 3 este chiastică. Teologia: Providența universală; Iuda = 'cel drept' prin cunoașterea adevăratului Dumnezeu.",
          },
          {
            type: "key-idea",
            text: "NT: Sf. Ap. Pavel citează 'dreptul din credință va fi viu' în Antiohia Pisidiei și în epistolele către Galateni, Romani și Evrei — nucleul teologiei pauline. Mesianism: venirea din Teman/Paran = nașterea din Betleem; zdrobirea capului din casa celui rău = Învierea lui Hristos (Sf. Chiril al Alexandriei). Artă: sculptura Il Zuccone de Donatello (Museo dell'Opera del Duomo, Florența).",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Avdie — Judecata Edomului",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "key-idea",
            text: "Cartea lui Avdie este cea mai scurtă din întreg Vechiul Testament. Obadyah înseamnă 'servul/sluga lui Dumnezeu'. Pomenirea: 19 noiembrie.",
          },
          {
            type: "definition",
            term: "Edom — Identitate și etimologie",
            text: "Edom = descendenții lui Esau (Isav), locuitorii 'țării lui Seir'; edom = 'roșu', cu referire la lintea roșie pe care Esau a vândut-o în schimbul dreptului de întâi-născut.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Context și datare",
        children: [
          {
            type: "paragraph",
            text: "Talmud și Sinaxarul identifică profetul cu omonimul din Cartea a 3-a Regilor, salvatorul a 100 de profeți de furia Izabelei; exegeza modernă vede aceasta drept o coincidență de nume. Datarea probabilă: sec. VI î.Hr., contemporan cu Ieremia — catastrofa din 587 î.Hr. justifică mai bine conținutul decât ipoteza sec. IX.",
          },
          {
            type: "observation",
            text: "Ura ancestrală Iacob–Esau a atins apogeul prin participarea Edomului la jefuirea Ierusalimului în 587 î.Hr. și prin vânzarea refugiaților iudei.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Structura cărții",
        children: [
          {
            type: "paragraph",
            text: "Cartea are trei secțiuni: (1) Condamnarea mândriei Edomului — cetatea Petra era considerată inexpugnabilă; (2) Expunerea păcatelor concrete: violența, bucuria răutăcioasă față de suferința lui Iacob, vânzarea refugiaților; (3) Ziua Domnului și restaurarea — legea talionului: 'Cum ai făcut, așa ți se va face'; concluzia: 'A Domnului va fi împărăția'.",
          },
          {
            type: "key-idea",
            text: "Stilul: poezie ebraică clasică cu afinități față de Ieremia și Ioel. Mesianism: Sionul și Ierusalimul restaurat prefigurează Biserica (Sf. Ioan Gură de Aur, Fer. Ieronim). Artă: basoreliefuri în Catedrala din Amiens.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Ioel — Revărsarea Duhului",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Ioel — Numele și personalitatea",
            text: "Ioel înseamnă 'Yahweh este Dumnezeu' (Yahweh + El). Fiul lui Petuel. Fericitul Ieronim afirmă că s-a născut în Iuda, probabil Ierusalim. Profetul se adresează exclusiv Ierusalimului și preoților. Este considerat 'clasicul profeților scriitori'.",
          },
          {
            type: "paragraph",
            text: "Datarea este disputată: ipoteza preexilică (sec. VIII, domnia lui Ioas) și ipoteza postexilică (sec. V–IV). Fresca lui Michelangelo de pe plafonul Capelei Sixtine îl imortalizează.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Structura cărții",
        children: [
          {
            type: "paragraph",
            text: "Cap 1–2: invazia lăcustelor — descrisă prin 4 termeni ebraici graduali — devine imaginea Zilei Domnului ca întuneric și judecată. Apelul la pocăință: posturi naționale, 'Sfâșiați inimile voastre, iar nu hainele voastre'. Promisiunea restaurării materiale și spirituale.",
          },
          {
            type: "key-idea",
            text: "Cap 3–4: revărsarea Duhului peste 'tot trupul' — fii, fiice, bătrâni, tineri, robi și roabe; 'Oricine va chema numele Domnului se va mântui'. Judecata neamurilor în 'Valea lui Iosafat'. Izvorul dătător de viață din Casa Domnului.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Teologie și mesianism",
        children: [
          {
            type: "paragraph",
            text: "Stilul: clasic, pur, elegant; paralelism și ritm alert. NT: Sf. Ap. Petru citează la Cincizecime, Sf. Ap. Pavel în Romani; Hristos și Apocalipsa folosesc imageria lui Ioel. Mesianism: revărsarea Duhului = trecerea de la Vechiul la Noul Legământ; izvorul = harul Sfântului Duh. Pasajele despre post sunt pericope liturgice în Săptămâna Brânzei.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Iona — Semnul lui Iona",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Iona — Numele și originea",
            text: "Iona înseamnă 'porumbel'. Fiul lui Amitai, originar din Gat-Hefer (seminția lui Zabulon). A activat în Regatul de Nord sub Ieroboam II (~793–753 î.Hr.), prezicând restabilirea granițelor Israelului (4 Regi). Pomenirea: 21 septembrie.",
          },
          {
            type: "observation",
            text: "Ninive era capitala Imperiului Asirian: 3 zile de traversat, peste 120.000 de locuitori, renumită pentru cruzimea extremă a ostașilor ei.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Structura cărții",
        children: [
          {
            type: "paragraph",
            text: "Cap 1–2: Iona fuge la Tarsis (Spania); furtuna pe mare; profetul adormit în corabie; aruncarea în valuri; liniștea mării; păgânii aduc jertfe; peștele îl înghite (3 zile și 3 nopți). Rugăciunea-psalm din pântecele peștelui evocă Șeolul, apele și buruienile; peștele îl varsă neatins pe uscat.",
          },
          {
            type: "paragraph",
            text: "Cap 3–4: A doua poruncă divină; Iona predică: 'Încă 40 de zile și Ninive va fi răsturnată'; regele se pocăiește în sac și cenușă; chiar animalele postesc; Dumnezeu Se milostivește. Cap 4: amărăciunea lui Iona; lecția curcubetei și a viermișorului — Dumnezeu Se milostivește de 120.000 de oameni și de animale.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Teologie și mesianism",
        children: [
          {
            type: "key-idea",
            text: "Structura: simetrie perfectă; cicluri paralele (cap 1–2 și 3–4); ironie pedagogică. Teologie: universalitatea iubirii divine; Yahweh nu este un zeu național; păgânii sunt mai receptivi decât profetul.",
          },
          {
            type: "paragraph",
            text: "NT: Hristos validează istoricitatea cărții și formulează 'semnul profetului Iona'. Bărbații din Ninive vor condamna generația lui Hristos. Mesianism: Iona în pântecele peștelui 3 zile și 3 nopți = îngroparea și Învierea lui Hristos — cel mai clar tip mesianic din Vechiul Testament.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Maleahi — Ultima voce a Vechiului Testament",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Maleahi — Numele și statutul",
            text: "Malaki = 'trimisul Meu' sau 'îngerul Meu' — posibil un apelativ sau pseudonim; familia profetului este necunoscută. Cartea lui Maleahi ocupă ultimul loc în Vechiul Testament și este ultima cronologic. Pomenirea: 3 ianuarie.",
          },
          {
            type: "paragraph",
            text: "Cinci mesageri sunt prezenți în carte: profetul însuși, adevărații preoți, Sf. Ioan Botezătorul, Mesia și Ilie. Contextul: termenul 'peha' (guvernator persan) indică sec. V î.Hr., ~450–430, contemporan cu finalul epocii de reconstrucție, când Templul era refăcut dar dezinteresul moral revenise.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Structura: 6 dispute + epilog",
        children: [
          {
            type: "paragraph",
            text: "(1) Iubirea lui Dumnezeu pentru Israel — alegerea lui Iacob vs. Esau; Edomul = ruină. (2) Mustrarea preoților — animale oarbe, șchioape și bolnave aduse la altar; lauda pentru legământul cu Levi. (3) Infidelitate conjugală și căsătorii mixte — 'Dumnezeu urăște alungarea femeii'. (4) Judecata și Trimișii — îngerul/Ioan Botezătorul va pregăti calea; Îngerul Legământului = Mesia; 'focul topitorului'. (5) Zeciuielile oprite = furt față de Dumnezeu. (6) Distincția drepți/răi; 'cartea de neuitat'; Soarele dreptății = Mesia.",
          },
          {
            type: "key-idea",
            text: "Epilog: Ziua Domnului arzând ca un cuptor; trimiterea profetului Ilie înainte de ziua cea mare; 'inima părinților către fii și a fiilor către părinți'.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Stil, teologie și mesianism",
        children: [
          {
            type: "paragraph",
            text: "Stilul: proză didactică postexilică; metoda disputei — 6 afirmații + 6 obiecții + răspuns divin. NT: Sf. Ap. Pavel citează (Romani) despre alegerea lui Iacob și Esau; Hristos confirmă că Ioan Botezătorul este Ilie. Mesianism: 'Îngerul Legământului' = Hristos; 'Soarele dreptății' = Hristos, Lumina lumii.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Miheia — Betleem Efrata",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Miheia — Numele și originea",
            text: "Miheia este prescurtare din Micaiahu = 'Cine este ca Yahweh?'. Pomenirea: 14 august. Originar din Moreșet-Gat, în sud-vestul Iudei; statut social modest (tatăl nu este menționat). Activitate: 740–700 î.Hr. (Iotam, Ahaz, Iezechia).",
          },
          {
            type: "paragraph",
            text: "Miheia afirmă: 'Plin de putere, de dreptate și de tărie, ca să vădesc fărădelegea lui Iacov'. Este contemporan cu Isaia; a colaborat cu regele Iezechia. Context: Imperiul Asirian (Tiglatpileser III), Războiul Siro-Efraimitic (734–732), căderea Samariei 722.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Structura cărții",
        children: [
          {
            type: "paragraph",
            text: "Cap 1–2: judecata Samariei și Ierusalimului; condamnă răpirea terenurilor celor săraci; promisiunea rămășiței. Cap 3–5: mustrarea căpeteniilor, preoților și profeților mincinoși; Ierusalimul prefăcut în ruine; dar și epoca mesianică — munții Sionului, națiunile vin să învețe, 'săbiile în fiare de plug'. Cap 5 cuprinde profeția centrală din Betleem Efrata.",
          },
          {
            type: "key-idea",
            text: "Cap 6–7: procesul lui Dumnezeu cu poporul (Israel ca martor); 'liturghia profetică' (Cap 7:8–20); doxologie despre iertarea divină.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Mesianism și NT",
        children: [
          {
            type: "paragraph",
            text: "Profeția din Betleem Efrata (Cap 5) anunță locul nașterii lui Mesia. Formularea 'obârșia Lui este din zilele veșniciei' înglobează cele două firi ale lui Hristos: uman din Betleem + divin din veșnicie. NT: profeția este citată de arhierei în fața lui Irod (Matei); Hristos citează Miheia despre dezbinarea familiilor (Mt 10:35–36). Stilul: ebraică clasică vie, jocuri de cuvinte, sinteză a 30+ ani de activitate.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Naum — Judecata Ninivei",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Naum — Numele și misiunea",
            text: "Naum înseamnă 'confort', 'cel care mângâie' sau 'cel care are milă' — rezonanțe cu Noemia și Nehum. Fericitul Ieronim îl prezintă ca mângâietor al celor 10 seminții duse în captivitate asiriană.",
          },
          {
            type: "paragraph",
            text: "Locul natal Elcoș este disputat: Galileea (Ieronim), est Iordan (Eusebiu), Iudeea (Chiril Alex.), Hebron (Epifanie), al-Qoush lângă Mosul (tradiție orientală). Ipoteza lingvistică: Capernaum = 'satul lui Naum'. Datare: 663–612 î.Hr. (după distrugerea Tebei de Assurbanipal, înaintea căderii Ninivei).",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Context și comparație cu Iona",
        children: [
          {
            type: "key-idea",
            text: "Coaliția mezi + babilonieni + sciți a distrus Ninive; râul Khosr a inundat și dărâmat zidurile. Ultimul rege asirian s-a ars de viu în palat. Ninive a fost redescoperită abia în 1850.",
          },
          {
            type: "observation",
            text: "Iona (sec. VIII) vs. Naum (sec. VII): Iona ilustrează mila lui Dumnezeu — pocăința ninivitenilor, apa salvează; Naum ilustrează judecata definitivă — pocăința a fost temporară, apa distruge.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Structura și teologie",
        children: [
          {
            type: "paragraph",
            text: "3 capitole = 9 nuclee: mânia divină, puterea divină, profeții despre Iuda și Ninive, căderea Ninivei, asaltul militar, exemplul Tebei, apărarea inutilă, invazia metaforică a lăcustelor, elegia finală. Psalmul acrostih (cap 1–2:3) = fundament teologic. Manuscrisul de la Qumran (4QpNah) confirmă autenticitatea. Paralele cu Ieremia: jugul sfărâmat, dezgolirea poalelor veșmântului. Mesianism: 'Bun este Domnul, loc de scăpare în zi de strâmtorare' (1:7) = Hristos ca unic loc de scăpare (Fer. Ieronim).",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Osea — Logodna eternă",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Osea — Numele și misiunea",
            text: "Osea = 'mântuire' sau 'El a mântuit'. Talmud (Pesachim 87a): 'cel mai mare profet al generației sale'. Fiul lui Beeri; misiune exclusiv în Regatul de Nord. Activitate: 750–730 î.Hr. Pomenirea: 17 octombrie.",
          },
          {
            type: "paragraph",
            text: "Osea folosește expresia 'regele nostru' (malchenu) și nu menționează niciodată Ierusalimul. Este contemporan cu Isaia, Miheia și Amos. Context: declinul după Ieroboam II, anarhie (6 regi în câțiva ani), agresivitatea Imperiului Asirian sub Tiglatpileser III.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Structura cărții",
        children: [
          {
            type: "paragraph",
            text: "Cap 1–3 (drama familială ca simbol profetic): Osea se căsătorește cu Gomer (desfrânată, fiica lui Diblaim). Cei 3 copii simbolici: Izreel ('Dumnezeu împrăștie'), Lo Ruhama ('Cea neiubită'), Lo Ami ('Nu este poporul Meu'). Cap 2: osânda și promisiunea logodnei eterne: 'te voi logodi cu Mine pe vecie... după dreptate și bunăcuviință'. Cap 3: recumpărarea Gomer = izolarea Israelului înaintea întoarcerii la Dumnezeu.",
          },
          {
            type: "paragraph",
            text: "Cap 4–13 (mustrări profetice): lipsă de adevăr, milostivire și cunoaștere de Dumnezeu; vina preoților; 'turtă neîntoarsă'; 'Israel ca o vie mănoasă'. Cap 11 = dragostea paternă: 'Din Egipt am chemat pe Fiul Meu'. Cap 14 (Epilog): îndemn la înțelepciune și pocăință; verbul șuv ('a se întoarce/pocăi') apare de 23 de ori.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Teologie și mesianism",
        children: [
          {
            type: "key-idea",
            text: "Teologia lui Osea: 'Milă voiesc, iar nu jertfă, și cunoașterea lui Dumnezeu mai mult decât arderile de tot' — combate ritualismul gol. NT: citat de 17 ori; Hristos citează 'Milă voiesc'; Matei: 'Din Egipt am chemat pe Fiul Meu' = fuga în Egipt; Sf. Ap. Pavel: 'Unde este, moarte, biruința ta?'. Mesianism: teologia mirelui divin; Hristos ca Mire, Biserica ca Mireasă; universalitatea mântuirii.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Sofonie — Ziua lui Yahweh",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Sofonie — Numele și genealogia",
            text: "Tefania = 'Yahweh ocrotește' sau 'scutul lui Yahweh'. Genealogie extinsă până la a 4-a generație: fiul lui Cuși, al lui Ghedalia, al lui Amaria, al lui Iezechia. Fericitul Ieronim și exegeza modernă îl identifică drept strănepotul regelui Iezechia, cu origine aristocratică/prințară.",
          },
          {
            type: "paragraph",
            text: "Activitate: 640–612 î.Hr. (zilele lui Iosia, fiul lui Amon), înaintea reformei din 622. Contemporan cu Ieremia. Contextul moștenit de la Manase: cult Baal și Astarte, jertfe umane, uciderea profetului Isaia.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Structura cărții",
        children: [
          {
            type: "key-idea",
            text: "Tema centrală: 'Ziua lui Yahweh' (menționată de 7 ori). Cap 1: judecată universală; căpeteniile și negustorii osândiți; aroganța sceptică — 'Domnul nu va face nici bine, nici rău'. Cap 2: apelul la pocăință; oracole împotriva filistenilor (apus), Moab+Amon (est), etiopienilor (sud), asirienilor+Ninive (nord). Cap 3: mustrarea Ierusalimului; judecătorii = 'lei și lupi'; preoți și profeți mincinoși; 'rămășița' purificată; 'Bucură-te, fiică a Sionului'.",
          },
          {
            type: "paragraph",
            text: "Stilul: simplu, clar, elocvent, patetic; apropiat de Isaia în grandoare teologică. Mesianism: convertirea neamurilor; Dumnezeu adorat de la răsărit până la apus; deschide calea pentru revelația lui Hristos despre închinarea în duh și în adevăr; 'Ziua Domnului' = necesitate pedagogică și purificatoare.",
          },
        ],
      },
    ],
  },
  {
    type: "chapter",
    title: "Profetul Zaharia — Cartea hristocentrică",
    children: [
      {
        type: "subchapter",
        title: "1. Date introductive",
        children: [
          {
            type: "definition",
            term: "Profetul Zaharia — Numele și familia",
            text: "Zaharia = 'Dumnezeu Își amintește' sau 'și-a amintit'. Apare de ~28 de ori în Scriptură. Fiul lui Berechia, fiul lui Ido — familie preoțească reîntoarsă din exil sub Zorobabel; Zaharia a preluat șefia familiei.",
          },
          {
            type: "paragraph",
            text: "Activitate: luna a 8-a, anul 2 al lui Darius I (520 î.Hr.); contemporan cu Agheu. Disputa despre identitatea 'Zahariei, fiul lui Varahia', menționat de Hristos în Matei, a generat două ipoteze patristice privind suprapunerea cu fiul lui Iehoiada din Cronici.",
          },
          {
            type: "observation",
            text: "Ipoteza critică 'Deutero-Zaharia' sau 'Trito-Zaharia' (cap 9–14) este motivată de diferențele de stil față de cap 1–8, dar argumentele conservatoare susțin unitatea autorului.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "2. Cap 1–8: Cele 8 viziuni nocturne",
        children: [
          {
            type: "paragraph",
            text: "(1) Călăreții și caii colorați: mijlocire pentru Ierusalim; Templul va fi rezidit. (2) 4 coarne și 4 fierari: puterile păgâne doborâte. (3) Tânărul cu funia de măsurat (cap 2): Ierusalim fără ziduri; 'zid de foc de jur împrejur' = paza divină. (4) Marele preot Iosua și Satan (cap 3): haine murdare = păcatele poporului; haine curate + mitră; 'Servul Meu Odraslă' = Mesia; piatra cu 7 ochi = atotcunoașterea divină. (5) Sfeșnicul de aur și 2 măslini (cap 4): 'nu prin forță, ci prin Duhul Meu'. (6) Sulul zburător (cap 5): blestemul împotriva fărădelegii. (7) Femeia în baniță: nelegiuirea dusă în Babilon. (8) 4 care de luptă (cap 6): judecata la toate punctele cardinale.",
          },
          {
            type: "key-idea",
            text: "Acțiunea profetică: coroana pusă pe capul lui Iosua = mesianism (regele + preotul = Hristos). Cap 7–8: posturile transformate în sărbătoare; pelerinaj universal la Ierusalim.",
          },
        ],
      },
      {
        type: "subchapter",
        title: "3. Cap 9–14: Oracolele eshatologice",
        children: [
          {
            type: "paragraph",
            text: "Cap 9: intrarea mesianică în Ierusalim: 'Bucură-te... Iată Împăratul tău vine... smerit și călare pe mânzul unui asin'; 'sângele legământului'. Cap 11: cei 30 de arginți aruncați pentru olar în vistierie = trădarea lui Iuda — împlinit literal în NT (citat de Matei). Cap 12: 'vor privi la Mine, pe Care L-au străpuns' — citat de Ioan la răstignire. Cap 13: 'Bate-voi păstorul și se vor risipi oile' — citat de Hristos la Ghetsimani; purificarea prin foc. Cap 14: bătălia eshatologică; picioarele Domnului pe Muntele Măslinilor; ape vii = har universal; tot Ierusalimul = templu sfânt.",
          },
          {
            type: "key-idea",
            text: "Teologie: reconstrucția spirituală este prioritară; universalitatea mântuirii; Păstorul cel Bun și jertfa noului legământ. Cartea lui Zaharia este una dintre cele mai citate în NT datorită caracterului ei profund hristocentric.",
          },
        ],
      },
    ],
  },
];

// ─── TEST (50 întrebări) ──────────────────────────────────────────────────────
export const vtTest: TestQuestion[] = [
  // 1
  {
    intrebare: "Din ce categorie de cărți face parte scrierea profetului Agheu?",
    variante: ["Cărți preexilice", "Cărți sapiențiale", "Cărți postexilice", "Cărți istorice"],
    corect: 2,
  },
  // 2
  {
    intrebare: "Care este traducerea numelui Agheu din limba ebraică?",
    variante: ["Sarcină", "Sărbătorile mele", "Luptă", "Trimisul Meu"],
    corect: 1,
  },
  // 3
  {
    intrebare: "Ce analogie a făcut exegetul L. Gauthier cu privire la numele profetului Agheu?",
    variante: [
      "Că s-ar fi născut într-o familie de leviți",
      "Că s-ar fi născut într-o posibilă zi de sărbătoare",
      "Că numele său indică un destin de martir",
      "Că numele său provine din limba aramaică",
    ],
    corect: 1,
  },
  // 4
  {
    intrebare: "Ce forme asemănătoare ale numelui lui Agheu se întâlnesc în Vechiul Testament?",
    variante: [
      "Hagghi și Haghita",
      "Abakoum și Habacum",
      "Malaki și Malakiah",
      "Osea și Iona",
    ],
    corect: 0,
  },
  // 5
  {
    intrebare: "Sub conducerea căror doi lideri a sosit în Israel primul val de evrei repatriați?",
    variante: [
      "Cirus și Darius",
      "Ezdra și Neemia",
      "Zorobabel și arhiereul Iosua",
      "Moise și Aaron",
    ],
    corect: 2,
  },
  // 6
  {
    intrebare: "Care sunt psalmii atribuiți lui Agheu în Septuaginta?",
    variante: ["Psalmii 111 și 145", "Psalmii 145-148", "Psalmii 1-5", "Psalmii 7-9"],
    corect: 1,
  },
  // 7
  {
    intrebare: "Ce caracterizare memorabilă privitoare la activitatea lui Agheu a lăsat Fericitul Ieronim?",
    variante: [
      "Agheu a fost profetul dreptății sociale",
      "Agheu a învățat să se semene cu lacrimi ca să se poată culege cu bucurie",
      "Agheu este profetul mâniei Domnului",
      "Agheu a purtat pe umerii săi povara poporului",
    ],
    corect: 1,
  },
  // 8
  {
    intrebare: "În ce carte istorică a Bibliei este consemnată direct activitatea profetului Agheu?",
    variante: [
      "Cartea a Patra a Regilor",
      "Cartea Ezdra",
      "Cartea Neemia",
      "Cartea Paralipomena",
    ],
    corect: 1,
  },
  // 9
  {
    intrebare: "Prin ce se deosebea politica externă a regelui persan Cirus față de cea a imperiilor anterioare?",
    variante: [
      "Distrugea complet structurile religioase ale popoarelor învinse",
      "Deporta în masă toate populațiile cucerite",
      "Respecta identitatea națională și sprijinea cultele regionale",
      "Impunea o singură religie obligatorie în întregul imperiu",
    ],
    corect: 2,
  },
  // 10
  {
    intrebare: "Câți repatriați s-au întors la Ierusalim ca urmare a decretului de eliberare dat de Cirus?",
    variante: [
      "Aproximativ 10.000",
      "Aproximativ 50.000",
      "Peste 120.000",
      "Exact 350.000",
    ],
    corect: 1,
  },
  // 11
  {
    intrebare: "Din ce cauză i-au refuzat evreii pe samarineni când aceștia au cerut să participe la rezidirea sanctuarului în anul 536 î.Hr.?",
    variante: [
      "Pentru că samarinenii doreau să construiască un templu păgân",
      "Pentru că nu aveau resurse financiare suficiente",
      "Pentru că îi considerau nemerituoși deoarece nu trecuseră prin suferința exilului",
      "Din cauza unei porunci directe a regelui Cirus",
    ],
    corect: 2,
  },
  // 12
  {
    intrebare: "Câți ani au fost abandonate lucrările de reconstrucție a Templului din cauza intrigilor politice ale samarinenilor?",
    variante: ["3 ani", "7 ani", "12 ani", "17 ani"],
    corect: 3,
  },
  // 13
  {
    intrebare: "Sub ce formă s-a manifestat pedeapsa divină cauzată de dezinteresul intern al poporului față de Casa Domnului?",
    variante: [
      "O invazie de lăcuste",
      "Un incendiu simbolic",
      "O secetă severă care a provocat foamete",
      "Un cutremur de pământ major",
    ],
    corect: 2,
  },
  // 14
  {
    intrebare: "În ce perioadă exactă din anul 520 înainte de Hristos s-a concentrat mesajul public al lui Agheu?",
    variante: [
      "Între lunile ianuarie și martie",
      "Între lunile august și decembrie",
      "Pe parcursul întregului an",
      "Doar în luna septembrie",
    ],
    corect: 1,
  },
  // 15
  {
    intrebare: "În ce an și în ce zi a lunii Adar a fost finalizat în cele din urmă Templul?",
    variante: [
      "În anul 536 î.Hr., în a 21-a zi a lunii Adar",
      "În anul 520 î.Hr., în a 24-a zi a lunii Adar",
      "În anul 515 î.Hr., în a treia zi a lunii Adar",
      "În anul 587 î.Hr., în prima zi a lunii Adar",
    ],
    corect: 2,
  },
  // 16
  {
    intrebare: "Cui este adresată în mod direct prima cuvântare a profetului Agheu?",
    variante: [
      "Femeilor bogate din Samaria",
      "Regelui Darius I al Persiei",
      "Guvernatorului Zorobabel și arhiereului Iosua",
      "Locuitorilor din Betel și Dan",
    ],
    corect: 2,
  },
  // 17
  {
    intrebare: "Ce scuză generală a poporului combate Agheu în prima sa cuvântare?",
    variante: [
      "Că pământul este prea uscat pentru a lucra",
      "Că n-ar fi sosit încă vremea de a zidi casa lui Yahweh",
      "Că samarinenii îi vor ataca din nou",
      "Că nu au aur și argint pentru podoabe",
    ],
    corect: 1,
  },
  // 18
  {
    intrebare: "După câte zile de la prima cuvântare a dispărut entuziasmul inițial al poporului și al conducătorilor?",
    variante: ["După 3 zile", "După 7 zile", "După 17 zile", "După 23 de zile"],
    corect: 3,
  },
  // 19
  {
    intrebare: "În ce zi a fost rostită a doua cuvântare și ce anume îi descuraja pe bătrâni/comunitate?",
    variante: [
      "În ziua a 24-a a lunii a noua; frica de invazia caldeilor",
      "În ziua a 21-a a lunii a șaptea; faptul că noul templu nu se ridica la gloria vizuală a celui al lui Solomon",
      "În a treia zi a lunii Adar; seceta prelungită",
      "În ziua a 15-a a lunii iunie; lipsa scrierilor profetice",
    ],
    corect: 1,
  },
  // 20
  {
    intrebare: "Ce promisiune face Dumnezeu în a doua cuvântare legat de noul templu?",
    variante: [
      "Că va fi distrus de un foc mistuitor",
      "Că va întrece în slavă pe cel dintâi în timpurile mesianice și în acest loc va sălășlui pacea",
      "Că va fi păzit de un zid fizic de foc",
      "Că va rămâne pustiu timp de 17 ani",
    ],
    corect: 1,
  },
  // 21
  {
    intrebare: "Pe baza cărei legi explică Agheu, în a treia cuvântare, că aducerea de daruri nu este suficientă dacă viața nu este sfântă?",
    variante: [
      "Pe baza legii curăției rituale și morale din Lege",
      "Pe baza legilor administrative persane",
      "Pe baza decretului lui Cirus",
      "Pe baza legii talionului",
    ],
    corect: 0,
  },
  // 22
  {
    intrebare: "Cum este numit Zorobabel în a patra cuvântare și ca ce simbol promite Dumnezeu că îl va ține aproape?",
    variante: [
      "Purtător de jug și ca un toiag de urgie",
      "Sluga Domnului și ca un inel cu pecete",
      "Îngerul Meu și ca o vargă de argint",
      "Păstor de sicomore și ca o balanță a judecății",
    ],
    corect: 1,
  },
  // 23
  {
    intrebare: "Ce formulă autoritară este utilizată în mod excesiv și repetitiv în textul cărții lui Agheu?",
    variante: [
      "Pentru trei păcate... ba chiar pentru patru",
      "Pregătește-te, Israele, să te întâlnești cu Dumnezeul tău!",
      "Așa zice Yahweh, Domnul oștirilor",
      "Dreptul din credință va fi viu",
    ],
    corect: 2,
  },
  // 24
  {
    intrebare: "Care este traducerea numelui profetului Amos?",
    variante: [
      "Sărbătorile mele",
      "Sarcină sau greutate",
      "Cel care îmbrățișează",
      "Trimisul Meu",
    ],
    corect: 1,
  },
  // 25
  {
    intrebare: "În ce localitate s-a născut Amos și în ce regat se afla aceasta?",
    variante: [
      "Betel, în Regatul de Nord",
      "Tecoa, în Regatul de Sud (Iuda)",
      "Ierusalim, în Regatul de Sud",
      "Samaria, în Regatul de Nord",
    ],
    corect: 1,
  },
  // 26
  {
    intrebare: "În ce centre din Regatul de Nord (Israel) și-a îndeplinit Amos misiunea profetică?",
    variante: [
      "Dan și Beerșeba",
      "Ghilgal și Lachiș",
      "Samaria și Betel",
      "Gath și Hazor",
    ],
    corect: 2,
  },
  // 27
  {
    intrebare: "Pe ce dată este pomenit profetul Amos în calendarul Bisericii Ortodoxe?",
    variante: ["3 ianuarie", "15 iunie", "21 iulie", "2 decembrie"],
    corect: 1,
  },
  // 28
  {
    intrebare: "Cu ce cuvinte își mărturisește Amos trecutul, arătând că nu provenea dintr-o dinastie de profeți?",
    variante: [
      "Eu sunt un simplu cântăreț și conducător de cor",
      "Eu nu sunt proroc și nici fecior de proroc, ci sunt păstor și adunător de sicomore",
      "Eu am fost santinela așezată de profetul Isaia",
      "Eu sunt cel mai mic dintre fiii lui Gad",
    ],
    corect: 1,
  },
  // 29
  {
    intrebare: "Ce metaforă plastică folosește Amos pentru a exprima ascultarea sa față de porunca divină?",
    variante: [
      "Dacă leul mugește, cine nu se va înfricoșa? Și dacă Domnul grăiește, cine nu va profeți?",
      "Zidul de foc de jur împrejur va apăra cetatea",
      "Inelul cu pecete oferă garanția absolută",
      "Să se semene cu lacrimi ca să se culeagă cu bucurie",
    ],
    corect: 0,
  },
  // 30
  {
    intrebare: "Ce comparație pastorală folosește Amos ca avertisment pentru modul în care fiii lui Israel vor scăpa din mâna vrăjmașilor?",
    variante: [
      "Ca un pește prins în năvodul unui pescar fără discernământ",
      "Așa cum un cioban abia mai scapă din gura leului două șolduri sau un vârf de ureche",
      "Ca niște lăcuste oprite din invazie prin rugăciune",
      "Ca niște fructe coapte într-un paner de vară",
    ],
    corect: 1,
  },
  // 31
  {
    intrebare: "Cu ce eveniment natural major este datată activitatea lui Amos?",
    variante: [
      "O secetă severă de 17 ani",
      "Un incendiu simbolic major",
      "Un cutremur de pământ major, cu doi ani înainte de acesta",
      "O eclipsă totală de soare",
    ],
    corect: 2,
  },
  // 32
  {
    intrebare: "Ce treaptă de magnitudine pe scara Richter se estimează că a avut cutremurul din zilele regelui Ozia, conform descoperirilor arheologice?",
    variante: ["Gradul 5", "Gradul 6", "Gradul 7", "Posibil de gradul 8"],
    corect: 3,
  },
  // 33
  {
    intrebare: "Care erau cele patru centre în care idolatria din Israel ajunsese la apogeu în epoca lui Ieroboam al II-lea?",
    variante: [
      "Ierusalim, Bet Zoher, Tecoa, Betleem",
      "Ninive, Damasc, Gaza, Tir",
      "Dan, Betel, Ghilgal și Beerșeba",
      "Gath, Hazor, Lachiș, Ashkelon",
    ],
    corect: 2,
  },
  // 34
  {
    intrebare: "Cu ce preot local din Betel a intrat Amos într-un conflict deschis?",
    variante: ["Iosua", "Amasia", "Ioțadac", "Sebeniu"],
    corect: 1,
  },
  // 35
  {
    intrebare: "Ce formulă poetică fixă folosește Amos în capitolele 1-6 pentru a simboliza păcatul multiplicat al popoarelor?",
    variante: [
      "Așa zice Yahweh, Domnul oștirilor",
      "Pentru trei păcate... ba chiar pentru patru nu mă voi întoarce",
      "Vai de cei ce aduc daruri necurate pe altar",
      "Dreptul din credință va fi viu",
    ],
    corect: 1,
  },
  // 36
  {
    intrebare: "Cum le numește profetul Amos pe femeile bogate și nepăsătoare din Israel în capitolul 4?",
    variante: [
      "Fete ale desfrâului",
      "Juncane de Basan",
      "Soții ale lui Baal",
      "Santinele adormite",
    ],
    corect: 1,
  },
  // 37
  {
    intrebare: "Care sunt primele două viziuni din capitolele 7-9 care au fost oprite în urma rugăciunii de mijlocire a profetului Amos?",
    variante: [
      "Îngerul cu balanța și Panerul cu fructe coapte",
      "Dumnezeu stând pe altar și Invazia caldeilor",
      "Invazia lăcustelor și Focul mistuitor",
      "Seceta severă și Cutremurul de pământ",
    ],
    corect: 2,
  },
  // 38
  {
    intrebare: "Ce simbolizează a treia viziune a lui Amos, cea a îngerului cu balanța (sau plumbul de cumpănă)?",
    variante: [
      "Iertarea necondiționată a poporului",
      "Judecata strictă și iminența distrugerii dinastiei lui Ieroboam al II-lea și a regatului",
      "Prosperitatea economică viitoare a Levantului",
      "Universalitatea planului de mântuire",
    ],
    corect: 1,
  },
  // 39
  {
    intrebare: "Ce tip de foamete este sugerată în viziunea panerului cu fructe coapte?",
    variante: [
      "O foamete materială de pâine și apă din cauza secetei",
      "O foamete spirituală de auzirea cuvântului Domnului",
      "O foamete cauzată de distrugerea recoltelor de către lăcuste",
      "O foamete politică adusă de vasalitatea față de Egipt",
    ],
    corect: 1,
  },
  // 40
  {
    intrebare: "Ce constelații sunt menționate în pasajele doxologice ale cărții lui Amos?",
    variante: [
      "Ursa Mare și Ursa Mică",
      "Orionul și Pleiadele",
      "Cassiopeia și Andromeda",
      "Toate constelațiile zodiacale",
    ],
    corect: 1,
  },
  // 41
  {
    intrebare: "Ce supranume a primit profetul Amos în teologie?",
    variante: [
      "Profetul mâniei Domnului",
      "Profetul dreptății sociale",
      "Mesagerul templului refăcut",
      "Luptătorul credinței",
    ],
    corect: 1,
  },
  // 42
  {
    intrebare: "Care sunt cele două personaje din Noul Testament care citează direct din textul lui Amos?",
    variante: [
      "Sfântul Evanghelist Matei și Sfântul Apostol Pavel",
      "Sfântul Arhidiacon Ștefan și Sfântul Apostol Iacob",
      "Sfântul Ioan Botezătorul și Sfântul Apostol Petru",
      "Sfântul Chiril al Alexandriei și Fericitul Ieronim",
    ],
    corect: 1,
  },
  // 43
  {
    intrebare:
      "La ce se referă, în tâlcuirea Sfinților Părinți, sintagma mesianică voi ridica iarăși cortul cel căzut al lui David?",
    variante: [
      "La reconstruirea Templului fizic finalizat în anul 515 î.Hr.",
      "La domnia istorică a regelui Ozia",
      "La venirea Mântuitorului Hristos, Învierea Domnului reprezentând refacerea acestui cort (trupul Sau)",
      "La întoarcerea celor 50.000 de repatriați din Babilon",
    ],
    corect: 2,
  },
  // 44
  {
    intrebare: "Care sunt cele două forme sub care apare numele profetului Avacum în Septuaginta și în Vulgata?",
    variante: [
      "Haggai și Haggis",
      "Abakoum și Habacum",
      "Malaki și Malakiah",
      "Osea și Oseea",
    ],
    corect: 1,
  },
  // 45
  {
    intrebare: "Care este traducerea numelui Avacum oferită ca interpretare alternativă de către Fericitul Ieronim?",
    variante: [
      "El a îmbrățișat",
      "Sărbătoare",
      "Luptă sau luptător",
      "Sarcină grea",
    ],
    corect: 2,
  },
  // 46
  {
    intrebare: "Cu cine îl identifică unele scrieri rabinice (Midrașim sau Zohar) pe Avacum?",
    variante: [
      "Cu un descendent direct pe linie davidică",
      "Cu însuși fiul Sunamitencei care a fost înviat de profetul Elisei",
      "Cu marele preot Iosua, fiul lui Ioțadac",
      "Cu unul dintre fiii lui Gad numit Hagghi",
    ],
    corect: 1,
  },
  // 47
  {
    intrebare:
      "În ce localitate s-ar fi născut Avacum, potrivit scrierilor atribuite Sfinților Epifanie de Salamina sau Dorotei al Tyrului?",
    variante: ["Tecoa", "Bet Zoher (Simeon)", "Betel", "Ierusalim"],
    corect: 1,
  },
  // 48
  {
    intrebare: "Pe ce dată este pomenit profetul Avacum în calendarul bisericesc?",
    variante: ["3 ianuarie", "15 iunie", "15 august", "2 decembrie"],
    corect: 3,
  },
  // 49
  {
    intrebare:
      "Ce popor invadator (numit explicit în text) reprezintă indiciul major pentru stabilirea datei profeției lui Avacum?",
    variante: ["Perșii", "Asirienii", "Caldeii (babilonienii)", "Egiptenii"],
    corect: 2,
  },
  // 50
  {
    intrebare:
      "Pe ce anume i-a poruncit Dumnezeu explicit profetului Avacum să sape clar răspunsul divin care culminează cu afirmația dreptul din credință va fi viu?",
    variante: [
      "Pe porțile cetății Ierusalimului",
      "Pe table de piatră",
      "Pe veșmântul marelui preot",
      "Pe un inel cu pecete",
    ],
    corect: 1,
  },
];
