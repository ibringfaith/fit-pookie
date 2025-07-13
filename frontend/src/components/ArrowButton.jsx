// import triangleRight from '../assets/triangle_right.png'

export function ArrowButton () {
    return (
        <div class = "flex justify-center items-center group">
          <img class="invisible group-hover:visible size-1/16" src={triangleRight}/>
          <button class="px-5"></button>
        </div>
    )
}