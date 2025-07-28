import closetBorder from '../assets/closet_border_dark.png'
import outfitBorder from '../assets/outfit_border.png'
import { AddButton } from '../components/AddButton'
import { useNavigate } from 'react-router-dom'

export function WardrobeScreen() {
  const navigate=useNavigate()

  return (
    <>
      <div className="flex w-[600px] h-[690px] justify-center items-center bg-no-repeat bg-contain bg-[url('/closet_border_dark.png')]">
        <div className= "grid w-[500px] h-[585px] grid-cols-3 gap-y-4 auto-rows-max items-center justify-items-center">
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>    
          <div className="h-[48px] w-[48px] col-span-3">
            <AddButton onClick = {() => navigate('/RollScreen')}/>
          </div>
        </div>
      </div>
    </>
  )
}