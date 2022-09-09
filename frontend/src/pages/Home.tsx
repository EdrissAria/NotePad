import { Link } from 'react-router-dom'
import noteImg from '../assets/images/note.jpeg'
import todoImg from '../assets/images/todo.jpeg'

function Home() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '60px' }}>
            <h1 className="mt-5 text-info">Welcome to NotePad App</h1>
            <p className='mt-2 opacity-50'>Here you can add, modify notes along with catagories and also you can add todos, modify todos and set reminder for todos.</p>
            <div className="d-flex justify-content-around w-50 mt-2">
                <div className=' w-50 bg-white rounded shadow-sm m-5 p-4'>
                    <Link to="/notes" className='text-decoration-none text-black-50 text-center'>
                        <p className='fs-4'>let's add some notes</p>
                        <img src={noteImg} />
                    </Link>
                </div>
                <div className='w-50 bg-white rounded shadow-sm m-5 p-4'>
                    <Link to="/todos" className='text-decoration-none text-black-50 text-center'>
                        <p className='fs-4'>let's make todos</p>
                        <img src={todoImg} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home