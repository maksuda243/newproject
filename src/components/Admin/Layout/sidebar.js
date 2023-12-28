import React from "react";
import './layout.css';



function Sidebar() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="col-3">
      <div className="dashboard-sidebar">
        <div className="dashboard-user-image">
          <img width={50} src={`http://localhost/reactcrud/api/${userLogged.image}`} alt="" />
        </div>

        <a className="navbar-brand" href="#">
          Hi, {userLogged.name}
        </a>
        <hr style={{ background: "#fffffff" }} />
        <a href="javascript:void(0)" className="dashboard-nav-link">
          
            <i class="fas fa-tachometer-alt"></i> Admin</a>
                <a href="./" className="dashboard-nav-link"><i className="fas fa-globe"></i> Website</a>
                <a href="./product" className="dashboard-nav-link"><i className="fas fa-box"></i> Products</a>
                <a href="./blogs" className="dashboard-nav-link">  <i className="fas fa-blog"></i> Blog</a>
                <a href="./coupon" className="dashboard-nav-link"><i className="fas fa-user"></i> Coupons</a>
                <a href="./order" className="dashboard-nav-link"><i className="fas fa-user"></i> Orders</a>
                <a href="./settings" className="dashboard-nav-link"> <i className="fas fa-cog"></i> Settings</a> 
      </div>
    </div>
  )
}

export default Sidebar; 