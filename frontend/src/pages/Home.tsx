import { Link } from 'react-router-dom'
import noteImg from '../assets/images/note.jpeg'
import todoImg from '../assets/images/todo.jpeg'

function Home() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '60px' }}>
            <h1 className="mt-5 text-info">Welcome to NotePad App</h1>
            <p className='home_p mt-2 opacity-50 mx-3 text-center'>Here you can add, modify notes along with catagories and also you can add todos, modify todos and set reminder for todos.</p>
            <div className="d-flex justify-content-around w-50 mt-2">
                <div className='home-card w-50 sm-w-100 bg-white rounded shadow-sm m-5 p-4'>
                    <Link to="/notes" className='text-decoration-none text-black-50 text-center'>
                        <p className='fs-4'>let's write some notes</p>
                        <img src={noteImg} className="img-fluid"/>
                    </Link>
                </div>
                <div className='home-card w-50 sm:w-100 bg-white rounded shadow-sm m-5 p-4'>
                    <Link to="/todos" className='text-decoration-none text-black-50 text-center'>
                        <p className='fs-4'>let's add some todos</p>
                        <img src={todoImg} className="img-fluid"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home