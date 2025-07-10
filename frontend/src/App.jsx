import { useState } from 'react'
import slotMachine from './assets/slot_machine_full.png'
import tempButton from './assets/temp_button_icon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="p-7">
        <h1>CHOOSE YOUR OUTFIT?</h1>
      </div>
      <div class="grid grid-cols-2 place-items-center">  
        <div class="flex items-baseline">
          <div class="triangle-right px-3"></div>
          <h1 class="hover:underline">YES</h1>
        </div>
        <div class="flex items-baseline">
          <div class="triangle-right px-3"></div>
          <h1 class="hover:underline">NO</h1>
        </div>
      </div>
      <div class="p-4">
        <img class="size-1/3 mx-auto object-contain" src={slotMachine} alt="Slot Machine" />
      </div>
    </>
  )
}

var pix = document.getElementsByClassName("pixel");

for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.ceil(Math.random()*5000)+"ms";
}


function Background() {
    return (
        <div class="sidePanel">
        <div class="pixelCon">
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
            <div class="pixel"></div>
        </div>
        </div>
    )
}
export default App
/* {<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>} */