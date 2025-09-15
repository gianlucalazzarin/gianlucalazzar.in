import Image from 'next/image';
import bgImage from '../public/background.jpg';
import profilePic from '../public/profile.jpg'; // 👉 inserisci la tua foto qui
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background */}
      <Image
        src={bgImage}
        alt="background"
        fill
        priority
        style={{ objectFit: 'cover' }}
        unoptimized
      />

      {/* Card */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 flex flex-col sm:flex-row items-center max-w-2xl animate__animated animate__fadeInUp">
          
          {/* Foto profilo */}
          <div className="flex-shrink-0">
            <Image
              src={profilePic}
              alt="Gianluca Lazzarin"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Testo */}
          <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Gianluca Lazzarin</h1>
            <h2 className="text-xl text-gray-700 mt-1">Full Stack Developer</h2>
            <p className="text-gray-700 mt-2">
              <br />
              Sono Gianluca Lazzarin, informatico, sviluppatore full stack, grande appassionato e studioso di tecnologia.
Credo nell’apprendimento continuo e nell’aggiornamento delle competenze per restare al passo con le più recenti innovazioni.
In parallelo al lavoro, studio Filosofia ed Etica dell'Intelligenza Artificiale per comprendere al meglio l'impatto dell'IA sulla mia attività professionale, preparandomi così alle sfide del futuro.
Il mio obiettivo è crescere ulteriormente nello sviluppo di soluzioni SaaS, creando prodotti sempre più innovativi.
            </p>

            {/* Icone social */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/lazzaringianluca/">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 transition">
                  <i className="fab fa-linkedin-in text-white text-xl"></i>
                </div>
              </a>
              <a href="https://github.com/gianlucalazzarin">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 transition">
                  <i className="fab fa-github text-white text-xl"></i>
                </div>
              </a>
              <a href="mailto:info@gianlucalazzarin.com">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 transition">
                  <i className="fas fa-envelope text-yellow-400 text-xl"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

