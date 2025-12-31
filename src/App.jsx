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
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroCarousel />
      <ShopByOccasion />
      <MakeYourOwnHamper />
      <WeddingCollection />
      <BestsellingHampers />
      <BestsellingForHer />
      <BestsellingForHim />
      <MakeYourOwnHamperCTA />
      <GiftGallery />
      <CustomerFeedback />
      <TrustBar />
      <Footer />
    </div>
  )
}

export default App
