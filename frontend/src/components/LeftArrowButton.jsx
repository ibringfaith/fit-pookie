import triangleLeft from '../assets/triangle_left.png'

function LeftArrowButton ({ onClick, text, isInvisible, padSize, arrowSize }) {
  let classStr = ""
  if (isInvisible)
    {
      classStr="invisible group-hover:visible " + arrowSize
    }
  else
    {
      classStr=arrowSize
    }
    console.log(classStr)
    return (
      <div className="flex justify-center items-center group">
        <img className={classStr} src={triangleLeft}/>
        <button className={padSize} onClick={onClick}>
          {text}
        </button>
      </div>
    )
}
export default LeftArrowButton