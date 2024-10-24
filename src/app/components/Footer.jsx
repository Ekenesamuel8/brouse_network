import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="footer-logo">
          <Image src="/images/build_network_logo.png" alt="Build Network Logo" width={100} height={50} />
        </div>
        <div className="footer-links flex space-x-4 text-center">
          <div>
            <a href="#">Building</a>
            <a href="#">Development</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">Building</a>
            <a href="#">Development</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-icons flex space-x-4">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-telegram"></i></a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Build Network. All rights reserved.</p>
      </div>
    </footer>
  )
}
