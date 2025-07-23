import triangleRight from '../assets/triangle_right.png'
import triangleLeft from '../assets/triangle_left.png'

export function PopupArrowButton({ isInvisible, onClick, text, textSize, isRight = true, iconSize })
{
  let icon = null
  let classStr = ""
  let classNameStr = "absolute left-[207px] " + textSize 

  if (isInvisible)
    {
      classStr="absolute left-[180px] bottom-[36px] invisible group-hover:visible " + iconSize 
    }
  else
    {
      classStr= "absolute left-[180px] bottom-[36px] " + iconSize
    }

    if (isRight)
    {
        icon = triangleRight
    }
    else
    {
        icon = triangleLeft
    }

    return (
      <div className="relative h-[80px] py-2 group">
        <button className={classNameStr} onClick={onClick}>
            {text}
        </button>
        <img className={classStr} src={icon}/>
      </div>
    )
}