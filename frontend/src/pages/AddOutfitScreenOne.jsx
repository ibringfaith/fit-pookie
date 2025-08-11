import fileIcon from '../assets/file_icon.png'
import buttonBackground from '../assets/button_background.png'
import { useNavigate } from 'react-router-dom'

export function AddOutfitScreenOne() {
  const navigate=useNavigate()
  return (
    <>
      <div className="flex w-[600px] h-screen items-center justify-center">
        <div className="flex relative w-[500px] h-[435px] bg-no-repeat bg-contain bg-[url('/add_border.png')]"> 
          <button onClick = {() => navigate('/AddOutfitScreenTwo')}>
            <img className="absolute top-[120px] left-[170px] w-[150px] h-[150px]" src={fileIcon} alt="File Icon"/>
          </button>
        </div>
      </div>
    </>
  )
}