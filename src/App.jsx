import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import ShopByOccasion from './components/ShopByOccasion'
import MakeYourOwnHamper from './components/MakeYourOwnHamper'
import WeddingCollection from './components/WeddingCollection'
import BestsellingHampers from './components/BestsellingHampers'
import BestsellingForHer from './components/BestsellingForHer'
import BestsellingForHim from './components/BestsellingForHim'
import MakeYourOwnHamperCTA from './components/MakeYourOwnHamperCTA'
import GiftGallery from './components/GiftGallery'
import CustomerFeedback from './components/CustomerFeedback'
import TrustBar from './components/TrustBar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ScrollReveal className="w-full">
        <HeroCarousel />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <ShopByOccasion />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <MakeYourOwnHamper />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <WeddingCollection />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <BestsellingHampers />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <BestsellingForHer />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <BestsellingForHim />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <MakeYourOwnHamperCTA />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <GiftGallery />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <CustomerFeedback />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <TrustBar />
      </ScrollReveal>
      <Footer />
    </div>
  )
}

export default App
