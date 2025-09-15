import Image from 'next/image';
import bgImage from '../public/background.jpg';
import profilePic from '../public/profile.jpg'; // 👉 inserisci la tua foto reale
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

      {/* Overlay scuro leggero per contrasto */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Card */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col sm:flex-row items-center max-w-2xl animate__animated animate__fadeInUp transition">
          
          {/* Foto profilo */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <Image
                src={profilePic}
                alt="Gianluca Lazzarin"
                width={150}
                height={150}
                className="rounded-full border-4 border-white/70 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-yellow-400/50"
              />
              {/* Glow attorno alla foto */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/30 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            </div>
          </div>

          {/* Testo */}
          <div className="sm:ml-8 mt-6 sm:mt-0 text-center sm:text-left">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">Gianluca Lazzarin</h1>
            <h2 className="text-xl text-gray-200 mt-2">Full Stack Developer</h2>
            <p className="text-gray-100 mt-3 leading-relaxed max-w-md">
              Informatico, sviluppatore full stack, grande appassionato e studioso di tecnologia.
            </p>

            {/* Icone social */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-5">
              <a href="https://www.linkedin.com/in/lazzaringianluca/" target="_blank">
                <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full shadow hover:bg-blue-600/80 hover:scale-110 transition">
                  <i className="fab fa-linkedin-in text-white text-2xl"></i>
                </div>
              </a>
              <a href="https://github.com/gianlucalazzarin" target="_blank">
                <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full shadow hover:bg-gray-900 hover:scale-110 transition">
                  <i className="fab fa-github text-white text-2xl"></i>
                </div>
              </a>
              <a href="mailto:info@gianlucalazzarin.com">
                <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full shadow hover:bg-yellow-400/80 hover:scale-110 transition">
                  <i className="fas fa-envelope text-white text-2xl"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
