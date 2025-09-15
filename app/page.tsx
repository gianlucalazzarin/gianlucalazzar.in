// app/page.js (o pages/index.js se usi pages/)

import bgImage from '../public/background.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat animate__animated animate__fadeIn"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        imageRendering: 'auto',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <div className="flex flex-col justify-center h-full">
        <div className="text-center">
          <div className="flex justify-center space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
            <a href="https://x.com/glzzn">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-x-twitter text-white text-2xl"></i>
              </div>
            </a>
            <a href="https://instagram.com/gianlucalazzarin">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-instagram text-white text-2xl"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/lazzaringianluca/">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-linkedin-in text-white text-2xl"></i>
              </div>
            </a>
            <a href="mailto:io@gianlucalazzar.in">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fas fa-envelope text-yellow-400 text-2xl"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
