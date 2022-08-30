import './style.css'
import {Link} from 'react-router-dom'

type paramType={
  title: String, 
  buttonLabel: String
}

function TitleBar({title, buttonLabel}: paramType) {
  return (
    <div className="d-flex justify-content-between mb-2 align-items-center">
        <h1 className="title">{title}</h1>
        
        {
        buttonLabel != ""?
        <Link to="/notes/addnote" className="add-btn text-decoration-none text-white">new note</Link>:
        null
        }
    </div>
  )
}

export default TitleBar