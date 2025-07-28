import slotMachineCrop from '../assets/slot_machine_cropped.png'
import { HangerButton } from '../components/HangerButton'
import { useNavigate } from 'react-router-dom'

export function RollScreen() {
  return (
    <>
    {/* <div className = "grid grid-flow-col auto-cols-max">
          <div>
            <h1>CHOOSE YOUR OUTFIT?</h1>
          </div>
            <HangerButton iconSize="" padSize = "" onClick= {() => navigate('/WardrobeScreen')}/>
        </div> */}
      <div className = "grid grid-rows-2 auto-cols-max">
        <HangerButton iconSize="size-1/10" padSize = "" onClick= {() => navigate('/WardrobeScreen')}/>
      </div>
      <img className="size-1/3 mx-auto object-contain" src={slotMachineCrop} alt="Slot Machine" />
    </>
  )
}