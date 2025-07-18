import RightArrowButton from './RightArrowButton.jsx'
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
      {/* <div className = "flex justify-center items-center"> */}
        <dialog ref={dialogRef}>
          <div className="grid-rows-2 content-center size-[500px] bg-no-repeat bg-contain bg-[url('/text_box.png')]">
            <h3 className="py-2">Welcome!</h3>
            <p className="text-balance text-wrap">
            This is fit pookie, a web app  <br></br>
            where you pull the slot  <br></br>
            machine to pick an outfit. </p>
            <br></br>
            <p className="text-balance text-wrap"> 
            Before we make our first pull, let's<br></br>
            start by clicking the yes button below. <br></br>
            This will take us to the closet where <br></br>
            we can add our first outfit pieces! </p>
            {/* To make your first pull, you need to add outfit
            pieces to your wardrobe. You can do this by clicking
            the hanger icon, then 
            If you select to choose a fit, upload <br></br> 
            images of your clothes to the closet. <br></br>
            Once you have uploaded images, you <br></br>
            can generate an outfit using the slot <br></br>
            machine. If you want to save the fit <br></br>
            to your gallery, click the save icon. 
            */}
            <RightArrowButton isInvisible={false} text = "OK" textSize = "text-[2em]" arrowSize= "size-1/14" padSize="py-5 px-2" onClick={() => dialogRef.current.close()}/>
          </div>
        </dialog>
      {/* </div>    */}
    </>
  )
}