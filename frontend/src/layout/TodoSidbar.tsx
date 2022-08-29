import { Link, Outlet } from 'react-router-dom'

function TodoSidbar() {
    return (
        <>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white overflow-auto">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link
                            to="/todos"
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"
                        >
                            <i className="fas fa-clipboard-list fa-fw me-3"></i>
                            <span>All To-dos</span><span className="float-end text-black-50">0</span>
                        </Link>
                        <Link to="deletedTods" className="list-group-item list-group-item-action py-2 ripple last-item"
                        ><i className="fas fa-trash fa-fw me-3"></i><span>Recently deleted</span><span className="float-end text-black-50">0</span></Link
                        >
                        <div className="seperator"></div>
                        <div className="catagory-header d-flex justify-content-between align-items-center my-2">
                            <h6 className="text-uppercase text-black-50 m-0">catagories</h6>
                            <Link to="editTodoCats" className="text-uppercase text-decoration-none">edit</Link>
                        </div>
                        <Link to="/todos/work" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-envelope-square fa-fw me-3"></i><span>Work</span><span className="float-end text-black-50">0</span></Link
                        >
                        <Link to="/todos/personal" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-pie fa-fw me-3"></i><span>Personal</span><span className="float-end text-black-50">0</span>
                        </Link>
                        <Link to="/todos/life" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Life</span><span className="float-end text-black-50">0</span>
                        </Link>
                        <Link to="/todos/shopping" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-globe fa-fw me-3"></i><span>Shopping</span><span className="float-end text-black-50">0</span>
                        </Link>
                        <Link to="/todos/partners" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span><span className="float-end text-black-50">0</span>
                        </Link>
                        <Link to="/todos" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-calendar fa-fw me-3"></i><span>No catagory</span><span className="float-end text-black-50">0</span>
                        </Link>
                        <Link to="#" className="py-2 ripple text-decoration-none"
                        >New</Link
                        >
                        <div className="seperator"></div>
                        <Link to="/settings" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-circle fa-fw me-3"></i><span>Settings</span></Link
                        >
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default TodoSidbar