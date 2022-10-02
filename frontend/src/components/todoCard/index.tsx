import { Link } from 'react-router-dom'
import './style.css'

type paramType = {
    todo: string,
    check: boolean
}
function TodoCard({ todo, check }: paramType) {
    return (
        <div className='todocard border-rounded-3 shadow-sm p-2 mt-3 bg-white d-flex justify-content-start align-items-center'>
            {check?<input type="checkbox" className='form-check-input m-3 fs-3 rounded-circle' />:null}
            <Link to="/todos/todo/23" className='text-decoration-none d-flex align-items-center w-100'>
                <i className='fas fa-heart text-danger m-2'></i>
                <span className='text-black'>{todo.length > 100 ? todo.slice(0, 100) + "..." : todo}</span>
            </Link>
        </div>
    )
}

export default TodoCard