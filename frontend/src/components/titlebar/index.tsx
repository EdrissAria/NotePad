import './style.css'
import {Link} from 'react-router-dom'

function TitleBar() {
  return (
    <div className="d-flex justify-content-between mb-2 align-items-center">
        <h1 className="title">All notes</h1>
        <Link to="addNote" className="add-btn text-decoration-none text-white">new note</Link>
    </div>
  )
}

export default TitleBar