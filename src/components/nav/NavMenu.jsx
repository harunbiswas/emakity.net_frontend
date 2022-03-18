import { useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  const navRef = useRef();

  const toggleHnadler = () => {
    navRef.current.classList.toggle("open");
  };

  return (
    <nav id="nav" className="nav-menu">
      <div onClick={toggleHnadler} className="nav-toggle-btn">
        <HiOutlineMenu />
      </div>
      <div className="container">
        <ul ref={navRef} className="nav-menu-item-wrapper">
          <li className="nav-menu-item">
            <NavLink
              activeclassname="active"
              className="nav-menu-item-link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              className="nav-menu-item-link"
              activeclassname="active"
              to="/store"
            >
              Stores
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              className="nav-menu-item-link"
              activeclassname="active"
              to="/product"
            >
              Vendor
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              className="nav-menu-item-link"
              activeclassname="active"
              to="/about"
            >
              About us
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              className="nav-menu-item-link"
              activeclassname="active"
              to="/acount"
            >
              My Account
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
