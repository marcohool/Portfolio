import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css"

function NavBar() {
   const [navActive, setNavActive] = useState(false);

   const toggleNav = () => {
      setNavActive(!navActive);
   };

   const closeMenu = () => {
      setNavActive(false);
   };

   useEffect(() => {
      const handleRezise = () => {
         if (window.innerWidth <= 500) {
            closeMenu();
         }
      }
      window.addEventListener("resize", handleRezise)

      return () => {
         window.removeEventListener("resize", handleRezise);
      }
   }, []);

   useEffect(() => {
      if (window.innerWidth <= 1200) {
         closeMenu();
      }
   }, []);

   return (
      <nav className={`navbar ${navActive ? "active" : ""}`}>
         <div>
            <img src="./img/logo.svg" alt="Logo" />
         </div>
         <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
         </a>
         <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
               <li>
                  <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">Home</Link>
               </li>
               <li>
                  <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Portfolio</Link>
               </li>
               <li>
                  <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="About" className="navbar--content">About Me</Link>
               </li>

            </ul>
         </div>
         <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">Contact Me</Link>
      </nav>
   )
}

export default NavBar;