import Layout from '../components/layout';
import Link from 'next/link'

import Footer from '../components/footer/footer';

const Frauenrechte = () => {
  return (
    <div className="h-screen font-Montserrat flex flex-col">
      <main className="flex-1">
      <h1 className="md:text-6xl text-3xl font-bold text-center">Ihre Rechte <br></br>als Migrantinnen in Deutschland</h1>
      <p  className="md:text-3xl text-1xl font-bold text-center mt-4 mb-4 text-violet">Überblick über das Thema</p>
      <p className="md:text-base text-sm">
        Frauenrechte und Gleichstellung waren schon immer eines der 
        wichtigsten Themen hier in Deutschland. Das Land setzt sich dafür ein, deine Rechte als Frau zu 
        fördern und zu verteidigen und jegliche Form von Diskriminierung und Gewalt gegen Frauen zu 
        bekämpfen. Trotzdem ist es eine Tatsache, dass Diskriminierung gegen Frauen in allen Bereichen 
        existiert. Auch Imigrantinnen können manchmal schnell in eine sozial vulnerable Situation geraten. 
        Deshalb ist es für dich als Imigrantin, die hier in Deutschland lebt, sehr wichtig, deine Rechte zu 
        verstehen und zu wissen, welche Ressourcen dir zur Verfügung stehen. Auf dieser Seite findest du 
        einen Überblick über Frauenrechte in Deutschland.
      </p>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col md:text-start text-center max-h-64">
            <p className="md:text-4xl text-3xl font-bold md:text-start text-center m-3">Rechtlicher Schutz</p>
            <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 scrollbar-none">
              In Deutschland hat sich starke Gesetze, die dich als Frau schützen. 
              Der Grundgesetz stellt sicher, dass alle Menschen, egal welches Geschlecht sie haben, 
              die gleichen Rechte haben. Das bedeutet, dass wir Frauen in vielen Bereichen gleich 
              behandeln, sei es bei der Arbeit, in der Schule oder bei öffentlichen Dienstleistungen. 
              Wir haben Gesetze, die vor Diskriminierung schützen und sicherstellen, 
              dass du als Frau fair behandelt wirst. Zum Beispiel müssen wir dasselbe Gehalt wie Männer 
              bekommen, wir dürfen nicht aufgrund unseres Geschlechts benachteiligt werden und es gibt 
              auch Regelungen für unseren Mutterschaftsurlaub.
            </p>
            </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col md:text-start text-center max-h-64">
            <p className="md:text-4xl text-3xl font-bold md:text-start text-center m-3">Gleichberechtigung</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                In Deutschland setzen wir uns aktiv für die Gleichberechtigung von Frauen und Männern in allen Lebensbereichen 
                ein. Wir ergreifen Maßnahmen, um sicherzustellen, dass du als Frau gleiche Chancen und Vertretung in der Politik, 
                in Führungspositionen und am Arbeitsplatz hast. Wir fördern eine ausgewogene Work-Life-Balance durch flexible 
                Arbeitszeiten, Möglichkeiten für Elternzeit und bezahlbare Kinderbetreuung. Darüber hinaus haben wir Initiativen, 
                die Geschlechterklischees herausfordern und eine geschlechtssensible Sprache fördern, um eine inklusive Umgebung für 
                uns alle zu schaffen.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col md:text-start text-center max-h-64">
            <p className="md:text-4xl text-3xl font-bold md:text-start m-3">Schutz vor Gewalt</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Deutschland nimmt eine klare Haltung in Bezug auf Gewalt gegen Frauen ein. Es gibt Gesetze und Hilfsprogramme, 
                um dich vor häuslicher Gewalt, sexuellem Missbrauch und Belästigung zu schützen. Wenn du dich in einer 
                Situation befindest, in der du Gewalt oder Missbrauch erlebst, ist es wichtig zu wissen, dass Hilfe verfügbar 
                ist. Suche Unterstützung bei örtlichen Frauenhäusern, Beratungsstellen und Notrufnummern. Diese Organisationen 
                bieten dir vertrauliche Unterstützung, Rat und einen sicheren Ort, wenn du schwierige Situationen durchlebst.
              </p>
          </div>
        </div>
        <p  className="md:text-3xl text-1xl font-bold text-center mt-8 mb-4 text-violet">Kontaktinformationen</p>
        <ul className="md:text-base text-sm">
        <li className="my-3">
            <strong>・ Hilfetelefon Gewalt gegen Frauen</strong>
            <br />
              Das Hilfetelefon Gewalt gegen Frauen ist eine Beratungsstelle speziell für Frauen, die Gewalt erfahren oder erfahren haben. Es bietet Unterstützung, Informationen und Beratung zu Fragen im Zusammenhang mit häuslicher Gewalt, sexuellen Gewalttaten und Missbrauch. Der Dienst steht rund um die Uhr zur Verfügung und ist vertraulich.
            <br />
            <strong>Hotline:</strong> 08000 116 016
            <br />
            <strong>Website:</strong> <Link href="https://www.hilfetelefon.de">hilfetelefon.de</Link>
            <br />
            <strong>Sprachen:</strong> Deutsch, Englisch und andere Sprachen durch Dolmetscher
Türkischer Bund in Berlin-Brandenburg (Türkischer Verband in Berlin-Brandenburg)
          </li>
          <li className="my-3">
            <strong>・ Frauenrecht ist Menschenrecht e.V. (FIM)</strong>
            <br />
              Beratung und Unterstützung für Immigrantinnen<br />
            <strong>Hotline:</strong> +49 30 3929888 (Montag bis Freitag, 10 bis 18 Uhr)
            <br />
            <strong>Website:</strong> <Link href="https://www.fim-frauenrecht.de">fim-frauenrecht.de</Link>
            <br />
            <strong>Sprachen:</strong> Deutsch, Englisch, Arabisch und Türkisch
          </li>
          <li className="my-3">
            <strong>・ Nummer gegen Kummer</strong>
            <br />
              Die Nummer gegen Kummer ist eine Beratungsstelle, die sich speziell an Kinder, Jugendliche und deren Eltern wendet. Sie bietet professionelle Beratung und Unterstützung zu einer Reihe von Themen, darunter psychische Gesundheit, Familienprobleme, Mobbing und mehr. Der Dienst ist in mehreren Sprachen verfügbar. 
            <br />
            <strong>Hotline:</strong> 116 111 (für Kinder und Jugendliche)
            <br />
            <strong>Hotline:</strong> 116 123 (für Eltern)
          </li>
          <li className="my-3">
            <strong>・ CHANCE</strong>
            <br />
              家庭内の問題、DV・性暴力などの被害問題の相談
            <br />
            <strong>電話:</strong> 0170-6570130（水14:00-18:00、木・金10:00-14:00）
            <br />
            <strong>ウェブサイト:</strong> <Link href="https://www.frauenberatungsstelle.de/chance/">frauenberatungsstelle.de/chance/</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Frauenrechte;