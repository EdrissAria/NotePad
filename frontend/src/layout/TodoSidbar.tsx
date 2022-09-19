import { useState } from 'react'
import { NavLink, Link, Outlet, useOutletContext } from 'react-router-dom'
import NewCatModal from '../components/newCatModal'

function Sidebar() {
    const { open} = useOutletContext<any>();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show)
    const handleClose = () => setShow(!show)
    return (
        <>
            <NewCatModal show={show} handleClose={handleClose} />
            <nav id="sidebarMenu" className={`collapse d-lg-block ${open?'d-block':''} sidebar bg-white overflow-auto`}>
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mb-4 mt-2 list">
                        <NavLink
                            to="/todos"
                            end
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"
                        >
                            <i className="fas fa-clipboard-list fa-fw me-3"></i>
                            <span>All To-dos</span><span className="float-end">0</span>
                        </NavLink>
                        <NavLink to="deletedTodos" className="list-group-item list-group-item-action py-2 ripple last-item"
                        ><i className="fas fa-trash-can fa-fw me-3"></i><span>Recently deleted</span><span className="float-end">0</span></NavLink
                        >
                        <div className="seperator bg-primary"></div>
                        <div className="catagory-header d-flex justify-content-between align-items-center my-2">
                            <h6 className="text-uppercase m-0">catagories</h6>
                            <NavLink to="editTodoCats" className="edit text-uppercase text-decoration-none">edit</NavLink>
                        </div>
                        <NavLink to="/todos/work" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-clipboard-check fa-fw me-3"></i><span>Work</span><span className="float-end">0</span></NavLink
                        >
                        <NavLink to="/todos/personal" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-clipboard-check fa-fw me-3"></i><span>Personal</span><span className="float-end">0</span>
                        </NavLink>
                        <NavLink to="/todos/life" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-clipboard-check fa-fw me-3"></i><span>Life</span><span className="float-end">0</span>
                        </NavLink>
                        <NavLink to="/todos/shopping" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-clipboard-check fa-fw me-3"></i><span>Shopping</span><span className="float-end">0</span>
                        </NavLink>
                        <NavLink to="/todos/partners" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-clipboard-check fa-fw me-3"></i><span>Partners</span><span className="float-end">0</span>
                        </NavLink>
                        <NavLink to="/todos/nocatagory" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-clipboard-check fa-fw me-3"></i><span>No catagory</span><span className="float-end">0</span>
                        </NavLink>
                        <button onClick={handleShow} className="border-0 bg-white text-primary py-2 ripple text-decoration-none text-start"
                        >New</button
                        >
                        <div className="seperator bg-primary"></div>
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

export default Sidebar