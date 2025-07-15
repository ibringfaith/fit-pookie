import './App.css'
import { Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen.jsx'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import WardrobeScreen from './pages/WardrobeScreen.jsx'
import PageTwo from './components/PageTwo.jsx'

function App() {
  return (
      <Routes>
        <Route path = "/" element={<WelcomeScreen />}/>
        <Route path = "/StartScreen" element={<StartScreen />}/>
        <Route path = "/WardrobeScreen" element={<WardrobeScreen />}/>
        <Route path = "/PageTwo" element={<PageTwo />}/>
      </Routes>
  )
}

export default App
