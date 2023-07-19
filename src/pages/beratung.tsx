import Footer from '../components/footer/footer';

const Beratung = () => {
  return (
    <div className="h-screen font-Montserrat flex flex-col">
      <main className="flex-1">
      <h1 className="text-6xl font-bold text-center">Beratungshilfe für Migrantinnen</h1>
      <p  className="text-3xl font-bold text-center mt-4 mb-4 text-violet">Überblick über das Thema</p>
      <p style={{ wordBreak: 'break-all' }}>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</p>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start h-64">
            <p className="text-4xl font-bold text-center">Beratungsstellen</p>
            </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start h-64">
            <p className="text-4xl font-bold text-center">Psychiartrische Kliniken</p>
            </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start h-64">
            <p className="text-4xl font-bold text-center">Psychotherapie</p>
            </div>
        </div>
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
          <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start h-64">
            <p className="text-4xl font-bold text-center">Helplines und Hotlines</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Beratung;