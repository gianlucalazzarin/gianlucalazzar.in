// use client

import { useEffect, useState } from 'react';
import Image from 'next/image';
import bgImage from '../public/background.jpg'; // Assicurati di sostituire con il percorso della tua immagine

export default function Home() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100); // Imposta un breve ritardo prima di avviare la transizione di dissolvenza
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center justify-center h-screen bg-cover bg-center transition-opacity duration-1000 ease-in-out`} style={{ backgroundImage: `url(${bgImage.src})`, opacity: opacity }}>
      <div className="text-center">
      <a href="mailto:info@gianlucalazzar.in" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2">CONTATTAMI</a>
      </div>
    </div>
  );
}
