import Image from 'next/image';
import bgImage from '../public/background.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src={bgImage}
        alt="background"
        fill
        priority
        style={{ objectFit: 'cover' }}
        unoptimized
      />

      <div className="relative z-10 flex flex-col justify-center h-full">
        <div className="text-center">
          <div className="flex justify-center space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
            <a href="https://www.linkedin.com/in/lazzaringianluca/">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-linkedin-in text-white text-2xl"></i>
              </div>
            </a>
            <a href="https://github.com/gianlucalazzarin">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-github text-white text-2xl"></i>
              </div>
            </a>
            <a href="mailto:info@gianlucalazzarin.com">
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
