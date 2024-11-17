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

import './server.js'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import Income from './pages/Income.jsx'
import Dashboard from './pages/Dashboard'
import Reviews from './pages/Reviews'
import HostVans from './pages/HostVans'
import HostVanDetails from './pages/HostVanDetails'
import HostVanInfo from './pages/HostVanInfo'
import HostVanPricing from './pages/HostVanPricing'
import HostVanPhotos from './pages/HostVanPhotos'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import AuthRequired from './components/AuthRequired'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="login" element={<Login />} />

        <Route element={<AuthRequired />}>
          <Route path="host" element={<HostLayout />}> 
            <Route index element={<Dashboard />} />  
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} />
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
        </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
