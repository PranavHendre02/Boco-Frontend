import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CaseStudies from './Pages/CaseStudies'
import ShopifyStoreBuild from './Pages/ShopifyStoreBuild'
import Newpage from './Pages/Newpage'
// import 'react-slideshow-image/dist/styles.css';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Case-Studies' element={<CaseStudies/>} />
        <Route path='/Shopify-Store-Build' element={<ShopifyStoreBuild/>} />
        <Route path='/Newpage' element={<Newpage/>} />
        {/* <Route path='/Talktous' element={<Talktous/>} /> */}
      </Routes>
    </div>
  )
}

export default App