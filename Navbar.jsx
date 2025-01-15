import React, { useState, useEffect } from "react";
import logoimage from "../assets/logoimage.jpg";
import { Link } from "react-router-dom"; // Correct import
import { FaSearch } from "react-icons/fa";
import { TiThList } from "react-icons/ti";
import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <div className="navbar bg-[#E8E8E8] overflow-hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logoimage} alt="logoimage" className="w-44" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-blue-950 font-semibold text-base">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/practiceareas">Practice Areas</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/carrier">Carriers</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        <div className="drawer -mr-96">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button bg-transparent border-none hover:bg-transparent"
            >
              <FaSearch />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 bg-transparent text-base-content min-h-full w-full p-4 flex items-center justify-center">
              <li><input type="text" placeholder="Search" className="w-[50vw] h-[6vh] bg-white" /></li>
              <li><button>Search</button></li>
            </ul>
          </div>
        </div>

        <div className="navbar-end ml-80 mr-0">
          {/* Drawer icon */}
          <div className="drawer drawer-end ml-1 -mr-40">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button bg-transparent text-blue-950 hover:bg-blue-950 border-none text-3xl"
              >
                <TiThList />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li className="text-4xl text-teal-800"><Link to="/about">About</Link></li>
                <li className="text-4xl text-teal-800"><Link to="/people">People</Link></li>
                <li className="text-4xl text-teal-800"><Link to="/blog">Blogs</Link></li>
                <li className="text-4xl text-teal-800"><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="gap-y-1">
            <a href="#" className="w-24 text-4xl mr-16 mt-11 text-black"><IoPersonCircleSharp /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
