import Image from 'next/image';
import bgImage from '../public/background.jpg';
import profilePic from '../public/profile.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background con focus a sinistra (dove cammini) */}
      <Image
        src={bgImage}
        alt="background"
        fill
        priority
        className="object-cover object-[20%_50%]" // ← sposta il focus verso sinistra
        unoptimized
      />

      {/* (facoltativo) leggero vignette globale per profondità */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      {/* Layout responsive: centro su mobile, destra su desktop */}
      <div className="relative z-10 h-full flex items-center justify-center lg:justify-end px-6 lg:px-20">

        {/* Spotlight solo sotto la card per aumentare il contrasto locale */}
        <div
          aria-hidden
          className="absolute w-[560px] h-[320px] lg:right-12 rounded-[32px] bg-black/35 blur-2xl opacity-70 hidden lg:block"
          style={{ transform: 'translateY(10px)' }}
        />

        {/* Card glass */}
        <div className="relative bg-white/18 backdrop-blur-xl border border-white/30 shadow-[0_10px_60px_rgba(0,0,0,0.35)] rounded-3xl p-8 sm:p-10 max-w-2xl animate__animated animate__fadeInUp">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Foto profilo migliorata */}
            <div className="relative group shrink-0">
              <Image
                src={profilePic}
                alt="Gianluca Lazzarin"
                width={160}
                height={160}
                className="rounded-full border-4 border-white/70 shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>

            {/* Testo */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                Gianluca Lazzarin
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-200 mt-2">Full Stack Developer</h2>
              <p className="text-gray-100/90 mt-3 max-w-md">
                Sono Gianluca Lazzarin, informatico, sviluppatore full stack, grande appassionato e studioso di tecnologia.
              </p>

              {/* Icone social */}
              <div className="flex justify-center sm:justify-start gap-4 mt-5">
                <a href="https://www.linkedin.com/in/lazzaringianluca/" target="_blank" rel="noreferrer"
                   className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600/80 hover:scale-110 transition">
                  <i className="fab fa-linkedin-in text-white text-2xl" />
                </a>
                <a href="https://github.com/gianlucalazzarin" target="_blank" rel="noreferrer"
                   className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-900 hover:scale-110 transition">
                  <i className="fab fa-github text-white text-2xl" />
                </a>
                <a href="mailto:info@gianlucalazzarin.com"
                   className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400/80 hover:scale-110 transition">
                  <i className="fas fa-envelope text-white text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
