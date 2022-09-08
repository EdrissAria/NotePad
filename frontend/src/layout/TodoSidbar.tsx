import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NewCatModal from '../components/newCatModal'

function TodoSidbar() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show)
    const handleClose = () => setShow(!show)
    return (
        <>
            <NewCatModal show={show} handleClose={handleClose} />
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white overflow-auto">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <NavLink
                            to="/todos"
                            end
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"
                        >
                            <i className="fas fa-clipboard-check fa-fw me-3"></i>
                            <span>All To-dos</span><span className="float-end text-black-50">0</span>
                        </NavLink>
                        <NavLink to="/todos/deletedTodos" className="list-group-item list-group-item-action py-2 ripple last-item"
                        ><i className="fas fa-trash-can fa-fw me-3"></i><span>Recently deleted</span><span className="float-end text-black-50">0</span></NavLink
                        >
                        <div className="seperator"></div>
                        <div className="catagory-header d-flex justify-content-between align-items-center my-2">
                            <h6 className="text-uppercase text-black-50 m-0">catagories</h6>
                            <NavLink to="editTodoCats" className="text-uppercase text-decoration-none">edit</NavLink>
                        </div>
                        <NavLink to="/todos/work" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-envelope-square fa-fw me-3"></i><span>Work</span><span className="float-end text-black-50">0</span></NavLink
                        >
                        <NavLink to="/todos/personal" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-pie fa-fw me-3"></i><span>Personal</span><span className="float-end text-black-50">0</span>
                        </NavLink>
                        <NavLink to="/todos/life" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Life</span><span className="float-end text-black-50">0</span>
                        </NavLink>
                        <NavLink to="/todos/shopping" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-globe fa-fw me-3"></i><span>Shopping</span><span className="float-end text-black-50">0</span>
                        </NavLink>
                        <NavLink to="/todos/partners" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span><span className="float-end text-black-50">0</span>
                        </NavLink>
                        <NavLink to="/todos/nocatagory" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-calendar fa-fw me-3"></i><span>No catagory</span><span className="float-end text-black-50">0</span>
                        </NavLink>
                        <button onClick={handleShow} className="border-0 bg-white text-primary py-2 ripple text-decoration-none text-start"
                        >New</button
                        >
                        <div className="seperator"></div>
                        <NavLink to="/settings" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-gear fa-fw me-3"></i><span>Settings</span></NavLink
                        >
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default TodoSidbar