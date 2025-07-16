import triangleRight from '../assets/triangle_right.png'

function RightArrowButton ({ onClick, text, textSize, isInvisible, padSize, arrowSize }) {
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
    console.log({onClick})
    return (
      <div className="content-center">
        <button className={classNameStr} onClick={onClick}>
          <img className={classStr} src={triangleRight}/>
          {text}
        </button>
      </div>
    )
}
export default RightArrowButton