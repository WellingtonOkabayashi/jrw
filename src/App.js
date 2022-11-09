import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/contato" element={<Navbar />} />
        <Route path="/translate" element={<NavTranslate />} />
        <Route path="/lab" element={<Navlab />} />
        <Route path="/dev" element={<Navdev />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>
  )
}

export default App
