import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import Aboutus from './components/Aboutus'
import FeaturedInsight from './components/FeaturedInsight'
import Footer from './components/Footer'

export const metadata = {
  title: 'Build Network ofi',
  description: 'Build Network official website',
};

export default function Home() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Aboutus />
      <FeaturedInsight />
      <Footer />
    </div>
  )
}
