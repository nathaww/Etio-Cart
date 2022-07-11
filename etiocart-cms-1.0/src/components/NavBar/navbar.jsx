import './navbar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

const SideBar = (props) => {

    var el = document.getElementById("wrapper");

    const showBar =()=>{
        el.classList.toggle("toggled");
    }

    var today = new Date();
    var hourNow = today.getHours();
    
    var greeting;

    if (6 >= hourNow < 12) {
        greeting = "Good Morning";
    }
    else if (12 >= hourNow < 18) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }

    return (
        <div className="d-flex" id="wrapper">
            <div className="bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-leaf me-2"></i>Etiocart</div>
                <div className="list-group list-group-flush my-3">
                    <p className="ms-3 bg-transparent text-dark primary-text fw-bold">General</p>
                    <NavLink to='/dashboard' className="list-group-item list-group-item-action bg-transparent second-text "><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</NavLink>
                    <NavLink to='/users' className="list-group-item list-group-item-action bg-transparent second-text"><i
                        className="fas fa-users me-2"></i>User Managment</NavLink>
                    <NavLink to='/notif' className="list-group-item list-group-item-action bg-transparent second-text"><i
                        className="fas fa-bell me-2"></i>Notification</NavLink>
                    <p className="ms-3 bg-transparent text-dark primary-text fw-bold">Uploading</p>
                    <NavLink to='/advert' className="list-group-item list-group-item-action bg-transparent second-text"><i
                        className="fas fa-bullhorn me-2"></i>Advertisment</NavLink>
                    <p className="list-group-item list-group-item-action bg-transparent">Events<i className="fa fa-angle-down ms-2" ></i></p>
                    <NavLink to='/addevents' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-calendar-plus me-2"></i>Add Event</NavLink>
                    <NavLink to='/eventchecker' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-check-circle me-2"></i>Checker</NavLink>
                    <NavLink to='/eventworkflow' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fa fa-chart-line me-2"></i>Workflow</NavLink>
                    {/* <Link className="list-group-item list-group-item-action bg-transparent">Movies<i class="fa fa-angle-down ms-2" ></i></Link>
                    <NavLink to='/addmovie' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fa fa-film me-2"></i>Add Movie</NavLink>
                    <NavLink to='/seats' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-chair me-2"></i>Seats</NavLink>
                    <NavLink to='/moviechecker' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-check-circle me-2"></i>Checker</NavLink> 
                    <NavLink to='/movieworkflow' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fa fa-chart-line me-2"></i>Workflow</NavLink>*/}
                    <p className="list-group-item list-group-item-action bg-transparent">Transport<i class="fa fa-angle-down ms-2" ></i></p>
                    <NavLink to='/addticket' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-ticket-alt me-2"></i>Add Tickets</NavLink>
                    <NavLink to='/req' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-spinner me-2"></i>Requests</NavLink>
                    <NavLink to='/transportchecker' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-check-circle me-2"></i>Checker</NavLink>
                    <NavLink to='/transport' className="list-group-item list-group-item-action bg-transparent second-text ms-4 pt-1 pb-1"><i
                        className="fas fa-chart-pie me-2 mb-3"></i>Dashboard</NavLink>
                    <p className="ms-3 bg-transparent text-dark primary-text fw-bold">Other Settings</p>
                    <NavLink to='/setting' className="list-group-item list-group-item-action bg-transparent second-text "><i
                        className="fas fa-cog me-2"></i>Settings</NavLink>
                    <NavLink to='/profile' className="list-group-item list-group-item-action bg-transparent second-text"><i
                        className="fas fa-user me-2"></i>Edit Profile</NavLink>
                    <NavLink to='/login' className="list-group-item list-group-item-action bg-transparent second-text"><i
                        className="fas fa-power-off me-2"></i>Logout</NavLink>
                </div>
            </div>
                        

            <div className="page-wrapper" >
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4" >
                    <div className="d-flex align-items-center" >

                        <p> <i className="fas fa-bars primary-text fs-4 me-3 toggled" id='menu-toggle' onClick={showBar}></i></p>

                        <p className="fs-4 m-0 font-thin ">{greeting} <i className={greeting === "Good Evening" ? 'fas fa-moon' : 'fas fa-sun'}></i></p>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Dropdown>
                                <Dropdown.Toggle className='bg-transparent border bt border-secondary rounded-pill' id="dropdown-basic">
                                    <i className="fas fa-user me-2 text-white" /> Nathan Solomon
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item><Link className="dropdown-item " to='./profile'><i className="far fa-address-card me-2"></i>Profile</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="dropdown-item " to='./setting'><i className="fas fa-cog me-2"></i>Settings</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="dropdown-item " to='./login'><i className="fas fa-power-off me-2"></i>Logout</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                </nav>
                {props.children}
            </div>
        </div>

       
    );

}
export default SideBar;
