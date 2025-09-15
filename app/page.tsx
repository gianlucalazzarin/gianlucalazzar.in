import Image from 'next/image';
import bgImage from '../public/background.jpg';
import profilePic from '../public/profile.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background con focus a sinistra */}
      <Image
        src={bgImage}
        alt="background"
        fill
        priority
        className="object-cover object-left object-[40%_50%]" // 👈 focal point sul lato sinistro
        unoptimized
      />

      {/* Overlay per contrasto */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Card centrale */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="bg-white/15 backdrop-blur-xl border border-white/30 shadow-[0_10px_60px_rgba(0,0,0,0.35)] rounded-3xl p-8 sm:p-10 max-w-2xl animate__animated animate__fadeInUp">
          
          {/* Layout foto + testo */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            
            {/* Foto profilo a sinistra */}
            <div className="relative group shrink-0">
              <Image
                src={profilePic}
                alt="Gianluca Lazzarin"
                width={140}
                height={140}
                className="rounded-full border-4 border-white/70 shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>

            {/* Testo a destra */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                Gianluca Lazzarin
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-200 mt-2">Full Stack Developer</h2>
              <p className="text-gray-100/90 mt-3 max-w-md">
                Sono Gianluca Lazzarin, informatico, sviluppatore full stack, grande appassionato e studioso di tecnologia.
              </p>

              {/* Icone social */}
              <div className="flex justify-center sm:justify-start gap-4 mt-5">
                <a
                  href="https://www.linkedin.com/in/lazzaringianluca/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600/80 hover:scale-110 transition"
                >
                  <i className="fab fa-linkedin-in text-white text-2xl" />
                </a>
                <a
                  href="https://github.com/gianlucalazzarin"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-900 hover:scale-110 transition"
                >
                  <i className="fab fa-github text-white text-2xl" />
                </a>
                <a
                  href="mailto:info@gianlucalazzarin.com"
                  className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400/80 hover:scale-110 transition"
                >
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
