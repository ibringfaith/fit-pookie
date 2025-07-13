import './App.css'
import { Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen.jsx'
import WardrobeScreen from './pages/WardrobeScreen.jsx'

function App() {
  return (
      <Routes>
        <Route path = "/" element={<StartScreen />}/>
        <Route path = "/WardrobeScreen" element={<WardrobeScreen />}/>
      </Routes>
  )
}

export default App
