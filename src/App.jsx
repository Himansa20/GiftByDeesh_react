import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import ShopByOccasion from './components/ShopByOccasion'
import MakeYourOwnHamper from './components/MakeYourOwnHamper'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroCarousel />
      <ShopByOccasion />
      <MakeYourOwnHamper />
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to GiftByDeesh</h1>
        <p className="text-gray-600">Start building your luxe custom gift store here.</p>
      </main>
    </div>
  )
}

export default App
