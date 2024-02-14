import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Experience,Hero,Navbar,Tech,Works,StarsCanvas, EarthCanvas} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className=' relative z-0 bg-primary'>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className=' relative z-0'>
          <EarthCanvas/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App