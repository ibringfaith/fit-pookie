import triangleLeft from '../assets/triangle_left.png'

function LeftArrowButton ({ onClick, text, textSize, isInvisible, padSize, arrowSize }) {
  let classStr = ""
  let classNameStr = "flex mx-auto justify-center items-center group " + textSize

  if (isInvisible)
    {
      classStr="invisible group-hover:visible " + arrowSize + " " + padSize
    }
  else
    {
      classStr=arrowSize
    }
    
    return (
      <div className="content-center">
        <button className={classNameStr} onClick={onClick}>
          <img className={classStr} src={triangleLeft}/>
          {text}
        </button>
      </div>
    )
}
export default LeftArrowButton