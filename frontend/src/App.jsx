import { useState } from 'react'
import slotMachine from './assets/slot_machine_full.png'
import triangleRight from './assets/triangle_right.png'
import './App.css'

function App() {

  return (
    <>
      <div class="p-7">
        <h1>CHOOSE YOUR OUTFIT?</h1>
      </div>
      <div class="flex -space-x-40 items-center">
        <div class = "flex justify-center items-center group">
          <img class="invisible group-hover:visible size-1/16" src={triangleRight}/>
          <button class="px-5">YES</button>
          {/* In case we want the underline effect again, delete 
              the line above and uncomment the one below
              <h1 class="hover:underline px-5">YES</h1> */}
        </div>
        <div class = "flex justify-center items-center group">
          <img class="invisible group-hover:visible size-1/16" src={triangleRight}/>
          <button class="px-5">NO</button>
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