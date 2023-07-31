import Layout from '../components/layout';
import Link from 'next/link'

import Footer from '../components/footer/footer';

const JobHilfe = () => {
  return (
    <div className="h-screen font-Montserrat flex flex-col">
      <main className="flex-1">
      <h1 className="md:text-6xl text-3xl font-bold text-center">Möglichkeiten als Migrantinnen, arbeiten zu gehen</h1>
      <p  className="md:text-3xl text-1xl font-bold text-center mt-4 mb-4 text-violet">Überblick über das Thema</p>
      <p className="md:text-base text-sm">
        In Deutschland kann es manchmal eine große Herausforderung sein, wenn du eine Zuwanderin bist und versuchst, einen Job zu 
        finden und eine Karriere aufzubauen. Aber die deutsche Regierung versteht, wie wichtig es ist, Hilfe bei der Jobsuche 
        anzubieten und allen Menschen gleiche Chancen zu geben. Aufgrund eines Mangels an Arbeitskräften, hat Deutschland, 
        die Gesetze stark verändert, um mehr hochqualifizierte und gebildete Menschen von außerhalb der Europäischen Union (EU) 
        aufzunehmen. Es gibt viele Organisationen, Berater und Support-Netzwerke, die dir helfen können. Nutze diese Gelegenheit, 
        suche Rat und nutze die Unterstützungssysteme, um gemeinsam die Herausforderungen bei der Jobsuche zu bewältigen.
      </p>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Bildungssystem</p>
            <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
              In Deutschland gibt es neben formaler Beschäftigung viele andere Möglichkeiten. Dies liegt an einem System, in dem 
              Qualifikationen und Studien direkt mit der Beschäftigung verknüpft sind. Wenn du bereits Arbeitserfahrung in deinem 
              Heimatland hast, kannst du sie nutzen, um einen Job in Deutschland zu finden. Es gibt jedoch auch viele andere Möglichkeiten.
            </p>
            </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Ausbildung</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Die Ausbildung ist ein hoch angesehenes Berufsausbildungsprogramm in Deutschland. Sie kombiniert praktisches Training am Arbeitsplatz 
                mit theoretischem Unterricht und dauert in der Regel zwei bis dreieinhalb Jahre. Diese umfassende Ausbildung vermittelt dir spezifische 
                Fähigkeiten und Kenntnisse für einen bestimmten Beruf. Die Ausbildung wird von Arbeitgebern weitgehend anerkannt und ist eine ausgezeichnete 
                Option, wenn du einen praxisnahen Karriereweg suchst. Wenn du ein Ausländer bist und keine Berufserfahrung hast, ist die Ausbildung eine sehr praktische Möglichkeit.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Umschulung</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Die Umschulung bietet die Möglichkeit, den Beruf zu wechseln oder deine Fähigkeiten zu verbessern. Sie ist besonders vorteilhaft für 
                diejenigen, die bereits Erfahrung in einem Bereich haben, aber einen anderen Karriereweg einschlagen möchten. Die Dauer und der Inhalt 
                der Umschulungsprogramme variieren je nach gewähltem Beruf und den bisherigen Qualifikationen. Durch diese Umschulung kannst du als ausländischer 
                Arbeitssuchender deine Fähigkeiten an die Nachfrage auf dem deutschen Arbeitsmarkt anpassen.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Praktika (Internship)</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Praktika sind wertvoll, um praktische Arbeitserfahrung zu sammeln und einen Einblick in die deutsche Arbeitskultur zu erhalten. Viele Unternehmen 
                in Deutschland bieten Praktika an, die von wenigen Wochen bis zu mehreren Monaten dauern können. Diese Erfahrung verbessert nicht nur deinen Lebenslauf, 
                sondern bietet auch Networking-Möglichkeiten, die zu einer Vollzeitbeschäftigung führen könnten. Beachte jedoch, dass Visabestimmungen, bezahlte oder 
                unbezahlte Arbeit und andere Bedingungen je nach Unternehmen variieren können. Achte daher darauf, den Vertragstyp sorgfältig zu prüfen, wenn du ein Praktikum beginnst.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Universität</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Universitäten in Deutschland sind forschungsorientierte Einrichtungen, die theoretische und akademische Bildung in einer Vielzahl von Fachgebieten bieten. 
                An den Universitäten kannst du Bachelor-, Master- und Doktortitel erwerben und sie sich für diejenigen eignen, die eine Karriere in der Akademie, Forschung 
                oder spezialisierten Berufen mit fundiertem Fachwissen anstreben.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Fachhochschule </p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Fachhochschulen sind praxisorientierte Einrichtungen, die darauf ausgerichtet sind, eine praxisnahe Ausbildung für bestimmte Berufe zu bieten. 
                Sie verbinden theoretisches Lernen mit praktischer Schulung und legen den Schwerpunkt darauf, die Studierenden für den Arbeitsmarkt vorzubereiten. 
                An Fachhochschulen kannst du Bachelor- und Masterabschlüsse erlangen und sie sind ideal für Personen, die direkt mit spezialisierten Fähigkeiten und 
                praktischem Wissen in das Arbeitsleben einsteigen möchten.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Unterschiede zwischen Universität und Fachhochschule</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
              Lehrplan: An Universitäten liegt der Schwerpunkt auf theoretischer und forschungsorientierter Bildung, während Fachhochschulen sich auf praktische Anwendung und Kompetenzentwicklung für spezifische Berufe konzentrieren.
              Unterrichtsstil: Universitäten setzen oft auf Vorlesungen und Seminare, während Fachhochschulen mehr praktische Übungen, Projekte und Praktika einbeziehen.
              Abschlüsse: Beide Einrichtungen bieten Bachelor- und Masterabschlüsse an, aber Universitäten bieten auch Doktorandenprogramme an, die fortgeschrittene Forschung und Spezialisierung ermöglichen.
              Forschungsmöglichkeiten: Universitäten bieten umfangreiche Forschungsmöglichkeiten, während Fachhochschulen stärker auf Zusammenarbeit mit der Industrie und praxisbezogene Projekte ausgerichtet sind.
              Zulassungsvoraussetzungen: Die Zulassungsvoraussetzungen für beide Arten von Hochschulen variieren. Im Allgemeinen können Universitäten strengere Einstiegskriterien haben, einschließlich höherer Noten und Sprachkenntnisprüfungen, während Fachhochschulen praktische Erfahrung und Motivation für das gewählte Fachgebiet priorisieren könnten.
              Numerus Clausus (NC): Einige Universitätsprogramme haben begrenzte Kapazitäten und setzen einen Numerus Clausus fest, der eine Mindestnote für die Zulassung vorschreibt. Fachhochschulenprogramme haben oft flexiblere Zulassungsverfahren.
              Anerkennung: Abschlüsse von Universitäten und Fachhochschulen werden in Deutschland und international gleichermaßen anerkannt und respektiert. Es kann jedoch sein, dass bestimmte Berufe spezifische Anforderungen für den erworbenen Abschluss haben.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Visa und Arbeitserlaubnis</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Es ist wichtig, dass du die Visums- und Arbeitserlaubnisanforderungen für ausländische Arbeitnehmer in Deutschland verstehst. In diesem Thema werden dir die verschiedenen Arten von 
                Arbeitsvisa erklärt, die dir zur Verfügung stehen, das Antragsverfahren wird erläutert, und es wird auf besondere Bedingungen oder Einschränkungen hingewiesen, die für ausländische 
                Arbeitnehmer gelten können. Das Antragsverfahren für ein Arbeitsvisum kann je nach Visumtyp und Herkunftsland unterschiedlich sein. Es ist wichtig, dass du die spezifischen Anforderungen 
                und Unterlagen für deinen Antrag sorgfältig prüfst und frühzeitig mit dem Antragsverfahren beginnst.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Arbeitsvisum </p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Mit diesem Visum kannst du in Deutschland arbeiten und für einen deutschen Arbeitgeber tätig sein. Um ein Arbeitsvisum zu erhalten, brauchst du in der Regel ein Stellenangebot von einem deutschen Unternehmen und musst 
                nachweisen, dass du für die ausgeschriebene Stelle qualifiziert bist oder über einen entsprechenden Hochschulabschluss verfügst.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Blaue Karte EU </p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Die Blaue Karte EU ist ein spezielles Arbeitsvisum für hochqualifizierte Fachkräfte aus Ländern außerhalb der Europäischen Union (EU). 
                Um eine Blaue Karte EU zu erhalten, musst du nachweisen, dass du über einen Hochschulabschluss oder eine vergleichbare Qualifikation verfügst und 
                ein Arbeitsangebot in Deutschland hast, das ein Mindestgehalt erreicht oder übersteigt.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Chancenkarte</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Aufgrund des Fachkräftemangels gibt es jetzt ein neues Visum namens "Chancenkarte". Es basiert auf einem Punktesystem, das verschiedene Faktoren wie Sprachkenntnisse, Berufserfahrung, 
                Alter und Verbindung zu Deutschland berücksichtigt. Mit diesem Visum kannst du nicht nur in bestimmten Berufen arbeiten, sondern es ist auch für verschiedene Berufe wie Handwerk, Bauwesen, 
                Metall- und Maschinenbau, Pflege, medizinische Fachkräfte und Pädagogen verfügbar. Die Chancenkarte bietet eine breitere Palette von Möglichkeiten als bestehende Visa und richtet sich an 
                Personen mit anerkannten Qualifikationen aus dem Heimatland, zwei Jahren Berufserfahrung oder einem verwandten Hochschulabschluss.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start max-h-64">
            <p className="md:text-4xl text-3xl font-bold text-center m-3">Arbeitsagentur</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Die Arbeitsagentur in Deutschland, auch bekannt als Bundesagentur für Arbeit, ist eine öffentliche Einrichtung, die sich mit Beschäftigungsangelegenheiten befasst.  
                Sie bieten Zugang zu Stellenangeboten, individuelle Berufsberatung und Unterstützung bei der Suche nach Jobs in Deutschland. Sie bieten verschiedene arbeitsbezogene 
                Dienstleistungen in ganz Deutschland an, die auch von Ausländern genutzt werden können.

                Zugang zu Stellenangeboten: Die Arbeitsagentur sammelt Stellenangebote aus ganz Deutschland. Über ihre Webseite kannst du als Ausländer Stellenangebote einsehen. Wenn du ihr Büro besuchst, 
                kannst du auch mit Hilfe eines Computers nach Stellenangeboten suchen.

                Berufsberatung: Die Berater und Beraterinnen der Arbeitsagentur stehen für individuelle Berufsberatungsgespräche zur Verfügung. Wenn du als Ausländer Fragen oder Sorgen bezüglich deiner 
                beruflichen Zukunft hast, kannst du dich an sie wenden.

                Übersetzung ins Deutsche: Die Webseite der Arbeitsagentur ist in verschiedenen Sprachen, einschließlich Englisch, verfügbar. Dadurch wird es Ausländern erleichtert, 
                die Informationen auf der Webseite zu verstehen.
              </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobHilfe;