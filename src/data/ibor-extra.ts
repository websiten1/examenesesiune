import type { ContentBlock } from "./exams";
import type { RezumatBlock, TestQuestion } from "./bizant-extra";

// ─── SOS REZUMAT ────────────────────────────────────────────────────────────
export const iborRezumat: RezumatBlock[] = [
  {
    curs: "Tema 1 — Mitropolitul Veniamin Costachi (1803–1842)",
    puncte: [
      "Născut în 1768 la Roșiori-Neamț, decedat 1846 la Mănăstirea Slatina; supranumit «luminătorul Moldovei».",
      "A fondat Seminarul de la Socola (1803) — primul seminar teologic din Moldova.",
      "A înființat primele școli în sate moldovene, gimnazii, școli de arte frumoase, muzică și medicină la Iași.",
      "Activitate tipografică intensă: a tipărit catehisme, cărți religioase și liturgice; a tradus Noul Testament în română (1817).",
      "Patriot: s-a opus introducerii Regulamentelor Organice de către ruși, a demisionat de două ori în loc să cedeze presiunilor.",
      "Ctitor: a restaurat și ridicat mănăstiri; a murit ca monah la Slatina (1846).",
    ],
  },
  {
    curs: "Tema 2 — Mitropolitul Grigorie Dascălul (1823–1834)",
    puncte: [
      "Născut la București circa 1765, decedat 1834; monah la Mănăstirea Neamț, ucenic al Sf. Paisie Velicicovski.",
      "Mitropolit al Ungrovlahiei (Valahia) 1823–1834.",
      "Renumit pentru traducerea și publicarea de scrieri patristice, inclusiv volume din Filocalie.",
      "S-a opus secularizării averilor mănăstirești și a fost exilat de două ori de autoritățile Regulamentelor Organice.",
      "A tipărit cărți liturgice și a inițiat primele tentative de periodice religioase.",
      "Canonizat de BOR ca «Sfântul Ierarh Grigorie Dascălul».",
    ],
  },
  {
    curs: "Tema 3 — Regulamentele Organice",
    puncte: [
      "Introduse de ruși în Valahia (1831) și Moldova (1832) în timpul ocupației militare.",
      "Autoritatea laică (principii, statul) a câștigat mai mult control asupra numirii clerului.",
      "Tribunalele civile puteau judeca acum cauze ale clerului; preoții duceau registre de nașteri, căsătorii și decese.",
      "Suportul financiar pentru cler a fost redus; s-a instituit un sistem complex de dijmă.",
      "Unele școli sătești au fost înființate, dar sub control de stat; efecte mixte: modernizare plus interferență străină.",
      "Mitropoliții ortodocși au rezistat interferenței străine în treburile Bisericii.",
    ],
  },
  {
    curs: "Tema 4 — Mitropolitul Andrei Șaguna (1864–1873)",
    puncte: [
      "Născut 1809 la Mișcolț (Ungaria), decedat 1873 la Sibiu; origini aromâne/macedoromâne.",
      "Episcop ortodox al Sibiului din 1848; a restaurat Mitropolia Ortodoxă a Transilvaniei (1864) după secole de subordonare față de ierarhia sârbă.",
      "A fondat ziarul «Telegraful Român» (1853, apare și azi) și școli teologice și gimnazii.",
      "Statutul Organic (1868): document unic de guvernare bisericească ce acorda laicilor reprezentare în administrația Bisericii.",
      "A participat la evenimentele revoluționare de la 1848 alături de poporul român.",
      "Canonizat de BOR; a publicat «Compendiu de drept canonic» și alte lucrări teologice.",
    ],
  },
  {
    curs: "Tema 5 — Episcopul Chesarie al Buzăului (1825–1846)",
    puncte: [
      "Născut circa 1784, decedat 1846; episcop al Buzăului 1825–1846.",
      "A fondat prima școală din Buzău (1836) și Seminarul de Buzău.",
      "A înființat școli de muzică sacră (psaltichie) și pictură bisericească (iconografie).",
      "A creat tipografia Episcopiei Buzău; a tipărit cărți liturgice și educaționale.",
      "Unul dintre cei mai activi episcopi ai Bisericii valahe în prima jumătate a secolului al XIX-lea.",
      "Activitatea sa a impulsionat viața culturală și religioasă a Munteniei de sud-est.",
    ],
  },
  {
    curs: "Tema 6 — Alexandru Ioan Cuza și reformele sale bisericești",
    puncte: [
      "Cuza: domn al Principatelor Unite 1859–1866; a promovat modernizarea statului pe baze laice.",
      "Secularizarea averilor mănăstirești (1863): circa 25% din pământul României, mai ales al mănăstirilor închinate (metochii) sub mănăstiri grecești.",
      "Reformele școlare: scoaterea Bisericii din controlul educației; întemeierea școlilor laice.",
      "Legea Sinodului Organic (1864): sinod controlat de stat, subordonând Biserica față de puterea laică.",
      "L-a expulzat pe Mitropolitul Sofronie Miclescu al Moldovei care i s-a opus.",
      "Reforme ce au tensionat relația stat–Biserică, dar au accelerat modernizarea societății românești.",
    ],
  },
  {
    curs: "Tema 7 — Recunoașterea Autocefaliei (25 aprilie 1885)",
    puncte: [
      "România a declarat autocefalia de facto în 1865 în urma reformelor lui Cuza.",
      "Legea organică (1872) a reorganizat BOR cu un Sinod permanent.",
      "Patriarhia Ecumenică a refuzat ani de-a rândul să recunoască autocefalia.",
      "La 25 aprilie 1885: Patriarhul Ecumenic Ioachim IV a semnat Tomosul de recunoaștere a autocefaliei BOR.",
      "Mitropolitul Calinic Miclescu al Ungrovlahiei a devenit primul ierarh al Bisericii autocefale.",
      "Moment crucial pentru independența Bisericii Ortodoxe Române față de Constantinopol.",
    ],
  },
  {
    curs: "Tema 8 — Episcopul Sfântul Calinic al Râmnicului (1850–1868)",
    puncte: [
      "Născut 1787 la Mănăstirea Cernica, decedat 1868; monah și ulterior stareț al Cernicăi.",
      "Episcop al Râmnicului (Vâlcea) 1850–1868.",
      "Activitate tipografică: a tipărit multe cărți liturgice și de evlavie la tipografia Râmnicului.",
      "Cunoscut pentru sfințenia personală, simplitate și devotament pastoral; a săvârșit minuni în timpul vieții.",
      "Canonizat de BOR în 1955 — primul episcop român modern canonizat ca sfânt.",
      "Exemplu de ierarh duhovnicesc în spiritul cel mai autentic al Ortodoxiei românești.",
    ],
  },
  {
    curs: "Tema 9 — Episcopul Dionisie Romano al Buzăului (1859–1864)",
    puncte: [
      "Născut circa 1806, decedat 1873; episcop al Buzăului în mai multe perioade.",
      "Educator și susținător al instrucției publice; figură centrală în întemeierea școlilor.",
      "A fondat primul ziar/periodic al Bisericii: «Vestitorul Bisericesc» — primul ziar religios din istoria Ortodoxiei românești.",
      "A tradus și publicat texte patristice, materiale educaționale și catehisme.",
      "A slujit și ca mitropolit al Ungrovlahiei pentru o scurtă perioadă.",
      "Activitate publicistică bogată, punând bazele presei bisericești românești.",
    ],
  },
  {
    curs: "Tema 10 — Episcopul Melchisedec Ștefănescu al Romanului (1879–1892)",
    puncte: [
      "Născut 1823 în Gârcina-Neamț, decedat 1892; episcop al Romanului 1879–1892.",
      "A publicat manuale teologice utilizate în seminarii și lucrări de istorie bisericească.",
      "A scris cronici și studii istorice despre istoria Bisericii Române («Chronica Hușilor», «Chronica Romanului»).",
      "Activitate patriotică: implicat în mișcările culturale și de unificare națională.",
      "Participant activ în Sfântul Sinod la decizii majore privind guvernarea Bisericii.",
      "Membru al Academiei Române — recunoaștere a valorii sale științifice și culturale.",
    ],
  },
  {
    curs: "Tema 11 — Mitropolitul Iosif Naniescu (1875–1902)",
    puncte: [
      "Născut 1820 în Rusii-Mănăstioarei, decedat 1902; mitropolit al Moldovei 1875–1902.",
      "Unul dintre cei mai longevivi mitropoliți ai Moldovei.",
      "A construit Catedrala Mitropolitană din Iași (finalizată în timpul mandatului său).",
      "A introdus corul mixt (cor mixt) în liturghia bisericească — inovație în România.",
      "A fondat o revistă teologică periodică; donator generos al Academiei Române pentru proiecte culturale.",
      "Cunoscut pentru zel pastoral și patronaj cultural.",
    ],
  },
  {
    curs: "Tema 12 — Biserica Ortodoxă după 1918",
    puncte: [
      "1918: Marea Unire — România s-a unit cu Transilvania, Bucovina și Basarabia.",
      "Provocare: unificarea mai multor structuri bisericești ortodoxe (Regatul Vechi, Transilvania cu Statutul Șaguna, Bucovina, Basarabia).",
      "Legea BOR 1925: a unificat toți ortodocșii români sub o structură, stabilind Patriarhia.",
      "Concordatul cu Vaticanul (1929): a reglementat relațiile cu Biserica Catolică din România.",
      "Legea Cultelor: a stabilit cadrul pentru toate comunitățile religioase.",
      "Noi provocări: Biserica Greco-Catolică în Transilvania, bisericile minorităților, presiunile laiciste.",
    ],
  },
  {
    curs: "Tema 13 — Patriarhul Miron Cristea (1925–1939)",
    puncte: [
      "Născut 1868 la Toplița (Transilvania), decedat 1939; primul Patriarh al României (1925–1939).",
      "Parcurs: studii la Budapesta și Sibiu, episcop de Caransebeș 1910–1919, mitropolit al Ungrovlahiei 1919–1925.",
      "A devenit patriarh când s-a înființat Patriarhia Română (1925).",
      "Regent al României în timpul minoratului regelui Mihai (1927–1930, 1939).",
      "Prim-ministru al României (feb. 1938 – mart. 1939) în timpul dictaturii regale a lui Carol II.",
      "A organizat Patriarhia și relațiile cu celelalte Biserici Ortodoxe internaționale; a decedat în funcție la Cannes.",
    ],
  },
  {
    curs: "Tema 14 — Patriarhul Nicodim Munteanu (1939–1948)",
    puncte: [
      "Născut 1864 în Pipirig-Neamț, decedat 1948; educat la Academia Teologică din Kiev.",
      "Traducător al Bibliei: a tradus și publicat Biblia integrală în română (Biblia din 1944).",
      "A condus Biserica în perioada celui de-al Doilea Război Mondial.",
      "A decedat tocmai când regimul comunist își consolida puterea.",
      "Monah râvnitor și traducător prolific al literaturii patristice.",
      "Ultima punte dintre tradiția pre-comunistă și noile realități politice impuse Bisericii.",
    ],
  },
  {
    curs: "Tema 15 — Mitropolitul Irineu Mihalcescu (1939–1947)",
    puncte: [
      "Născut 1874, decedat 1947; profesor de teologie și carieră academică la Facultatea de Teologie din Iași.",
      "Autor prolific: peste 540 de titluri publicate.",
      "Opera principală: «Teologia dogmatică și simbolică» (Teologie Fundamentală/Dogmatică).",
      "Mitropolit al Moldovei 1939–1947.",
      "Reprezentant al tradiției teologice intelectuale a școlii ieșene.",
      "Contribuție majoră la literatura teologică academică românească.",
    ],
  },
  {
    curs: "Tema 16 — Mitropolitul Nicolae Bălan (1920–1955)",
    puncte: [
      "Născut 1882 la Blaj, decedat 1955; mitropolit al Transilvaniei 1920–1955.",
      "A impus Statutul Organic al lui Șaguna ca bază a guvernării Bisericii transilvănene după unirea din 1918.",
      "A combătut Concordatul cu Vaticanul în Senatul României — apărător al intereselor ortodoxe.",
      "A reconstruit Mănăstirea Sâmbăta de Sus — centru spiritual al Transilvaniei.",
      "Susținător puternic al identității naționale românești în Transilvania.",
      "A condus Biserica transilvăneană în perioade dificile: al Doilea Război Mondial și instaurarea comunismului.",
    ],
  },
  {
    curs: "Tema 17 — Patriarhul Justinian Marina (1948–1977)",
    puncte: [
      "Născut 1901 în Suiești-Vâlcea, decedat 1977; patriarh 1948–1977 — cel mai longeviv patriarh român.",
      "«Apostolat social»: concept nou de angajament social al Bisericii în condițiile comunismului.",
      "A supravegheat dizolvarea forțată a Bisericii Greco-Catolice din România (1948) și reintegrarea credincioșilor ei în Ortodoxie.",
      "Statutul din 1948: nou statut al Bisericii sub presiune comunistă, reorganizând relațiile stat–Biserică.",
      "A condus procesul de canonizare a sfinților români (1955: Sf. Calinic etc.).",
      "A păstrat activitatea Bisericii sub regimul comunist prin compromis și negociere; a întemeiat mănăstiri de maici cu activități cultural-artistice.",
    ],
  },
  {
    curs: "Tema 18 — Patriarhul Justin Moisescu (1977–1986)",
    puncte: [
      "Născut 1910 în Cândești-Argeș, decedat 1986; carieră academică cu studii la Atena și Strasbourg (doctorat).",
      "Profesor la facultăți de teologie; patriarh 1977–1986.",
      "A inițiat și coordonat colecția PSB (Părinți și Scriitori Bisericești): una dintre cele mai mari colecții de traduceri patristice ortodoxe.",
      "A continuat navigarea relațiilor stat–Biserică în regimul Ceaușescu.",
      "Contribuție majoră la cultura teologică română prin proiectul PSB.",
      "Personalitate academică și eclesiastică de anvergură în Ortodoxia românească contemporană.",
    ],
  },
  {
    curs: "Tema 19 — Patriarhul Teoctist Arăpașu (1986–2007)",
    puncte: [
      "Născut 1915 în Tocileni-Botoșani, decedat 2007; 57 de ani de episcopat — unul dintre cele mai lungi din istoria ortodoxă.",
      "A reorganizat administrative eparhiile și mitropoliile Bisericii.",
      "Canonizarea din 1992 a sfinților români: importantă sinaxă de noi sfinți canonizați.",
      "A condus Biserica prin căderea comunismului (1989): a demisionat scurt timp, apoi s-a întors.",
      "L-a primit pe Papa Ioan Paul al II-lea în România (1999) — prima vizită papală într-o țară cu majoritate ortodoxă.",
      "Relații ecumenice și internaționale active; martor al transformărilor majore din istoria recentă a României.",
    ],
  },
];

// ─── CURSUL COMPLET ──────────────────────────────────────────────────────────
export const iborMaterieComplet: ContentBlock[] = [
  {
    type: "chapter",
    title: "Tema 1 — Mitropolitul Veniamin Costachi (1803–1842)",
    children: [
      {
        type: "key-idea",
        text: "Veniamin Costachi este supranumit «luminătorul Moldovei» pentru contribuția sa excepțională la cultura, educația și viața spirituală a Moldovei în prima jumătate a secolului al XIX-lea.",
      },
      {
        type: "definition",
        term: "Veniamin Costachi (1768–1846)",
        text: "Mitropolit al Moldovei, ctitor al primului seminar teologic moldovenesc, traducător al Noului Testament și patriot care a rezistat reformelor impuse de ocupanții ruși.",
      },
      {
        type: "paragraph",
        text: "Născut în 1768 la Roșiori-Neamț, Veniamin Costachi a îmbrăcat haina monahală de tânăr și a urcat rapid treptele ierarhiei bisericești, ajungând mitropolit al Moldovei. Mandatul său (1803–1842, cu unele întreruperi) a fost marcat de o activitate prodigioasă pe toate planurile. A fondat Seminarul de la Socola în 1803 — primul seminar teologic din Moldova —, instituind astfel cadrul instituțional de formare a clerului moldovenesc. A înträit simțul responsabilității față de educația generală, întemeiind primele școli în sate moldovene și primele gimnazii, precum și școli de arte frumoase, muzică și medicină la Iași.",
      },
      {
        type: "paragraph",
        text: "Activitatea tipografică a lui Veniamin Costachi a lăsat o amprentă de neșters: a tipărit catehisme, cărți religioase și liturgice, punând în mâinile credincioșilor unelte de formare spirituală. Capodopera sa de traducere rămâne Noul Testament în română (1817), contribuind decisiv la standardizarea limbii literare. Pe plan politic, s-a dovedit un autentic patriot: a rezistat cu fermitate introducerii Regulamentelor Organice de către ruși, preferând să demisioneze de două ori mai degrabă decât să accepte ingerința străină în treburile Bisericii și ale Moldovei. A murit în 1846, ca monah, la Mănăstirea Slatina, lăsând în urmă o Moldovă mai luminată și o Biserică mai bine organizată.",
      },
      {
        type: "observation",
        text: "Dupla rezemnare a lui Veniamin în fața presiunilor rusești este un gest de demnitate remarcabil pentru epoca sa, demonstrând că ierarhii Bisericii erau conștiinți de rolul lor de apărători ai identității naționale.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 2 — Mitropolitul Grigorie Dascălul (1823–1834)",
    children: [
      {
        type: "key-idea",
        text: "Grigorie Dascălul a adus în Valahia tradiția filocalică a Mănăstirii Neamț și a lui Paisie Velicicovski, devenind cel mai important traducător de literatură patristică din spațiul românesc al epocii sale.",
      },
      {
        type: "definition",
        term: "Grigorie Dascălul (cca 1765–1834)",
        text: "Mitropolit al Ungrovlahiei, ucenic al Sf. Paisie Velicicovski, traducător al Filocaliei, canonizat de BOR ca «Sfântul Ierarh Grigorie Dascălul».",
      },
      {
        type: "paragraph",
        text: "Născut la București circa 1765, Grigorie și-a petrecut anii de formare ca monah la Mănăstirea Neamț, devenind ucenicul spiritual al Sfântului Paisie Velicicovski — marele reformator al monahismului ortodox din spațiul românesc. Această filiație duhovnicească a marcat profund întreaga sa activitate: Grigorie Dascălul a adus în scaunul mitropolitan al Ungrovlahiei (1823–1834) spiritul patristic și filocalic al tradiției nemțene. A dedicat ani întregi traducerii și publicării de scrieri patristice, punând în circulație în limba română volume din Filocalie și alte texte ale Sfinților Părinți.",
      },
      {
        type: "paragraph",
        text: "Ca mitropolit, Grigorie Dascălul a reorganizat școlile bisericești și a tipărit cărți liturgice necesare bunei desfășurări a slujbelor. A opus rezistență hotărâtă secularizării averilor mănăstirești, apărând patrimoniul Bisericii față de tendințele modernizatoare cu accente anticlericale ale epocii. Autoritățile Regulamentelor Organice, supărate de opoziția sa, l-au exilat de două ori. A inițiat și primele tentative de periodice religioase, anticipând presa bisericească sistematică. Canonizarea sa de către BOR ca «Sfântul Ierarh Grigorie Dascălul» recunoaște atât sfințenia vieții sale personale, cât și valoarea excepțională a contribuției sale la cultura teologică românească.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 3 — Regulamentele Organice",
    children: [
      {
        type: "key-idea",
        text: "Regulamentele Organice, impuse de ruși în 1831 (Valahia) și 1832 (Moldova), au reprezentat primul cadru constituțional modern al Principatelor, dar au adus și o interferență semnificativă în treburile Bisericii, subordonând-o mai mult controlului statal.",
      },
      {
        type: "definition",
        term: "Regulamentele Organice",
        text: "Acte constituționale impuse de Imperiul Rus în Valahia (1831) și Moldova (1832) în urma ocupației militare, în contextul suzeranității otomane și protectoratului rusesc.",
      },
      {
        type: "paragraph",
        text: "Contextul politic era complex: Principatele Române se aflau sub suzeranitate otomană, dar, în urma războaielor ruso-turce și a tratatului de la Adrianopol (1829), Rusia exercita un puternic protectorat. Regulamentele Organice au fost redactate sub supravegherea generalului rus Pavel Kiseleff și au introdus principii moderne de organizare administrativă, dar cu prețul autonomiei Bisericii.",
      },
      {
        type: "paragraph",
        text: "Pe plan bisericesc, efectele au fost ambivalente. Pe de o parte, numirea clericilor a trecut parțial sub controlul autorităților laice; tribunalele civile au primit competențe în judecarea cauzelor clerului; preoții au primit funcții de registru civil (botezuri, căsătorii, decese). Pe de altă parte, suportul financiar pentru cler a fost redus și sistematizat printr-un mecanism complex de dijmă. Câteva școli sătești au fost înțiintate, dar sub control exclusiv de stat. Mitropoliții ortodocși — Veniamin Costachi în Moldova și Grigorie Dascălul în Valahia — au rezistat cu fermitate, cel din urmă plătind cu exilul această opoziție.",
      },
      {
        type: "observation",
        text: "Regulamentele Organice au introdus modernizarea administrativă, dar și premisele conflictului stat–Biserică ce va caracteriza întreaga perioadă a lui Cuza și dincolo de ea.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 4 — Mitropolitul Andrei Șaguna (1864–1873)",
    children: [
      {
        type: "key-idea",
        text: "Andrei Șaguna a restaurat Mitropolia Ortodoxă a Transilvaniei după secole de subordonare față de ierarhia sârbă și a creat Statutul Organic — un model unic de democrație ecleziastică ce a influențat întreaga organizare a BOR după 1918.",
      },
      {
        type: "definition",
        term: "Andrei Șaguna (1809–1873)",
        text: "Episcop, apoi mitropolit ortodox al Transilvaniei, om de cultură, luptător pentru drepturile naționale ale românilor, canonizat de BOR.",
      },
      {
        type: "paragraph",
        text: "Născut în 1809 la Mișcolț (Ungaria), din familie aromână/macedoromână, Andrei Șaguna a studiat la Vârșeț și a îmbrăcat haina monahală, urcând rapid în ierarhia Mitropoliei Sârbești de Carloviț, sub care se afla atunci Ortodoxia transilvăneană. Numit episcop al Sibiului în 1848, s-a implicat activ în evenimentele revoluționare, susținând drepturile românilor față de autoritățile maghiare. După ani de luptă diplomatică la Viena, a reușit în 1864 să obțină restaurarea Mitropoliei Ortodoxe Române a Transilvaniei — un act de importanță istorică fundamentală pentru identitatea națională și religioasă a românilor transilvăneni.",
      },
      {
        type: "paragraph",
        text: "Contribuțiile sale culturale sunt la fel de impresionante: a fondat în 1853 ziarul «Telegraful Român» (care apare neîntrerupt până astăzi — cea mai veche publicație românească în continuitate), a creat școli teologice și gimnazii, a publicat «Compendiu de drept canonic» și alte lucrări teologice. Statutul Organic (1868) rămâne capodopera sa organizatorică: un document care prevedea reprezentarea laicilor în congresele și sinoadele Bisericii, creând un model de sinodalitate extinsă apreciat în întreaga lume ortodoxă. Canonizat de BOR, Andrei Șaguna este venerat ca unul dintre sfinții cei mai reprezentativi ai Ortodoxiei românești.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 5 — Episcopul Chesarie al Buzăului (1825–1846)",
    children: [
      {
        type: "key-idea",
        text: "Chesarie al Buzăului a transformat episcopia sa într-un centru cultural și educațional de primă importanță pentru Valahia de sud-est, fondând școli, tipografie și instituții de formare artistică.",
      },
      {
        type: "paragraph",
        text: "Episcop al Buzăului în perioada 1825–1846, Chesarie (cca 1784–1846) a fost unul dintre cei mai activi ierarhi ai Bisericii valahe din prima jumătate a secolului al XIX-lea. A fondat prima școală din Buzău în 1836, punând bazele instrucției publice în regiune, și a înființat Seminarul de Buzău pentru formarea clericilor. Conștient că frumusețea liturgică are nevoie de muzicieni și pictori bine pregătiți, a creat școli de muzică sacră (psaltichie) și de pictură bisericească (iconografie).",
      },
      {
        type: "paragraph",
        text: "Tipografia Episcopiei Buzăului, întemeiată tot de Chesarie, a produs cărți liturgice și educaționale esențiale pentru viața Bisericii locale. Activitatea sa multilaterală — pastorală, culturală, educațională și tipografică — a transformat Buzăul dintr-o reședință episcopală modestă într-un centru viu al culturii ecleziastice românești.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 6 — Alexandru Ioan Cuza și reformele sale bisericești",
    children: [
      {
        type: "key-idea",
        text: "Reformele lui Cuza au modernizat radical raportul stat–Biserică în România, secularizând averile mănăstirești și subordonând instituția ecleziastică autorității laice, provocând tensiuni profunde dar și transformări ireversibile.",
      },
      {
        type: "definition",
        term: "Secularizarea averilor mănăstirești (1863)",
        text: "Actul prin care statul român a confiscat bunurile imobile ale mănăstirilor (circa 25% din suprafața agricolă a țării), în special ale mănăstirilor «închinate» (aflate sub controlul unor mănăstiri grecești).",
      },
      {
        type: "paragraph",
        text: "Alexandru Ioan Cuza, ales domn al Principatelor Unite în 1859, a promovat un program de modernizare inspirat din modelele occidentale laice. Secularizarea averilor mănăstirești (1863) a fost actul cel mai controversat: circa un sfert din pământul românesc, administrat de mănăstiri, a trecut în proprietatea statului. Reforma a lovit mai ales în mănăstirile «închinate» — metochii aflate sub controlul administrativ al unor mari mănăstiri de la Muntele Athos, Ierusalim sau Sinai, care trimiteau veniturile în afara țării.",
      },
      {
        type: "paragraph",
        text: "Reformele școlare au scos educația de sub tutela Bisericii, întemeiind rețeaua de școli laice de stat. Legea Sinodului Organic (1864) a creat un sinod controlat de stat, subordonând formal conducerea Bisericii puterii executive. Mitropolitul Sofronie Miclescu al Moldovei, care s-a opus, a fost expulzat. Aceste reforme au creat premisele pentru o tensiune structurală între stat și Biserică, dar au și accelerat procesul de modernizare a societății românești.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 7 — Recunoașterea Autocefaliei (25 aprilie 1885)",
    children: [
      {
        type: "key-idea",
        text: "Recunoașterea autocefaliei BOR de către Patriarhia Ecumenică în 1885 a încheiat o perioadă de tensiuni diplomatice de două decenii și a consacrat independența canonică a Bisericii Ortodoxe Române.",
      },
      {
        type: "definition",
        term: "Autocefalie",
        text: "Dreptul unei Biserici Ortodoxe de a-și alege singură conducătorul suprem, fără a depinde de o altă patriarhie. BOR a proclamat autocefalia de facto în 1865, dar recunoașterea canonică a venit abia în 1885.",
      },
      {
        type: "paragraph",
        text: "Reformele lui Cuza din 1864–1865, deși contestate de Patriarhia Ecumenică, au pus de facto BOR pe o cale de independență. Legea organică din 1872 a reorganizat structura Bisericii cu un Sinod permanent. Negocierile diplomatice cu Constantinopolul au fost anevoioase: Patriarhia Ecumenică considera că nu poate recunoaște o autocefalie proclamată unilateral fără acordul ei prealabil. Statul român și ierarhii Bisericii au insistat cu diplomație.",
      },
      {
        type: "paragraph",
        text: "La 25 aprilie 1885, Patriarhul Ecumenic Ioachim IV a semnat Tomosul de recunoaștere a autocefaliei Bisericii Ortodoxe Române. Mitropolitul Calinic Miclescu al Ungrovlahiei a devenit primul cap al Bisericii autocefale române. Evenimentul a marcat un moment de maturitate canonică pentru BOR, recunoscută acum ca egală în demnitate cu celelalte Biserici Ortodoxe autocefale.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 8 — Episcopul Sfântul Calinic al Râmnicului (1850–1868)",
    children: [
      {
        type: "key-idea",
        text: "Sfântul Calinic al Râmnicului este primul episcop român modern canonizat ca sfânt (1955), un ierarh care a îmbinat rigurozitatea administrativă cu sfințenia personală și cu darul minunilor.",
      },
      {
        type: "definition",
        term: "Sfântul Calinic al Râmnicului (1787–1868)",
        text: "Monah la Cernica, stareț, episcop al Râmnicului, canonizat de BOR în 1955, prăznuit pe 11 octombrie.",
      },
      {
        type: "paragraph",
        text: "Calinic s-a născut în 1787 și și-a petrecut tinerețea ca monah la Mănăstirea Cernica, unde a ajuns și stareț, transformând-o într-un important centru duhovnicesc. Numit episcop al Râmnicului (Vâlcea) în 1850, a condus această eparhie până în 1868, lăsând o moștenire tipografică semnificativă: tipografia Râmnicului, cu o tradiție multiseculară, a produs sub îndrumarea sa numeroase cărți liturgice și de evlavie.",
      },
      {
        type: "paragraph",
        text: "Ceea ce l-a diferențiat pe Calinic de contemporanii săi a fost sfințenia personală: simplitatea și smerenia, milostenia față de săraci, și mai ales darul vindecarilor miraculoase, atestate în timpul vieții sale și după moarte. Canonizat în 1955 de BOR — cu ocazia primei mari canonizări în masă a sfinților români din epoca modernă —, Sfântul Calinic al Râmnicului este cel mai venerat ierarh al Ortodoxiei românești din secolul al XIX-lea.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 9 — Episcopul Dionisie Romano al Buzăului (1859–1864)",
    children: [
      {
        type: "key-idea",
        text: "Dionisie Romano este fondatorul primei prese bisericești românești, pionier al jurnalismului ecleziastic din România, și un ierarh cu contribuții semnificative la educație și publicarea de texte patristice.",
      },
      {
        type: "paragraph",
        text: "Dionisie Romano (cca 1806–1873) a avut mai multe perioade de slujire ca episcop al Buzăului. A fost un om al cărții și al educației: a susținut întemeierea școlilor și a publicat traduceri din textele patristice, materiale educaționale și catehisme. A slujit și ca mitropolit al Ungrovlahiei pentru o scurtă perioadă.",
      },
      {
        type: "paragraph",
        text: "Contribuția sa cea mai originală rămâne fondarea «Vestitorului Bisericesc» — primul ziar/periodic de informație religioasă din istoria Ortodoxiei românești. Prin această inițiativă, Dionisie Romano a pus bazele presei bisericești românești, înțelegând că era modernă cere ca instituția ecleziastică să comunice cu credincioșii și cu societatea și prin mijloacele specifice ale epocii tipografice.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 10 — Episcopul Melchisedec Ștefănescu al Romanului (1879–1892)",
    children: [
      {
        type: "key-idea",
        text: "Melchisedec Ștefănescu a fost deopotrivă ierarh și savant, îmbinând pastoral cu cercetarea istorică și teologică de cel mai înalt nivel, recunoscută prin membership-ul în Academia Română.",
      },
      {
        type: "paragraph",
        text: "Melchisedec Ștefănescu (1823–1892), episcop al Romanului din 1879 până la moartea sa în 1892, a reprezentat tipul rar al ierarhului-cărturar. A publicat manuale teologice utilizate sistematic în seminarii și a scris cronici istorice de referință: «Chronica Hușilor» și «Chronica Romanului» rămân și azi surse importante pentru istoria Bisericii Române.",
      },
      {
        type: "paragraph",
        text: "S-a implicat activ în mișcările culturale și patriotice ale epocii, participând la dezbaterile majore din Sfântul Sinod și influențând decizii privind organizarea Bisericii. Calitatea cercetărilor sale a dus la alegerea sa ca Membru al Academiei Române — o recunoaștere a contribuției sale la cultura națională ce depășea granițele teologiei.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 11 — Mitropolitul Iosif Naniescu (1875–1902)",
    children: [
      {
        type: "key-idea",
        text: "Iosif Naniescu, unul dintre cei mai longevivi mitropoliți ai Moldovei, a marcat viața Iașului prin construirea Catedralei Mitropolitane și prin introducerea corului mixt în liturghia ortodoxă românească.",
      },
      {
        type: "paragraph",
        text: "Iosif Naniescu (1820–1902) a condus Mitropolia Moldovei vreme de 27 de ani (1875–1902), unul dintre cele mai lungi mandate mitropolitane din istoria BOR. Domnia sa a lăsat urmele materiale cele mai vizibile: Catedrala Mitropolitană din Iași a fost finalizată în cursul mandatului său, devenind cel mai reprezentativ monument ecleziac al Moldovei.",
      },
      {
        type: "paragraph",
        text: "Pe plan liturgic, Naniescu a introdus corul mixt (cu voci bărbătești și feminine) — o inovație care a stârnit inițial discuții, dar care s-a impus în practica liturgică românească. A fondat o revistă teologică periodică și a susținut financiar, prin donații generoase, proiectele culturale ale Academiei Române. Zelul său pastoral și patronajul cultural au făcut din Naniescu una dintre figurile emblematice ale Ortodoxiei moldovene de la sfârșitul secolului al XIX-lea.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 12 — Biserica Ortodoxă după 1918",
    children: [
      {
        type: "key-idea",
        text: "Marea Unire din 1918 a adus în fața BOR provocarea unificării mai multor structuri ecleziastice cu tradiții diferite, rezolvată prin Legea BOR din 1925 care a instituit Patriarhia Română.",
      },
      {
        type: "definition",
        term: "Patriarhia Română",
        text: "Formă de organizare superioară a BOR, instituită prin Legea din 1925, care a unit sub o singură structură canonică toate eparhiile ortodoxe române din România Mare.",
      },
      {
        type: "paragraph",
        text: "1918 a adus o România triplată ca teritoriu și populație, dar și o Biserică mult mai complexă: Ortodoxia din Regatul Vechi cu tradițiile sale, Ortodoxia transilvăneană organizată după Statutul Organic al lui Șaguna, eparhiile din Bucovina cu influențe austriece, și cele din Basarabia cu tradiție rusă. Armonizarea acestor structuri a necesitat negocieri și o lege specială.",
      },
      {
        type: "paragraph",
        text: "Legea BOR din 1925 a unificat toate eparhiile ortodoxe române, ridicând Biserica la rangul de Patriarhie și alegând pe Miron Cristea ca prim Patriarh. Concordatul cu Vaticanul (1929) a reglementat statutul Bisericii Greco-Catolice și al celei Romano-Catolice. Legea Cultelor a stabilit cadrul general pentru toate comunitățile religioase. Rămâneau nesoluționate tensiunile cu Biserica Greco-Catolică din Transilvania și cu bisericile minorităților naționale.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 13 — Patriarhul Miron Cristea (1925–1939)",
    children: [
      {
        type: "key-idea",
        text: "Miron Cristea a fost primul Patriarh al României, dar și o personalitate cu roluri politice excepționale: Regent al României și Prim-ministru — un caz unic în istoria BOR.",
      },
      {
        type: "definition",
        term: "Patriarhul Miron Cristea (1868–1939)",
        text: "Primul Patriarh al României (1925), Regent (1927–1930, 1939) și Prim-ministru (1938–1939), personalitate de prim-plan a vieții publice românești interbelice.",
      },
      {
        type: "paragraph",
        text: "Născut în 1868 la Toplița (Transilvania), Miron Cristea a studiat teologia la Budapesta și Sibiu, devenind unul dintre reprezentanții de seamă ai Ortodoxiei transilvănene. A fost episcop de Caransebeș (1910–1919) și, după Marea Unire, mitropolit al Ungrovlahiei (1919–1925). Când s-a instituit Patriarhia Română prin Legea BOR din 1925, Miron Cristea a fost ales în unanimitate ca prim Patriarh al României.",
      },
      {
        type: "paragraph",
        text: "Rolurile sale politice l-au distins față de toți ceilalți patriarhi: a fost Regent al României în două rânduri (1927–1930 și 1939) în timpul minoratului regelui Mihai, și Prim-ministru în timpul dictaturii regale a lui Carol al II-lea (februarie 1938 – martie 1939). A decedat în funcție la Cannes, în Franța, în 1939. Aceste implicări în viața politică au generat și controverse, dar reflectă importanța pe care statul român o acorda instituției patriarhale.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 14 — Patriarhul Nicodim Munteanu (1939–1948)",
    children: [
      {
        type: "key-idea",
        text: "Nicodim Munteanu a lăsat ca moștenire principală Biblia din 1944 — cea mai importantă traducere completă a Sfintei Scripturi în română din secolul al XX-lea.",
      },
      {
        type: "paragraph",
        text: "Nicodim Munteanu (1864–1948) s-a format la Academia Teologică din Kiev, dobândind o solidă cultură patristică. Monah râvnitor și traducător prolific, a ajuns Patriarh în 1939, după moartea lui Miron Cristea. Pontificatul său a coincis cu anii celui de-al Doilea Război Mondial — o perioadă de grele încercări pentru România și pentru Biserică.",
      },
      {
        type: "paragraph",
        text: "Cea mai importantă realizare a sa rămâne publicarea în 1944 a traducerii complete a Bibliei în română — Biblia lui Nicodim —, o lucrare de referință care a fixat un standard al limbii biblice românești. A decedat în 1948, tocmai când regimul comunist își consolida puterea și se pregătea să transforme radical relația sa cu Biserica.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 15 — Mitropolitul Irineu Mihalcescu (1939–1947)",
    children: [
      {
        type: "key-idea",
        text: "Irineu Mihalcescu a fost cel mai prolific scriitor teologic al Ortodoxiei românești din prima jumătate a secolului al XX-lea, cu peste 540 de titluri publicate.",
      },
      {
        type: "paragraph",
        text: "Irineu Mihalcescu (1874–1947) a urmat o carieră academică strălucită la Facultatea de Teologie din Iași, devenind profesor de referință în domeniul teologiei dogmatice și simbolice. A publicat un număr impresionant de lucrări — peste 540 de titluri —, incluzând manuale teologice, studii de apologetică, traduceri și articole.",
      },
      {
        type: "paragraph",
        text: "Opera sa principală, «Teologia dogmatică și simbolică», a constituit timp de decenii manualul de referință pentru studenții teologi din Moldova. Ca Mitropolit al Moldovei (1939–1947), a reprezentat continuitatea tradiției teologice academice ieșene. Irineu Mihalcescu ilustrează tipul de ierarh-savant care face din producția intelectuală una dintre formele principale ale slujirii ecleziastice.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 16 — Mitropolitul Nicolae Bălan (1920–1955)",
    children: [
      {
        type: "key-idea",
        text: "Nicolae Bălan a consolidat identitatea ortodoxă a Transilvaniei după 1918, impunând tradiția Șaguna, luptând împotriva Concordatului cu Vaticanul și revitalizând viața monahală prin restaurarea Mănăstirii Sâmbăta de Sus.",
      },
      {
        type: "paragraph",
        text: "Născut în 1882 la Blaj — centru al culturii române transilvănene greco-catolice —, Nicolae Bălan a ales calea Ortodoxiei și a devenit Mitropolit al Transilvaniei în 1920, imediat după Marea Unire. A condus această mitropolitie vreme de 35 de ani, până în 1955.",
      },
      {
        type: "paragraph",
        text: "A impus Statutul Organic al lui Șaguna ca bază a organizării Bisericii transilvănene în noua realitate a României Mari. A combătut cu energie Concordatul cu Vaticanul în Senatul României, apărând interesele ortodoxe față de avantajele acordate catolicilor. A restaurat Mănăstirea Sâmbăta de Sus, transformând-o în centrul spiritual și cultural al Ortodoxiei transilvănene. A condus Biserica prin crize politice majore — regimul antonescian, al Doilea Război Mondial și instaurarea comunismului.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 17 — Patriarhul Justinian Marina (1948–1977)",
    children: [
      {
        type: "key-idea",
        text: "Justinian Marina a condus BOR timp de aproape trei decenii sub regimul comunist, inventând conceptul de «apostolat social» pentru a justifica angajamentul Bisericii în noua ordine politică și reușind să mențină activitatea ecleziastică în condiții extrem de dificile.",
      },
      {
        type: "definition",
        term: "Apostolat social",
        text: "Concept teologic-pastoral introdus de Justinian Marina, care punea accent pe dimensiunea socială a misiunii Bisericii — muncă, solidaritate, angajament față de societate —, adaptat ideologic la discursul comunist.",
      },
      {
        type: "paragraph",
        text: "Justinian Marina (1901–1977) a fost ales Patriarh în 1948, chiar când regimul comunist se consolida și redefinea radical relația sa cu instituțiile religioase. Pontificatul său de 29 de ani rămâne cel mai lung din istoria BOR. Prin conceptul de «apostolat social», a căutat să găsească un modus vivendi între Biserică și stat, prezentând angajamentul Bisericii în societate drept compatibil cu idealurile socialiste.",
      },
      {
        type: "paragraph",
        text: "A supravegheat dizolvarea forțată a Bisericii Greco-Catolice (1948) și reintegrarea credincioșilor ei în Ortodoxie — un act controversat, impus de regimul comunist și primit cu rezistență de greco-catolici. Noul Statut din 1948 a reorganizat BOR sub presiune politică. A inițiat primele mari canonizări de sfinți români (1955), incluzând pe Sfântul Calinic al Râmnicului. A înțiintat mănăstiri de maici cu activități artistice și culturale, creând spații de rezistență culturală subtilă sub comunism.",
      },
      {
        type: "observation",
        text: "Evaluarea lui Justinian Marina rămâne complexă: a făcut compromisuri cu puterea comunistă, dar a reușit să mențină structura și activitatea Bisericii, salvând ceea ce se putea salva în circumstanțe extraordinar de dificile.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 18 — Patriarhul Justin Moisescu (1977–1986)",
    children: [
      {
        type: "key-idea",
        text: "Justin Moisescu a inițiat colecția PSB (Părinți și Scriitori Bisericești) — unul dintre cele mai ambițioase proiecte de traducere patristică din întreaga Ortodoxie, o moștenire culturală de neprețuit pentru teologia românească.",
      },
      {
        type: "definition",
        term: "PSB (Părinți și Scriitori Bisericești)",
        text: "Colecție monumentală de traduceri în română a scrierilor Sfinților Părinți și scriitorilor patristici, inițiată de Patriarhul Justin Moisescu, care numără zeci de volume.",
      },
      {
        type: "paragraph",
        text: "Justin Moisescu (1910–1986) a urmat studii doctorale la Atena și Strasbourg, devenind un teolog cu anvergură internațională. A predat la facultăți de teologie și a publicat lucrări academice de referință înainte de a urca treptele ierarhiei. A fost ales Patriarh în 1977, după moartea lui Justinian Marina.",
      },
      {
        type: "paragraph",
        text: "Realizarea sa cea mai durabilă este inițierea și coordonarea colecției PSB: o serie de volume ce traduc în română corpusul patristic esențial, de la Apologeți la Părinții capadocieni și dincolo. Proiectul a mobilizat generații de teologi și filologi, producând o bibliotecă patristică în limba română comparabilă cu cele mai mari colecții din Occidentul creștin. A continuat să navigheze relațiile dintre Biserică și regimul Ceaușescu, menținând echilibrul fragil moștenit de la Justinian.",
      },
    ],
  },
  {
    type: "chapter",
    title: "Tema 19 — Patriarhul Teoctist Arăpașu (1986–2007)",
    children: [
      {
        type: "key-idea",
        text: "Teoctist Arăpașu a condus BOR prin transformările istorice de la căderea comunismului, a canonizat zeci de sfinți și a primit primul papă catolic vreodată în vizită într-o țară cu majoritate ortodoxă.",
      },
      {
        type: "definition",
        term: "Patriarhul Teoctist Arăpașu (1915–2007)",
        text: "Patriarh al României 1986–2007, cu un episcopat total de 57 de ani — unul dintre cele mai lungi din istoria ortodoxă mondială.",
      },
      {
        type: "paragraph",
        text: "Teoctist Arăpașu (1915–2007) s-a dedicat vieții monahale de la o vârstă fragedă, parcurgând treptele ierarhice ale BOR vreme de decenii. Ales Patriarh în 1986, a trăit și condus Biserica prin căderea regimului Ceaușescu în decembrie 1989 — un moment care i-a provocat o scurtă demisie (el fusese asociat cu binecuvântarea regimului), urmată de revenire și de un lung pontificat.",
      },
      {
        type: "paragraph",
        text: "Sub conducerea sa, BOR a organizat în 1992 una dintre cele mai mari sinaxe de canonizări din istoria sa, recunoscând sfinți din toate epocile istoriei românești. A reorganizat administrativ eparhiile, adaptând structura BOR la noile realități post-comuniste. Momentul de maximă vizibilitate internațională a pontificatului său a fost vizita Papei Ioan Paul al II-lea în România în 1999 — prima vizită papală vreodată într-o țară cu majoritate ortodoxă, un semn al noii deschideri ecumenice a BOR.",
      },
      {
        type: "observation",
        text: "Cei 57 de ani de episcopat ai lui Teoctist — un record în istoria ortodoxă contemporană — acoperă practic întreaga perioadă de la instaurarea comunismului până în prima decadă a secolului al XXI-lea, oferind o continuitate instituțională remarcabilă.",
      },
    ],
  },
];

// ─── TEST (50 întrebări) ─────────────────────────────────────────────────────
export const iborTest: TestQuestion[] = [
  // 1 — corect: 0
  {
    intrebare: "Cum era supranumit Mitropolitul Veniamin Costachi pentru contribuțiile sale la cultura Moldovei?",
    variante: [
      "Luminătorul Moldovei",
      "Apostolul Transilvaniei",
      "Ctitorul Valahiei",
      "Părintele Unirii",
    ],
    corect: 0,
  },
  // 2 — corect: 1
  {
    intrebare: "În ce an a fondat Veniamin Costachi Seminarul de la Socola, primul seminar teologic din Moldova?",
    variante: ["1817", "1803", "1831", "1785"],
    corect: 1,
  },
  // 3 — corect: 2
  {
    intrebare: "Grigorie Dascălul a fost ucenicul spiritual al:",
    variante: [
      "Mitropolitului Veniamin Costachi",
      "Episcopului Chesarie al Buzăului",
      "Sfântului Paisie Velicicovski",
      "Patriarhului Atanasie al Alexandriei",
    ],
    corect: 2,
  },
  // 4 — corect: 3
  {
    intrebare: "Cu ce titlu a fost canonizat Mitropolitul Grigorie Dascălul de BOR?",
    variante: [
      "Sfântul Ierarh Grigorie cel Mare",
      "Sfântul Mucenic Grigorie Dascălul",
      "Cuviosul Grigorie de la Neamț",
      "Sfântul Ierarh Grigorie Dascălul",
    ],
    corect: 3,
  },
  // 5 — corect: 0
  {
    intrebare: "Regulamentele Organice au fost introduse în Valahia în anul:",
    variante: ["1831", "1832", "1829", "1848"],
    corect: 0,
  },
  // 6 — corect: 1
  {
    intrebare: "Regulamentele Organice au fost introduse în Moldova în anul:",
    variante: ["1829", "1832", "1831", "1835"],
    corect: 1,
  },
  // 7 — corect: 2
  {
    intrebare: "Ce funcții civile au primit preoții prin Regulamentele Organice?",
    variante: [
      "Administrarea fiscalității locale",
      "Judecarea disputelor funciare",
      "Înregistrarea nașterilor, căsătoriilor și deceselor",
      "Conducerea școlilor primare",
    ],
    corect: 2,
  },
  // 8 — corect: 3
  {
    intrebare: "Andrei Șaguna a restaurat Mitropolia Ortodoxă a Transilvaniei în anul:",
    variante: ["1848", "1853", "1872", "1864"],
    corect: 3,
  },
  // 9 — corect: 0
  {
    intrebare: "Ce ziar a fondat Andrei Șaguna în 1853, care apare neîntrerupt și astăzi?",
    variante: [
      "Telegraful Român",
      "Vestitorul Bisericesc",
      "Tribuna",
      "Gazeta Transilvaniei",
    ],
    corect: 0,
  },
  // 10 — corect: 1
  {
    intrebare: "Statutul Organic al lui Andrei Șaguna, care acorda laicilor reprezentare în administrarea Bisericii, a fost adoptat în anul:",
    variante: ["1864", "1868", "1872", "1875"],
    corect: 1,
  },
  // 11 — corect: 2
  {
    intrebare: "Ce origine etnică/regională aveau înaintașii lui Andrei Șaguna?",
    variante: [
      "Moldoveni",
      "Olteni",
      "Aromâni/Macedoromâni",
      "Transilvăneni din Blaj",
    ],
    corect: 2,
  },
  // 12 — corect: 3
  {
    intrebare: "Episcopul Chesarie al Buzăului a fondat prima școală din Buzău în anul:",
    variante: ["1825", "1830", "1842", "1836"],
    corect: 3,
  },
  // 13 — corect: 0
  {
    intrebare: "Ce tipuri de școli specializate a înființat episcopul Chesarie al Buzăului?",
    variante: [
      "Școli de muzică sacră (psaltichie) și pictură bisericească",
      "Școli de medicină și farmacie",
      "Școli militare și de drept",
      "Școli de matematică și filozofie",
    ],
    corect: 0,
  },
  // 14 — corect: 1
  {
    intrebare: "Secularizarea averilor mănăstirești de către Alexandru Ioan Cuza a avut loc în anul:",
    variante: ["1861", "1863", "1865", "1859"],
    corect: 1,
  },
  // 15 — corect: 2
  {
    intrebare: "Legea Sinodului Organic a lui Cuza (1864) a avut ca efect principal:",
    variante: [
      "Câștigarea autocefaliei BOR",
      "Restaurarea averilor mănăstirești",
      "Subordonarea Bisericii față de controlul statului",
      "Unificarea eparhiilor ortodoxe",
    ],
    corect: 2,
  },
  // 16 — corect: 3
  {
    intrebare: "Ce mitropolit al Moldovei a fost expulzat de Cuza pentru că s-a opus reformelor sale?",
    variante: [
      "Veniamin Costachi",
      "Grigorie Dascălul",
      "Iosif Naniescu",
      "Sofronie Miclescu",
    ],
    corect: 3,
  },
  // 17 — corect: 0
  {
    intrebare: "La ce dată a semnat Patriarhul Ecumenic Ioachim IV Tomosul de recunoaștere a autocefaliei BOR?",
    variante: [
      "25 aprilie 1885",
      "1 decembrie 1918",
      "17 mai 1872",
      "4 octombrie 1925",
    ],
    corect: 0,
  },
  // 18 — corect: 1
  {
    intrebare: "Cine a devenit primul ierarh al Bisericii Ortodoxe Române autocefale după recunoașterea din 1885?",
    variante: [
      "Mitropolitul Sofronie Miclescu",
      "Mitropolitul Calinic Miclescu al Ungrovlahiei",
      "Mitropolitul Iosif Naniescu",
      "Episcopul Melchisedec Ștefănescu",
    ],
    corect: 1,
  },
  // 19 — corect: 2
  {
    intrebare: "Sfântul Calinic al Râmnicului a fost canonizat de BOR în anul:",
    variante: ["1948", "1992", "1955", "1968"],
    corect: 2,
  },
  // 20 — corect: 3
  {
    intrebare: "Sfântul Calinic al Râmnicului a început viața monahală la:",
    variante: [
      "Mănăstirea Neamț",
      "Mănăstirea Slatina",
      "Mănăstirea Sâmbăta de Sus",
      "Mănăstirea Cernica",
    ],
    corect: 3,
  },
  // 21 — corect: 0
  {
    intrebare: "Dionisie Romano este fondatorul primului periodic bisericesc din Ortodoxia Română, care se numea:",
    variante: [
      "Vestitorul Bisericesc",
      "Telegraful Român",
      "Revista Teologică",
      "Luminătorul",
    ],
    corect: 0,
  },
  // 22 — corect: 1
  {
    intrebare: "Episcopul Dionisie Romano al Buzăului a ocupat și funcția de:",
    variante: [
      "Mitropolit al Moldovei",
      "Mitropolit al Ungrovlahiei",
      "Patriarh al României",
      "Episcop de Râmnic",
    ],
    corect: 1,
  },
  // 23 — corect: 2
  {
    intrebare: "Episcopul Melchisedec Ștefănescu al Romanului a fost ales Membru al:",
    variante: [
      "Parlamentului României",
      "Societății Academice Imperiale de la Viena",
      "Academiei Române",
      "Sfântului Sinod Ecumenic",
    ],
    corect: 2,
  },
  // 24 — corect: 3
  {
    intrebare: "Între lucrările istorice ale lui Melchisedec Ștefănescu se numără:",
    variante: [
      "Istoria Imperiului Bizantin",
      "Filocalia română",
      "Compendiu de drept canonic",
      "Chronica Hușilor și Chronica Romanului",
    ],
    corect: 3,
  },
  // 25 — corect: 0
  {
    intrebare: "Mitropolitul Iosif Naniescu a construit în Iași:",
    variante: [
      "Catedrala Mitropolitană",
      "Seminarul Veniamin",
      "Mănăstirea Golia",
      "Palatul Patriarhal",
    ],
    corect: 0,
  },
  // 26 — corect: 1
  {
    intrebare: "Ce inovație liturgică a introdus Iosif Naniescu în cultul ortodox românesc?",
    variante: [
      "Cântarea în greacă",
      "Corul mixt (cu voci bărbătești și feminine)",
      "Folosirea orgii la slujbe",
      "Cântarea monofonică gregoriană",
    ],
    corect: 1,
  },
  // 27 — corect: 2
  {
    intrebare: "Legea BOR care a instituit Patriarhia Română a fost adoptată în anul:",
    variante: ["1918", "1921", "1925", "1929"],
    corect: 2,
  },
  // 28 — corect: 3
  {
    intrebare: "Concordatul cu Vaticanul care reglementa situația Bisericii Greco-Catolice a fost semnat în:",
    variante: ["1918", "1925", "1927", "1929"],
    corect: 3,
  },
  // 29 — corect: 0
  {
    intrebare: "Patriarhul Miron Cristea s-a născut în:",
    variante: ["Toplița (Transilvania)", "Iași (Moldova)", "București (Valahia)", "Sibiu (Transilvania)"],
    corect: 0,
  },
  // 30 — corect: 1
  {
    intrebare: "Miron Cristea a deținut și funcția de Prim-ministru al României în perioda:",
    variante: [
      "1925–1927",
      "1938–1939",
      "1927–1930",
      "1918–1919",
    ],
    corect: 1,
  },
  // 31 — corect: 2
  {
    intrebare: "Patriarhul Nicodim Munteanu s-a format teologic la:",
    variante: [
      "Universitatea din Viena",
      "Facultatea din Iași",
      "Academia Teologică din Kiev",
      "Facultatea din Atena",
    ],
    corect: 2,
  },
  // 32 — corect: 3
  {
    intrebare: "Patriarhul Nicodim Munteanu a publicat traducerea integrală a Bibliei în română în anul:",
    variante: ["1936", "1939", "1941", "1944"],
    corect: 3,
  },
  // 33 — corect: 0
  {
    intrebare: "Câte titluri a publicat Mitropolitul Irineu Mihalcescu de-a lungul activității sale?",
    variante: ["Peste 540", "Circa 200", "Aproximativ 120", "Mai mult de 1.000"],
    corect: 0,
  },
  // 34 — corect: 1
  {
    intrebare: "Opera principală a lui Irineu Mihalcescu este:",
    variante: [
      "Chronica Romanului",
      "Teologia dogmatică și simbolică",
      "Compendiu de drept canonic",
      "Filocalia română",
    ],
    corect: 1,
  },
  // 35 — corect: 2
  {
    intrebare: "Mitropolitul Nicolae Bălan s-a născut la:",
    variante: ["Sibiu", "Toplița", "Blaj", "Sâmbăta de Sus"],
    corect: 2,
  },
  // 36 — corect: 3
  {
    intrebare: "Ce mănăstire a refăcut Nicolae Bălan, transformând-o în centrul spiritual al Transilvaniei?",
    variante: [
      "Mănăstirea Neamț",
      "Mănăstirea Cernica",
      "Mănăstirea Prislop",
      "Mănăstirea Sâmbăta de Sus",
    ],
    corect: 3,
  },
  // 37 — corect: 0
  {
    intrebare: "Ce concept nou a introdus Patriarhul Justinian Marina pentru a descrie misiunea socială a Bisericii sub comunism?",
    variante: [
      "Apostolat social",
      "Misiune națională",
      "Angajament civic",
      "Socialism creștin",
    ],
    corect: 0,
  },
  // 38 — corect: 1
  {
    intrebare: "Justinian Marina a condus BOR ca patriarh vreme de:",
    variante: [
      "21 de ani",
      "29 de ani",
      "15 ani",
      "35 de ani",
    ],
    corect: 1,
  },
  // 39 — corect: 2
  {
    intrebare: "Prima mare canonizare sistematică a sfinților români, inițiată de Justinian Marina, a avut loc în anul:",
    variante: ["1948", "1952", "1955", "1968"],
    corect: 2,
  },
  // 40 — corect: 3
  {
    intrebare: "Ce s-a întâmplat cu Biserica Greco-Catolică din România în timpul patriarhiei lui Justinian Marina (1948)?",
    variante: [
      "A obținut statut de egalitate cu BOR",
      "A fuzionat voluntar cu BOR",
      "A fost mutată în exil în Occident",
      "A fost dizolvată forțat și credincioșii reintegrați în Ortodoxie",
    ],
    corect: 3,
  },
  // 41 — corect: 0
  {
    intrebare: "Ce colecție majoră de traduceri patristice a inițiat Patriarhul Justin Moisescu?",
    variante: [
      "Colecția PSB (Părinți și Scriitori Bisericești)",
      "Filocalia română",
      "Colecția Clasicilor Teologiei Române",
      "Corpus Patristicum Romanicum",
    ],
    corect: 0,
  },
  // 42 — corect: 1
  {
    intrebare: "Justin Moisescu și-a obținut doctoratul în teologie la:",
    variante: [
      "Kiev și Moscova",
      "Atena și Strasbourg",
      "Paris și Londra",
      "Viena și Praga",
    ],
    corect: 1,
  },
  // 43 — corect: 2
  {
    intrebare: "Câți ani de episcopat a acumulat în total Patriarhul Teoctist Arăpașu?",
    variante: ["43 de ani", "51 de ani", "57 de ani", "62 de ani"],
    corect: 2,
  },
  // 44 — corect: 3
  {
    intrebare: "Ce personalitate istorică mondială l-a vizitat pe Patriarhul Teoctist în România în 1999?",
    variante: [
      "Arhiepiscopul de Canterbury",
      "Patriarhul Ecumenic Bartolomeu",
      "Dalai Lama",
      "Papa Ioan Paul al II-lea",
    ],
    corect: 3,
  },
  // 45 — corect: 0
  {
    intrebare: "Veniamin Costachi a tradus Noul Testament în română în anul:",
    variante: ["1817", "1803", "1831", "1810"],
    corect: 0,
  },
  // 46 — corect: 1
  {
    intrebare: "Veniamin Costachi a demisionat de două ori din scaunul mitropolitan pentru a:",
    variante: [
      "Se retrage la Mănăstirea Slatina în liniște",
      "Nu accepta reformele impuse de ocupanții ruși",
      "Protesta față de secularizarea averilor mănăstirești",
      "Refuza subordonarea față de Patriarhia Ecumenică",
    ],
    corect: 1,
  },
  // 47 — corect: 2
  {
    intrebare: "Mitropolitul Grigorie Dascălul a tradus și publicat în principal scrieri din tradția:",
    variante: [
      "Latină (Părinți apuseni)",
      "Slavă (Mineie și Trioduri)",
      "Greacă patristică (Filocalie și Părinți Răsăriteni)",
      "Siriacă (Efrem Sirul)",
    ],
    corect: 2,
  },
  // 48 — corect: 3
  {
    intrebare: "Episcopul Chesarie al Buzăului a înfințat o tipografie episcopală la:",
    variante: ["Iași", "Sibiu", "Râmnic", "Buzău"],
    corect: 3,
  },
  // 49 — corect: 0
  {
    intrebare: "Andrei Șaguna a publicat un compendiu de:",
    variante: [
      "Drept canonic",
      "Teologie dogmatică",
      "Teologie morală",
      "Liturgică ortodoxă",
    ],
    corect: 0,
  },
  // 50 — corect: 1
  {
    intrebare: "Vizita Papei Ioan Paul al II-lea în România (1999) a fost remarcabilă deoarece:",
    variante: [
      "A semnat un act de unire între catolicii și ortodocșii români",
      "A fost prima vizită papală vreodată într-o țară cu majoritate ortodoxă",
      "A dus la restabilirea Bisericii Greco-Catolice în România",
      "A marcat intrarea României în Uniunea Europeană",
    ],
    corect: 1,
  },
];
