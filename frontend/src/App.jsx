import './App.css'
import { Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen.jsx'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import { WardrobeScreen } from './pages/WardrobeScreen.jsx'
import { RollScreen } from './pages/RollScreen.jsx'
import PageTwo from './components/PageTwo.jsx'
import { AddOutfitScreenOne } from './pages/AddOutfitScreenOne.jsx';
import { AddOutfitScreenTwo } from './pages/AddOutfitScreenTwo.jsx';

function App() {
  return (
      <Routes>
        <Route path = "/WelcomeScreen" element={<WelcomeScreen />}/>
        <Route path = "/" element={<StartScreen />}/>
        <Route path = "/WardrobeScreen" element={<WardrobeScreen />}/>
        <Route path = "/PageTwo" element={<PageTwo />}/>
        <Route path = "/RollScreen" element={<RollScreen />}/>
        <Route path = "/AddOutfitScreenOne" element={<AddOutfitScreenOne />}/>
        <Route path = "/AddOutfitScreenTwo" element={<AddOutfitScreenTwo />}/>''
      </Routes>
  )
}

export default App
