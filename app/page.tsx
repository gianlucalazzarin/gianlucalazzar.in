import Image from 'next/image'
import bgImage from '../public/background.jpg'
import profilePic from '../public/profile.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background con focal point spostato a sinistra */}
      <Image
        src={bgImage}
        alt="Gianluca che cammina su uno sfondo urbano"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-[35%_50%]"
      />

      {/* Overlay: gradiente uniforme scuro su tutto lo sfondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/70"
      />
      {/* Contenuto */}}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-10">
        <section
          aria-label="Gianluca Lazzarin"
          className="w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_10px_60px_rgba(0,0,0,0.35)] animate__animated animate__fadeInUp animate__slower"
        >
          {/* Layout foto + testo */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-8 sm:p-10">
            {/* Foto profilo a sinistra */}
            <div className="relative group shrink-0">
              <Image
                src={profilePic}
                alt="Ritratto di Gianluca Lazzarin"
                width={148}
                height={148}
                placeholder="blur"
                sizes="148px"
                className="rounded-full ring-4 ring-white/70 shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>

            {/* Testo a destra */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-extrabold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                Gianluca Lazzarin
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-200 mt-2">
                Full Stack Developer
              </h2>

              <p className="text-gray-100/90 mt-3 max-w-md">
Informatico, sviluppatore full stack, grande appassionato e studioso di tecnologia.
              </p>

              {/* Icone social accessibili */}
              <nav aria-label="Link ai profili social" className="mt-5">
                <ul className="flex justify-center sm:justify-start gap-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/lazzaringianluca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
                      aria-label="LinkedIn di Gianluca Lazzarin"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in text-white text-2xl group-hover:opacity-90" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/gianlucalazzarin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
                      aria-label="GitHub di Gianluca Lazzarin"
                      title="GitHub"
                    >
                      <i className="fab fa-github text-white text-2xl group-hover:opacity-90" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@gianlucalazzarin.com"
                      className="group bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
                      aria-label="Invia un'email a Gianluca Lazzarin"
                      title="Email"
                    >
                      <i className="fas fa-envelope text-white text-2xl group-hover:opacity-90" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
