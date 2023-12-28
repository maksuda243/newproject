import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";
import "../Layout/layout.css";

function Dashboard() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="grid-container">
      <Nav />
      <Sidebar />
      <div className="content"><br />
        <h1 className="text-center">Dashboard Content</h1>
        <div className="row justify-content-end p-4 m-1">
          <div className="col-md-3 mb-1 m-1 ">
            <div className="card bg-primary text-white custom-card">
              <div className="card-body">
                <h5 className="card-title">Total Orders</h5>
                <p className="card-text">Some quick example text to build on the card title.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-1">
            <div className="card bg-success text-white custom-card">
              <div className="card-body">
                <h5 className="card-title">Total Delivered Products</h5>
                <p className="card-text">Some quick example text to build on the card title.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-1">
            <div className="card bg-warning text-dark custom-card">
              <div className="card-body">
                <h5 className="card-title">Total Cancelled Products</h5>
                <p className="card-text">Some quick example text to build on the card title.</p>
              </div>
            </div>
          </div>
          <div className="row offset-md-3 ">
            <div className="col-md-6  ">
              <h2 className= "mt-5" style={{ color: 'blue' }}>TITLE HEADING</h2>
              <h5><strong>Title description, Dec 7, 2020</strong></h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div className="col-md-6">
              <h2 className="mt-5" style={{ color: 'blue' }}>TITLE HEADING</h2>
              <h5><strong>Title description, Sep 2, 2020</strong></h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Dashboard


























// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



// function Dashboard() {
//     const userLogged = JSON.parse(localStorage.getItem("userdata"));
//     return (
//         <div>
//             <h1>Hi {userLogged.name},</h1>
//             <img src={`http://localhost/reactcrud/api/${userLogged.image}`} alt="" />
//         </div>
//     );
// }

// export default Dashboard;