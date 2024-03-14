import bgImage from '../public/background.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center animate__animated animate__fadeIn" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="flex flex-col justify-center h-full">
        <div className="text-center">
          <div className="flex justify-center space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
            <a href="https://x.com/glzzn">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-x-twitter text-white" style={{ fontSize: '24px' }}></i>
              </div>
            </a>
            <a href="https://instagram.com/gianlucalazzarin">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-instagram text-white" style={{ fontSize: '24px' }}></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/lazzaringianluca/">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fab fa-linkedin-in text-white" style={{ fontSize: '24px' }}></i>
              </div>
            </a>
            <a href="mailto:io@gianlucalazzar.in">
              <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
                <i className="fas fa-envelope text-yellow-400" style={{ fontSize: '24px' }}></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}