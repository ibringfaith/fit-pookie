import closetBorder from '../assets/closet_border.png'
import outfitBorder from '../assets/outfit_border.png'

export function WardrobeScreen() {
  return (
    <>
      <div className="flex w-[600px] h-[700px] justify-center items-center bg-no-repeat bg-contain bg-[url('/closet_border.png')]">
        <div className= "grid w-[500px] h-[575px] grid-cols-3 grid-rows-3 items-center justify-items-center">
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
          <img className="h-[165px] w-[150px]" src={outfitBorder} alt="Outfit Border"/>
        </div>
      </div>
    </>
  )
}