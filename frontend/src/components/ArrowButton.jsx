import triangleRight from '../assets/triangle_right.png'
import { useNavigate } from 'react-router-dom'

function ArrowButton ({ onClick, text }) {
    // const navigate=useNavigate()
    console.log('Received onClick handler:', {onClick});
    return (
        <div className="flex justify-center items-center group">;
          <img className="invisible group-hover:visible size-1/16" src={triangleRight}/>
          <button className="px-5" onClick={onClick}>
            {text}
          </button>
        </div>
    );
}
export default ArrowButton