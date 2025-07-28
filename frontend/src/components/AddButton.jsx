import addButton from '../assets/add_button.png'

export function AddButton({ onClick })
{
    return (
      <>
          <button onClick={onClick}>
            <img src={addButton}/>
          </button>
      
      </>
    )
}