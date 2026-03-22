import ScrollProgress from './components/ScrollProgress'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import DrawingSection from './sections/DrawingSection'
import ExhibitionInfo from './sections/ExhibitionInfo'
import Footer from './sections/Footer'
import { drawings } from './data/drawings'

export default function App() {
  return (
    <>
      {/* Fixed overlays */}
      <ScrollProgress />
      <Navigation />

      {/* Single scrollable container */}
      <div id="scroll-container" className="snap-container">
        {/* Non-snap sections */}
        <Hero />
        <About />

        {/* Snap-locked drawing sections */}
        {drawings.map((drawing, index) => (
          <DrawingSection key={drawing.id} drawing={drawing} index={index} />
        ))}

        {/* Non-snap sections */}
        <ExhibitionInfo />
        <Footer />
      </div>
    </>
  )
}
