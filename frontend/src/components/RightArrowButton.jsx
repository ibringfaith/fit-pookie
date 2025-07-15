import triangleRight from '../assets/triangle_right.png'

function RightArrowButton ({ onClick, text, isInvisible, padSize, arrowSize }) {
  let classStr = ""
  if (isInvisible)
    {
      classStr="invisible group-hover:visible " + arrowSize
    }
  else
    {
      classStr=arrowSize
    }
    return (
      <div className="flex justify-center items-center group">
        <img className={classStr} src={triangleRight}/>
        <button className={padSize} onClick={onClick}>
          {text}
        </button>
      </div>
    )
}
export default RightArrowButton