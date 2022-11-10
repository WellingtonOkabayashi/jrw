import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavTranslate from './components/NavTranslate'
import Navlab from './components/Navlab'
import Navdev from './components/Navdev'
import Home from './components/SectionHome'
import Lab from './components/SectionLab'
import Dev from './components/SectionDev'
import Navbar from './components/Navbar'
import Translate from './components/SectionTranslate'
import Contato from './components/Contato'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jrw" element={<Navbar />} />
        <Route path="/jrw/#/contato" element={<Navbar />} />
        <Route path="/jrw/#/translate" element={<NavTranslate />} />
        <Route path="/jrw/#/lab" element={<Navlab />} />
        <Route path="/jrw/#/dev" element={<Navdev />} />
      </Routes>

      <Routes>
        <Route path="/jrw" element={<Home />} />
        <Route path="/jrw/#/translate" element={<Translate />} />
        <Route path="/jrw/#/lab" element={<Lab />} />
        <Route path="/jrw/#/dev" element={<Dev />} />
        <Route path="/jrw/#/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
