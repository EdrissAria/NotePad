import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '60px' }}>
            <h1 className="mt-5 text-info">Welcome to Note Pad Application</h1>
            <p className='mt-2 opacity-50'>Here you can add, modify notes along with catagories and also you can add todos, modify todos and set reminder for todos.</p>
            <div className="d-flex justify-content-around w-50 mt-3">
                <div className=' w-50 bg-white rounded shadow-sm m-5 p-4'>
                    <Link to="/notes" className='text-decoration-none text-black-50'>
                        let's add some notes
                    </Link>
                </div>
                <div className=' w-50 bg-white rounded shadow-sm m-5 p-4'>
                    <Link to="/todos" className='text-decoration-none text-black-50'>
                        let's make todos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home