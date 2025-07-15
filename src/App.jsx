import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CaseStudies from './Pages/CaseStudies'
import ShopifyStoreBuild from './Pages/ShopifyStoreBuild'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Case-Studies' element={<CaseStudies/>} />
        <Route path='/Shopify-Store-Build' element={<ShopifyStoreBuild/>} />
        {/* <Route path='/Talktous' element={<Talktous/>} /> */}
      </Routes>
    </div>
  )
}

export default App