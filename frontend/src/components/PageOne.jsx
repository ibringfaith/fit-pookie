import { PopupArrowButton } from './PopupArrowButton.jsx'
import { useRef, useEffect } from 'react'

export function PageOne()
{ 
  const dialogRef = useRef(null)
  useEffect(() => {
      if (dialogRef.current)  
      {
        dialogRef.current.showModal()
      }
    }  
  )
  
  return(
    <>
      {/* <dialog className="overflow-hidden shadow-[0px_0px_100px_35px_rgba(153,109,6,0.65)] bg-blend-multiply" ref={dialogRef}> */}
      <dialog className="overflow-hidden transition-opacity duration-10000 ease-out" ref={dialogRef}>
        <div className="grid-rows-3 content-evenly content-center w-[452px] h-[448px] bg-no-repeat bg-contain bg-[url('/text_box.png')]">
          <div className="pt-6 pb-4">
            <h5>Welcome!</h5>
          </div>
          <div className="pb-4">
            <p className="text-balance text-wrap">
            This is fit pookie, a web app where  <br></br>
            you pull the slot machine to pick an <br></br>
            outfit. Before we make our first pull, <br></br>
            let's start by clicking the yes button <br></br>
            below. This will take us to the closet <br></br>
            so we can add our first outfit pieces! <br></br>
            </p>
          </div>
          <PopupArrowButton isInvisible={true} text = "OK" textSize = "text-[1.75em]" isRight = {true} iconSize= "w-1/28 h-1/4" onClick={() => dialogRef.current.close()}/>          
        </div>
      </dialog>
    </>
  )
}