import Image from 'next/image'
import bgImage from '../public/backgroundIMG.jpg';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="text-center">
      </div>
    </div>
  )
}
