import slotMachine from '../assets/slot_machine_full.png'
import { useNavigate } from 'react-router-dom'

export function RollScreen() {
  const navigate=useNavigate()
    
  return (
    <>
    {/* <div className = "grid grid-flow-col auto-cols-max">
          <div>
            <h1>CHOOSE YOUR OUTFIT?</h1>
          </div>
            <HangerButton iconSize="" padSize = "" onClick= {() => navigate('/WardrobeScreen')}/>
        </div> */}
      <div className = "grid grid-flow-col auto-cols-max">
        <HangerButton iconSize="" padSize = "" onClick= {() => navigate('/WardrobeScreen')}/>
      </div>
      <div className="p-4">
        <img className="size-1/3 mx-auto object-contain" src={slotMachine} alt="Slot Machine" />
      </div> 
    </>
  )
}