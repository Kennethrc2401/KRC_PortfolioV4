import { Outlet, Link } from "react-router-dom";
import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import styles from "./css/layout.css"
const Layout = () => {
  
  return (
    <>
      <h1 className="title">Layout</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      
    </>
  )
};

export default Layout;