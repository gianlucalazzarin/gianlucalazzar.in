import bgImage from '../public/background.jpg'; // Assicurati di sostituire con il percorso della tua immagine
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Icona brand per Instagram


export default function Home() {

  return (
    <div className={`flex items-center justify-center h-screen bg-cover bg-center`} style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="text-center">
      <div className="flex justify-center space-x-4"> 
        {/* Aggiungi l'attributo href con il link desiderato al tag a */}
        <a href="https://x.com/glzzn">
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
            <FontAwesomeIcon icon={faXTwitter} className="text-white" style={{ transform: 'scale(0.6)', zIndex: 5  }} />
          </div>
        </a>
        <a href="https://instagram.com/gianlucalazzarin">
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none" style={{  zIndex: -1  }} >
            <FontAwesomeIcon icon={faInstagram} className="text-white" style={{ transform: 'scale(0.6)', zIndex: 5  }} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/lazzaringianluca/">
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
          <FontAwesomeIcon icon={faLinkedin} className="text-white" style={{ transform: 'scale(0.6)', zIndex: 5 }} />
          </div>
        </a>
        <a href="mailto:io@gianlucalazzar.in">
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded focus:outline-none">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" style={{ transform: 'scale(0.6)', zIndex: 5  }} />
          </div>
        </a>
        </div>
      </div>
    </div>
  );
}


