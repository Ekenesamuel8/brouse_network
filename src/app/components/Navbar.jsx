import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <Image src="/images/build_network_logo.png" alt="Build Network Logo" width={150} height={50} />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-500">Projects</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#"><i className="fas fa-phone"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </header>
  )
}
