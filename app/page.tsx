import bgImage from '../public/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={`flex items-center justify-center h-screen bg-cover bg-center`} style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="text-center">
        <div className="flex justify-center space-x-4"> 
          <a href="https://x.com/glzzn">
            <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
              <FontAwesomeIcon icon={faXTwitter} className="text-white" style={{ transform: 'scale(0.6)'}} />
            </div>
          </a>
          <a href="https://instagram.com/gianlucalazzarin">
            <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none" >
              <FontAwesomeIcon icon={faInstagram} className="text-white" style={{ transform: 'scale(0.6)'  }} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lazzaringianluca/">
            <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
              <FontAwesomeIcon icon={faLinkedin} className="text-white" style={{ transform: 'scale(0.6)' }} />
            </div>
          </a>
          <a href="mailto:io@gianlucalazzar.in">
            <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" style={{ transform: 'scale(0.6)'  }} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}


