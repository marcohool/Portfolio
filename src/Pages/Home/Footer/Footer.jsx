import { Link } from "react-scroll";
import React from "react";
import "./footer.css"

export default function Footer() {
   return (
      <footer className="footer--container">
         <div className="footer--link--container">
            <div className="footer--items" >
               <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="footer-title-item"
               >
                  Marco
               </Link>
            </div>
            <div className="footer--items">
               <ul>
                  <li>
                     <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="text-md"
                     >
                        Home
                     </Link>
                  </li>

                  <li>
                     <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="About"
                        className="text-md"
                     >
                        About Me
                     </Link>
                  </li>
                  <li>
                     <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MySkills"
                        className="text-md"
                     >
                        Skills
                     </Link>
                  </li>
                  <li>
                     <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className="text-md"
                     >
                        Portfolio
                     </Link>
                  </li>
                  <li>
                     <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact"
                        className="text-md"
                     >
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="footer--social--icon">
               <ul>
                  <li>
                     <a href="https://github.com/marcohool" target="_blank" className="hero--social--icon">
                        <i className="uil uil-github"></i>
                     </a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/marco-b-3244b21a5/" target="_blank" className="hero--social--icon">
                        <i className="uil uil-linkedin"></i>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <hr className="divider" />
         <div className="footer--content--container">
            <p className="footer--content">Made by Marco 💪</p>
         </div>
      </footer>
   );
}