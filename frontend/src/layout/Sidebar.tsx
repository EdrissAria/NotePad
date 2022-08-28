function Sidebar() {
  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <a
                            href="#"
                            className="list-group-item list-group-item-action py-2 ripple active"
                            aria-current="true"
                        >
                            <i className="fas fa-clipboard-list fa-fw me-3"></i>    
                            <span>All notes</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-heart fa-fw me-3"></i><span>My favourites</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple last-item"
                        ><i className="fas fa-trash fa-fw me-3"></i><span>Recently deleted</span><span className="float-end text-black-50">0</span></a
                        >
                        <div className="seperator"></div>
                        <div className="catagory-header d-flex justify-content-between align-items-center my-2">
                            <h6 className="text-uppercase text-black-50 m-0">catagories</h6>
                            <a href="#" className="text-uppercase text-decoration-none">edit</a>
                        </div>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-envelope-square fa-fw me-3"></i><span>Work</span><span className="float-end text-black-50">0</span></a
                        >
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-pie fa-fw me-3"></i><span>Personal</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Life</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-globe fa-fw me-3"></i><span>Shopping</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-calendar fa-fw me-3"></i><span>No catagory</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="py-2 ripple text-decoration-none"
                        >New</a
                        >
                        <div className="seperator"></div>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-circle fa-fw me-3"></i><span>Settings</span></a
                        >
                        <a
                            href="#"
                            className="list-group-item list-group-item-action py-2 ripple active"
                            aria-current="true"
                        >
                            <i className="fas fa-clipboard-list fa-fw me-3"></i>    
                            <span>All notes</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-heart fa-fw me-3"></i><span>My favourites</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple last-item"
                        ><i className="fas fa-trash fa-fw me-3"></i><span>Recently deleted</span><span className="float-end text-black-50">0</span></a
                        >
                        <div className="seperator"></div>
                        <div className="catagory-header d-flex justify-content-between align-items-center my-2">
                            <h6 className="text-uppercase text-black-50 m-0">catagories</h6>
                            <a href="#" className="text-uppercase text-decoration-none">edit</a>
                        </div>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-envelope-square fa-fw me-3"></i><span>Work</span><span className="float-end text-black-50">0</span></a
                        >
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-pie fa-fw me-3"></i><span>Personal</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Life</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-globe fa-fw me-3"></i><span>Shopping</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-calendar fa-fw me-3"></i><span>No catagory</span><span className="float-end text-black-50">0</span>
                        </a>
                        <a href="#" className="py-2 ripple text-decoration-none"
                        >New</a
                        >
                        <div className="seperator"></div>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-circle fa-fw me-3"></i><span>Settings</span></a
                        >
                    </div>
                </div>
            </nav> 
  )
}

export default Sidebar