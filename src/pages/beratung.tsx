import Footer from '../components/footer/footer';
import Link from 'next/link'

const Beratung = () => {
  return (
    <div className="h-screen font-Montserrat flex flex-col">
      <main className="flex-1">
        <h1 className="md:text-6xl text-3xl font-bold text-center">Beratungshilfe für Migrantinnen</h1>
        <p  className="md:text-3xl text-1xl font-bold text-center mt-4 mb-4 text-violet">Überblick über das Thema</p>
        <p className="md:text-base text-sm">
          Das Leben im Ausland als Migrantin kann eine aufregende und herausfordernde Erfahrung sein. Es eröffnet zwar 
          neue Möglichkeiten und kulturelle Erfahrungen, bringt aber auch einzigartige Belastungen und emotionale 
          Herausforderungen mit sich. Viele Menschen haben in unterschiedlichem Maße Schwierigkeiten erlebt, 
          die mit dem Leben in einem fremden Land und den möglichen Auswirkungen auf das psychische Wohlbefinden 
          einhergehen. Es ist jedoch wichtig, die Gründe für diese emotionalen Belastungen zu verstehen und zu erkennen, 
          wie wichtig es ist, als Migrantin psychologische Beratung in Anspruch zu nehmen.
        </p>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col md:text-start text-center max-h-64 min-h-64">
            <p className="md:text-4xl text-3xl font-bold md:text-start text-center m-3">Beratungsstellen</p>
            <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
              Es gibt Beratungsstellen und Kliniken in ganz Deutschland, die psychische Unterstützung bieten. Diese Stellen bieten 
              oft eine Vielzahl von Dienstleistungen an, wie zum Beispiel Einzelberatung, Krisenintervention und Selbsthilfegruppen. 
              Sie können sich auf bestimmte Bereiche spezialisieren, wie Trauma, Sucht oder Angststörungen. Wenn du Informationen über 
              öffentliche Beratungsstellen in deiner Stadt erfahren möchtest, suche nach Psychosozialen Beratungsstellen. Dort findest 
              du Informationen über Beratungsstellen und öffentliche Unterstützung im Bereich psychische Gesundheit. Beratungssitzungen 
              in Beratungsstellen sind normalerweise kostenlos oder kostengünstig.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col md:text-start text-center max-h-64 min-h-64">
            <p className="md:text-4xl text-3xl font-bold md:text-start text-center m-3">Krankenhäuser und Kliniken</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Psychotherapie und psychiatrische Krankenhäuser und Kliniken sind zwei wichtige Formen der psychischen Unterstützung in Deutschland.
                
                Bei der Psychotherapie sprichst du mit einer ausgebildeten Fachkraft wie einem Psychologen oder Psychotherapeuten, der dir dabei helfen 
                kann, verschiedene psychische Probleme anzusprechen und zu bewältigen. Sie kann in verschiedenen Formaten angeboten werden, einschließlich 
                Einzeltherapie, Gruppentherapie oder Familientherapie.

                Für Menschen mit schweren psychischen Erkrankungen bieten psychiatrische Krankenhäuser und Kliniken spezialisierte Versorgung und Behandlung an. 
                Diese Einrichtungen verfügen über multidisziplinäre Teams, bestehend aus Psychiatern, Psychologen, Krankenschwestern und anderen Fachkräften im Bereich 
                psychische Gesundheit, die zusammenarbeiten, um psychische Störungen zu beurteilen, zu diagnostizieren und zu behandeln.

                Es ist wichtig zu beachten, dass Psychotherapie in der Regel leichter zugänglich ist, während psychiatrische Krankenhäuser und Kliniken hauptsächlich 
                Menschen mit schweren Erkrankungen behandeln, die eine intensive Betreuung erfordern.

                Wenn du psychotherapeutische Unterstützung oder spezialisierte Behandlung benötigst, wird empfohlen, dich an deinen örtlichen Gesundheitsdienstleister 
                zu wenden oder in Online-Verzeichnissen nach lizenzierten Fachkräften oder Einrichtungen in deiner Nähe zu suchen. Sie können weitere Informationen über 
                die angebotenen Leistungen, die Verfügbarkeit und mögliche mehrsprachige Unterstützung geben. Zusätzlich können Organisationen wie die Deutsche 
                Psychotherapeuten Vereinigung und die Kassenärztliche Vereinigung bei der Suche nach geeigneten Ressourcen für deine spezifischen Bedürfnisse hilfreich sein.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col md:text-start text-center max-h-64">
            <p className="md:text-4xl text-3xl font-bold md:text-start text-center m-3">Psychotherapie</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                Wenn du nicht sicher bist, ob du eine Psychotherapie benötigst, kannst du dich zuerst an deinen Hausarzt, eine psychologische Beratungsstelle, eine psychiatrische 
                oder psychotherapeutische Praxis wenden, um erste Ratschläge zu erhalten. Bei psychischen Erkrankungen wie Depressionen, Angststörungen oder Essstörungen übernimmt 
                die gesetzliche Krankenversicherung die Kosten für psychotherapeutische Behandlungen, die von zugelassenen Psychotherapeuten oder Ärzten empfohlen werden. In der Regel 
                musst du bei Abwesenheit einer psychischen Erkrankung die Kosten für die Psychotherapie selbst tragen. Zu den von der Versicherung erstatteten psychotherapeutischen 
                Ansätzen gehören Verhaltenstherapie, tiefenpsychologisch fundierte Therapie, Psychoanalyse und andere Formen der Psychotherapie. Für konkrete Verfahren und den Umfang 
                der Leistungen empfehle ich dir, deine Krankenversicherung zu kontaktieren und dies zu klären. Wenn festgestellt wurde, dass eine psychotherapeutische Behandlung notwendig ist, 
                musst du auch deine Krankenversicherung informieren.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end mb-5">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col md:text-start text-center max-h-64">
            <p className="md:text-4xl text-3xl font-bold md:text-start text-center m-3">Helplines und Hotlines</p>
              <p className="md:text-base text-sm max-h-96 overflow-y-auto m-3 no-scrollbar">
                In Deutschland stehen dir verschiedene Helplines und Hotlines zur Verfügung, um sofortige Unterstützung bei psychischen Problemen zu erhalten. Diese Dienste 
                bieten vertrauliche und anonyme Hilfe, damit du über deine Sorgen sprechen, Rat erhalten und auf Ressourcen zugreifen kannst.
              </p>
          </div>
        </div>
        <p  className="md:text-3xl text-1xl font-bold text-center mt-8 mb-4 text-violet">Kontaktinformationen</p>
        <ul className="md:text-base text-sm">
        <li className="my-3">
            <strong>・ Telefonseelsorge</strong>
            <br />
              Die Telefonseelsorge ist ein bundesweites Hilfetelefon, das rund um die Uhr erreichbar ist und emotionale Unterstützung und Beratung anbietet. Sie wird von freiwilligen Helfern betrieben, die ein offenes Ohr und Beratung bieten. Der Dienst ist vertraulich und anonym, so dass die Betroffenen deine Sorgen frei besprechen können. 
            <br />
            <strong>Hotline:</strong> 0800 111 0 111 (für emotionale Unterstützung)
            <br />
            <strong>Hotline:</strong> 0800 111 0 222 (für die Beratung in Krisensituationen)
            <br />
            <strong>Website:</strong> <Link href="https://www.telefonseelsorge.de/">telefonseelsorge.de/</Link>
            <br />
            <strong>Sprachen:</strong> Deutsch, Englisch und andere Sprachen durch Dolmetscher
          </li>
          <li className="my-3">
            <strong>・ Deutsche Depressionshilfe</strong>
            <br />
              Die Deutsche Depressionshilfe ist eine Organisation, die ein Beratungstelefon für Menschen mit Depressionen anbietet. Geschulte Fachleute bieten Informationen, Unterstützung und Beratung für Menschen, die mit Depressionen zu kämpfen haben oder jemanden mit Depressionen unterstützen. Die Beratungsstelle ist wochentags von 8 Uhr bis 20 Uhr erreichbar.
            <br />
            <strong>Hotline:</strong> 0800 334 4533
          </li>
          <li className="my-3">
            <strong>・ Unterstützung für türkischsprachige Personen</strong>
            <br />
            <strong>Hotline:</strong> +49 30 4423233 (Montag bis Freitag, 10 bis 18 Uhr)
            <br />
            <strong>Website:</strong> <Link href="https://www.tbb-berlin.de/">tbb-berlin.de/</Link>
          </li>
          <li className="my-3">
            <strong>・ 竹の会</strong>
            <br />
              日本人高齢者の孤独・孤立、その他お悩み相談
            <br />
            <strong>電話:</strong> 0211-58677117
            <br />
            <strong>ウェブサイト:</strong> <Link href="https://takenokai.de/">takenokai.de/</Link>
          </li>
          <li className="my-3">
            <strong>・ ジャムズネット・ドイツ</strong>
            <br />
            在独邦人のメンタルヘルス、心の悩みの健康相談
            <br />
            <strong>ウェブサイト:</strong> <Link href="http://www.jamsnet.de/kokoro.html">jamsnet.de/kokoro.html</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Beratung;