import slotMachine from '../assets/slot_machine_full.png'
import RightArrowButton from '../components/RightArrowButton.jsx'
import { useNavigate } from 'react-router-dom'


function StartScreen() {
    const navigate=useNavigate()
    return (
      <>
        <div className="p-7">
          <h1>CHOOSE YOUR OUTFIT?</h1>
        </div>
        <div className="flex -space-x-40 items-center">
            {/* Whatever name you have here (in this case onClick) MUST match the
                prop name you have as an arg to the ArrowButton function. Say I have
                function ArrowButton({ onHit, message }) then here I have to say onHit={...}*/}
          <RightArrowButton isInvisible={true} text = "YES" textSize = "text-[5em]" arrowSize= "size-1/8" padSize="px-5" onClick={() => navigate('/WardrobeScreen')}/>
          <RightArrowButton isInvisible={true} text = "NO" textSize = "text-[5em]" arrowSize= "size-1/8" padSize="px-4.5" onClick={() => {console.log('You clicked me!')}}/>

        </div>
        <div className="p-4">
          <img className="size-1/3 mx-auto object-contain" src={slotMachine} alt="Slot Machine" />
        </div> 
      </>
    )
}
export default StartScreen