import fileIcon from '../assets/file_icon.png'
import buttonBackground from '../assets/button_background.png'
import { useNavigate } from 'react-router-dom'

export function AddOutfitScreenTwo() {
  const navigate=useNavigate()
  return (
    <>
      <div className="flex w-[600px] h-screen items-center justify-center">
        <div className="flex relative w-[500px] h-[435px] bg-no-repeat bg-contain bg-[url('/add_border.png')]"> 
          <img className="absolute bottom-[80px] left-[175px] w-[150px] h-[60px]" src={buttonBackground} alt="Button Background"/>
          <text className="absolute bottom-[82px] left-[188px] text-[1.8em]">UPLOAD</text>
        </div>
      </div>
    </>
  )
}