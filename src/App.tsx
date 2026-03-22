import ScrollProgress from './components/ScrollProgress'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import DrawingSection from './sections/DrawingSection'
import ExhibitionInfo from './sections/ExhibitionInfo'
import Footer from './sections/Footer'
import { drawings } from './data/drawings'

export default function App() {
  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Fixed overlays */}
      <ScrollProgress />
      <Navigation />

      {/* Single scrollable container */}
      <div id="scroll-container" className="snap-container">
        <Hero />
        <About />

        {drawings.map((drawing, index) => (
          <DrawingSection key={drawing.id} drawing={drawing} index={index} />
        ))}

        <ExhibitionInfo />
        <Footer />
      </div>
    </>
  )
}
