import {useState} from 'react'
import TitleBar from "../components/titlebar"
import Searchbar from "../components/searchbar"
import TodoCard from "../components/todoCard"
import NewTodoModal from "../components/newTodoModal"

function Alltodos() {
  const [show, setShow] = useState(false); 
  const handleShow = () => setShow(!show); 
  const handleClose = () => setShow(!show); 
  return (
    <main>
      <NewTodoModal handleClose={handleClose} show={show}/>
      <div className="container">
        <TitleBar title="All to-dos" buttonLabel="new todo" type="todo" handleShow={handleShow}/>
        <Searchbar />
        <TodoCard todo="something todo" check/>
        <TodoCard todo="something todo" check/>
        <TodoCard todo="something todo" check/>
        <TodoCard todo="something todo" check/>
      </div>
    </main>
  )
}

export default Alltodos