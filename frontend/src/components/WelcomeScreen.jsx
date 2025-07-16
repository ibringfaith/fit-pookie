import { PageOne } from './PageOne.jsx'
import RightArrowButton from './RightArrowButton.jsx'
import { useNavigate } from 'react-router-dom'


function WelcomeScreen() {
  const navigate=useNavigate()

  return (
    <>
      <div className="grid-rows-2 content-center size-[500px] bg-no-repeat bg-contain bg-[url('/text_box.png')]">
        <div><PageOne /></div>
        <div>
          <RightArrowButton isInvisible={true} text = "" textSize = "text-[1.5em]" arrowSize= "size-1/14" padSize="py-8 px-2" onClick={() => navigate('/StartScreen')}/>
        </div>
      </div>
    </>
  )
}
export default WelcomeScreen