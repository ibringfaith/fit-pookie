import Link from "react-router-dom"

export function WelcomeScreen() {

  return (
    <>
      <h1>WELCOME</h1>
      <p>If you select to choose a fit...</p><br></br>
      <p>Upload images of your clothes to the closet</p><br></br>
      <p>Once you have uploaded images in each category,</p><br></br>
      <p>Generate an outfit using the slot machine</p><br></br>
      <p>If you want to save the fit to your gallery, click save</p>
      <Link to="/StartScreen">
        <button>X</button>
      </Link> 
    </>
  )
}