/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to="vans">Find your van</Link>
    </div>
  )
}

function About() {
  return (
    <div className=''>
      <img className='about-hero-image' src="" alt="" />
      <div className='about-page-content'>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className='about-page-cta'>
        <h2>Your destination is waiting.<br />Your van is ready.</h2>
        <Link className="link-button" to="/vans">Explore our vans</Link>
      </div>
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
    <header className='header'>
      <Link className='site-logo' to="/">#VanLife</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
