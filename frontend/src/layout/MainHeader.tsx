import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import DropDown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const MainHeader = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false)
    return (
        <>
            <header>
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        {
                            location.pathname.includes('notes') && <button
                                className="navbar-toggler  border-0 btn-outline-light"
                                type="button"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <i className="fas fa-close"></i> : <i className="fas fa-bars"></i>}
                            </button> || location.pathname.includes('todos') && <button
                                className="navbar-toggler me-3 border-0"
                                type="button"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <i className="fas fa-close"></i> : <i className="fas fa-bars"></i>}
                            </button> || ''
                        }
                        <div className='d-flex align-items-center m-0'>
                            <Link className="navbar-brand p-0" to="/">
                                <img src={logo} alt="logo" style={{width: '50px', margin: '0'}}/>
                            </Link>
                        </div>
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            <DropDown>
                                <DropDown.Toggle variant='defualt' id="dropdown_menu"
                                    className="hidden-arrow border-0 fs-5"
                                >
                                    {location.pathname.includes('notes') && 'Notes' || location.pathname.includes('todos') && 'Todos' || 'Notes'}
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
                            <div className='d-flex align-items-center mx-2'>
                                <Link to="" className='bell'>
                                    <i className='fas fa-bell'></i>
                                    <span className="badge rounded-pill bg-danger">1</span>
                                </Link>
                            </div>
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
            <Outlet context={{ open, setOpen }} />
        </>
    )
}

export default MainHeader