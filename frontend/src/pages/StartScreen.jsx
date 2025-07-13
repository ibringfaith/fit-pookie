import slotMachine from '../assets/slot_machine_full.png'
import triangleRight from '../assets/triangle_right.png'
import { useNavigate } from 'react-router-dom'


function StartScreen() {
    const navigate = useNavigate()
    return (
      <>
        <div class="p-7">
          <h1>CHOOSE YOUR OUTFIT?</h1>
        </div>
        <div class="flex -space-x-40 items-center">
          <div class = "flex justify-center items-center group">
            <img class="invisible group-hover:visible size-1/16" src={triangleRight}/>
            <button class="px-5" onClick = {() => navigate('/WardrobeScreen')}>YES</button>
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
export default StartScreen