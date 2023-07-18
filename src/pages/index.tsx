import * as React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/footer/footer';

const Home = () => {
  return (
    <div className="h-screen font-Montserrat flex flex-col">
      <main className="flex-1">
        <div className="grid grid-cols-10 gap-2 flex justify-start items-end ">
          <div className="mr-2 col-span-3 row-span-6 row-start-6 bg-container-gray flex justify-center items-end h-48">
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56">Mehr Infos</button>
          </div>
          <div className="col-span-7 row-span-6 row-start-6 bg-container-gray h-96">02</div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-container-gray row-span-5 flex justify-start items-end h-96">
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">Mehr wissen</button>
          </div>
          <div className="bg-container-gray row-span-5 flex justify-start items-end h-96">
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">Mehr wissen</button>
          </div>
          <div className="bg-container-gray row-span-5 flex justify-start items-end h-96">
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">Mehr wissen</button>
          </div>
          <div className="bg-container-gray row-span-5 flex justify-start items-end h-96">
            <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 mb-2 mx-2">Mehr wissen</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 justify-items-center">
          <div className="w-1/2 pb-1/2 bg-container-gray">01</div>
          <div className="w-1/2 pb-1/2 bg-container-gray">02</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
