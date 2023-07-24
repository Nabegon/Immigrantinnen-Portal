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
            <p className="md:text-base text-sm max-h-96 overflow-y-scroll m-3">
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
              <p className="md:text-base text-sm max-h-96 overflow-y-scroll m-3">
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
              <p className="md:text-base text-sm max-h-96 overflow-y-scroll m-3">
                Deutschland nimmt eine klare Haltung in Bezug auf Gewalt gegen Frauen ein. Es gibt Gesetze und Hilfsprogramme, 
                um dich vor häuslicher Gewalt, sexuellem Missbrauch und Belästigung zu schützen. Wenn du dich in einer 
                Situation befindest, in der du Gewalt oder Missbrauch erlebst, ist es wichtig zu wissen, dass Hilfe verfügbar 
                ist. Suche Unterstützung bei örtlichen Frauenhäusern, Beratungsstellen und Notrufnummern. Diese Organisationen 
                bieten dir vertrauliche Unterstützung, Rat und einen sicheren Ort, wenn du schwierige Situationen durchlebst.
              </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Frauenrechte;