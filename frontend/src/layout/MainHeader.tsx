import {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import DropDown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom'

const MainHeader = () => {
    const location = useLocation(); 
    const [open, setOpen] = useState(false)
    return (
        <>
            <header>
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler me-3"
                            type="button" 
                            onClick={()=> setOpen(!open)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            <DropDown>
                                <DropDown.Toggle variant='defualt' id="dropdown_menu"
                                    className="hidden-arrow border-0 fs-5"
                                >
                                    {location.pathname.includes('notes') && 'Notes' || location.pathname.includes('todos') && 'Todos' || 'Home'}
                                </DropDown.Toggle>
                                <DropDown.Menu>
                                    <DropDown.Item>
                                        <Link to="/notes" className='text-decoration-none text-black d-block'>Notes</Link>
                                    </DropDown.Item>
                                    <DropDown.Divider />
                                    <DropDown.Item>
                                        <Link to="/todos" className='text-decoration-none text-black d-block'>Todos</Link>
                                    </DropDown.Item>
                                </DropDown.Menu>
                            </DropDown>
                            <DropDown>
                                <DropDown.Toggle
                                    variant="default"
                                    id="profile_dropdown"
                                    className='border-0'
                                >
                                    <i className="fas fa-user"></i>
                                </DropDown.Toggle>
                                <DropDown.Menu>
                                    <DropDown.Item>
                                        <Link className="text-decoration-none text-black d-block" to="profile">My profile</Link>
                                    </DropDown.Item>
                                    <DropDown.Item>
                                        <Link className="text-decoration-none text-black d-block" to="">Logout</Link>
                                    </DropDown.Item>
                                </DropDown.Menu>
                            </DropDown>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet context={{open, setOpen}}/>
        </>
    )
}

export default MainHeader