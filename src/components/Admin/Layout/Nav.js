import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './layout.css';


function Nav() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    const [searchQuery, setSearchQuery] = useState(""); // State for search query

    const handleSearch = () => {
        // Add logic for handling search here
        console.log("Search Query:", searchQuery);
    };
    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/dashboard"><strong>MaleFashion</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="./Product">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./Blogs">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">Users</a>
                    </li>
                </ul>
                <img width={50} src={`http://localhost/reactcrud/api/${userLogged.image}`} alt="" />
                <form className="form-inline my-2 my-lg-0">
                   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
            </div>
        </div>
    </nav>
    );
}

export default Nav;