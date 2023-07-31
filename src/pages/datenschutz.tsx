import Footer from '../components/footer/footer';

const Datenschutz = () => {
    return (
        <div className="min-h-screen py-6 bg-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mt-8 mb-4">Immigrantinnen-Portal Datenschutz</h1>
            <h2 className="mb-4"> 1. Datensammlung und -verwendung</h2>
            <p>
              Das Immigrantinnen-Portal (nachfolgend als "die Website" bezeichnet) sammelt automatisch 
              Informationen, wenn Nutzer die Website besuchen, einschließlich IP-Adresse, Browsertyp, 
              Referrer (die zuvor besuchte URL) und aufgerufene Seiten. Diese Informationen werden 
              für die Analyse des Datenverkehrs und die Verbesserung der Website verwendet. Außerdem 
              kann es vorkommen, dass Nutzer persönliche Informationen über Kontaktformulare oder 
              ähnliche Mittel bereitstellen. Diese persönlichen Informationen werden für die Beantwortung 
              von Anfragen und die Bereitstellung von Dienstleistungen verwendet.
            </p>
            <br />
            <h2 className="mb-4"> 2. Verwendung von Cookies</h2>
            <p>
              Die Website kann Cookies verwenden, um Informationen im Browser der Nutzer zu speichern. Cookies erfassen jedoch keine persönlichen Informationen, sondern temporäre Informationen über den Computer des Nutzers. Nutzer können Cookies ablehnen, indem sie die Einstellungen in ihrem Browser ändern. In diesem Fall können jedoch einige Funktionen der Website eingeschränkt sein.
            </p>
            <br />
            <h2 className="mb-4"> 3. Datensicherheit</h2>
            <p>
              Die Website ergreift angemessene Sicherheitsmaßnahmen, um die persönlichen Informationen der Nutzer zu schützen. Die persönlichen Informationen werden sorgfältig verwaltet, um unbefugten Zugriff oder Verlust zu verhindern.
            </p>
            <br />
            <h2 className="mb-4"> 4. Datenweitergabe</h2>
            <p>
              Die Website teilt die persönlichen Informationen der Nutzer nicht mit Dritten, außer in einigen Ausnahmefällen, wie gesetzlich vorgeschrieben, bei Verstößen gegen die Nutzungsbedingungen der Website oder mit Zustimmung des Nutzers.
            </p>
            <br />
            <h2 className="mb-4"> 5. Rechte der Nutzer</h2>
            <p>
              Nutzer haben das Recht, auf ihre persönlichen Informationen zuzugreifen, diese zu korrigieren oder zu löschen sowie die Verarbeitung ihrer persönlichen Informationen einzuschränken oder ihre persönlichen Informationen in einem strukturierten, maschinenlesbaren Format zu erhalten.
            </p>
            <br />
            <h2 className="mb-4"> 6. Einhaltung der DSGVO</h2>
            <p>
              Die Website sammelt, verwendet, speichert und verarbeitet personenbezogene Daten in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO). Die Website sammelt keine personenbezogenen Daten ohne die Zustimmung des Nutzers.
            </p>
            <br />
            <h2 className="mb-4"> 7. Änderungen der Datenschutzrichtlinie</h2>
            <p>
              Die Website kann diese Datenschutzrichtlinie gelegentlich ändern. Änderungen werden auf dieser Seite bekannt gegeben. Durch die fortgesetzte Nutzung der Website nach Änderungen gilt die Zustimmung zu den geänderten Bedingungen.
            </p>
            <br />
            <p>31. Juli 2023</p>
          </div>
          <Footer />
        </div>
      );
};

export default Datenschutz;