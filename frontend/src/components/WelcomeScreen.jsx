import {PageOne} from './PageOne.jsx'
import RightArrowButton from './RightArrowButton.jsx'
import { useNavigate } from 'react-router-dom'


function WelcomeScreen() {
  const navigate=useNavigate()

  return (
    <>
      <div className="grid-rows-2 content-center size-[500px] bg-no-repeat bg-contain bg-[url('/text_box.png')]">
        <div><PageOne /></div>
        <div><RightArrowButton isInvisible={false} text = "" arrowSize= "size-1/30" padSize="py-10" onClick={() => navigate('/PageTwo')}/></div>
      </div>
    </>
  )
}
export default WelcomeScreen