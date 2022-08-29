import './style.css'
import { Link } from 'react-router-dom'

type paramType = {
  note: String
}
function Card({ note }: paramType) {
  return (
    <Link to="/notes/note/23" className=' text-decoration-none'>
      <div className='card border-0 border-rounded-3 shadow-sm p-3 mt-3 bg-white'>
        <p className='text-black'>{note.length > 200 ? note.slice(0, 200) + "..." : note}</p>
        <p className='text-secondary'>2022/2/2 12:03 pm <i className='fas fa-heart text-danger'></i></p>
      </div>
    </Link>
  )
}

export default Card