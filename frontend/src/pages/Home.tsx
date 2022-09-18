import { Link } from 'react-router-dom'
import noteImg from '../assets/images/note.jpeg'
import todoImg from '../assets/images/todo.jpeg'

function Home() {
    return (
        <div className='container'>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{marginTop: '60px'}}>
                <div className="text-center">
                    <h1 className="text-info mt-5">Welcome to NotePad app</h1>
                    <p className='text-secondary mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti earum porro quam obcaecati voluptates debitis quo voluptatum ipsam eius, nisi sequi nihil nostrum saepe, sunt ex optio ut sit.</p>
                </div>
                <div className="row">
                    <div className='home-card rounded p-4 shadow-lg text-center bg-light col-11 mt-4 col col-sm-11 col-md-5 mx-4'>
                        <p className="fs-4">Let's write some notes</p>
                        <Link to="/notes">
                            <img src={noteImg} className="img-fluid mt-2"></img>
                        </Link>
                    </div>
                    <div className='home-card rounded p-4 shadow-lg text-center bg-light col-11 mt-4 col col-sm-11 col-md-5 mx-4'>
                        <p className="fs-4">Let's write some notes</p>
                        <Link to="/notes">
                            <img src={todoImg} className="img-fluid mt-2"></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home