import './headerStyle.css'
const MainHeader = () => {
    return (
        <header>
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <i className="fas fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img
                            src="logo.png"
                            height="25"
                            alt="NotePad Logo"
                            loading="lazy"
                        />
                    </a>
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-bell"></i>
                                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3 me-lg-0" href="#">
                                <i className="fas fa-fill-drip"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="flag-united-kingdom flag m-0"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#"
                                    ><i className="flag-united-kingdom flag"></i>English
                                        <i className="fa fa-check text-success ms-2"></i
                                        ></a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#"><i className="flag-portugal flag"></i>Português</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="logo.png"
                                    className="rounded-circle"
                                    height="22"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader