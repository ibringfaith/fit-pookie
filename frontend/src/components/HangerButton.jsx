import hangerIcon from '../assets/hanger_icon.png'

export function HangerButton ({ onClick, padSize, iconSize })
{

  let classStr = "flex justify-end " + padSize
// let classStr = "absolute top-[34px] left-[75px] " + padSize

  return (
    // <div className="relative size-[150px] content-center">
    <div className="content-center">
      <button className = {classStr} onClick={onClick}>
        <img className={iconSize} src={hangerIcon}/>
      </button>
    </div>
  ) 
}
