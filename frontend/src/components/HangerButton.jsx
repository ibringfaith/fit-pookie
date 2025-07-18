import hangerIcon from '../assets/hanger_icon.png'

export function HangerButton ({ onClick, text, padSize, iconSize })
{
//   let classStr = "" + iconSize + " " + padSize
let classStr = "flex justify-end " + padSize
  return (
    <div className="content-center">
      <button className = {classStr} onClick={onClick}>
        <img className={iconSize} src={hangerIcon}/>
          {text}
      </button>
    </div>
  ) 
}
