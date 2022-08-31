import './style.css'
import {Link} from 'react-router-dom'

type paramType={
  title: string, 
  buttonLabel?: string, 
  type: "todo" | "note" | "none"
  handleShow?: () => void
}

function TitleBar({title, buttonLabel, type, handleShow}: paramType) {
  return (
    <div className="d-flex justify-content-between mb-2 align-items-center pt-4">
        <h1 className="title">{title}</h1>
        {
        type != "none"?(type == "note"?
        <Link to="/notes/addnote" className="add-btn text-decoration-none text-white">{buttonLabel}</Link>:
        <button onClick={handleShow} className="add-btn text-decoration-none text-white">{buttonLabel}</button>
        ):
        null
        }
    </div>
  )
}

export default TitleBar