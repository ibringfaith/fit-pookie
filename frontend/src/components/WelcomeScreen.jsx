import { HangerButton } from './HangerButton.jsx'
import { PageOne } from './PageOne.jsx'
import RightArrowButton from './RightArrowButton.jsx'
import { useNavigate } from 'react-router-dom'


function WelcomeScreen() {
  const navigate=useNavigate()

  return (
    <>

      <div className="grid-rows-2 content-center size-[500px] bg-no-repeat bg-contain bg-[url('/text_box.png')]">
        <div className="align-middle">
          <HangerButton iconSize= "size-1/10" padSize="mx-15" onClick={() => navigate('/PageTwo')}/>
        </div>
        <div className="justify-items-center">
          <PageOne />
        </div>
      </div>
    </>
  )
}
export default WelcomeScreen