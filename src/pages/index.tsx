import * as React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/footer/footer';

const Home = () => {
  return (
    <div className="h-screen font-Montserrat md:flex flex-col">
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-2 flex justify-start items-end">
          <div className="md:col-span-3 md:row-span-6 md:row-start-6 flex flex-col justify-between items-start md:h-64">
            <p className="text-4xl font-bold text-center">Empowerment&nbsp; von Migrantinnen</p>
            <p className="text-center">Einfacher Guide zu Rechten, Ressourcen und Möglichkeiten</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 ml-14">
              <Link href="/frauenrechte">
                Mehr Infos
              </Link>
            </button>
          </div>
          <div className="col-span-1 md:col-span-7 md:row-span-6 md:row-start-6 bg-container-gray h-40 md:h-96">02</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Frauenrechte</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/frauenrechte">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Beratung</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/beratung">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Job-Hilfe</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/job-hilfe">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Deutsch lernen</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/deutsch-lernen">
                Mehr wissen
              </Link>
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-container-gray row-span-5 flex flex-col justify-between items-start h-96">
            <p className="self-start text-4xl	font-bold">Frauenrechte</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/frauenrechte">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray row-span-5 flex flex-col justify-between items-start h-96">
            <p className="self-start text-4xl	font-bold">Beratung</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/beratung">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray row-span-5 flex flex-col justify-between items-start h-96">
            <p className="self-start text-4xl	font-bold">Job-Hilfe</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/job-hilfe">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray row-span-5 flex flex-col justify-between items-start h-96">
            <p className="self-start text-4xl	font-bold">Deutsch lernen</p>
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/deutsch-lernen">
                Mehr wissen
              </Link>
            </button>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 justify-items-center items-center">
          <div className="bg-container-gray flex justify-center items-center w-full md:w-96 h-40 md:h-96">
            <p className="text-4xl font-bold">Interview 1</p>
          </div>
          <div className="bg-container-gray flex justify-center items-center w-full md:w-96 h-40 md:h-96">
            <p className="text-4xl font-bold">Interview 2</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
