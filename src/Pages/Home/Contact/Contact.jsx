import "./contact.css"
import { HiOutlineMail, HiOutlineArrowSmRight } from 'react-icons/hi'

export default function Contact() {
   return (
      <section id="Contact" className="contact--section container">
         <div className="contact--titles--container">
            <p className="section--subtitle">Contact Me</p>
            <h2 className="section--title">Get In Touch</h2>
         </div>
         <div className="contact--grid">
            <div className="email--me--section">
               {/* <h3 className="contact--title">Email me</h3> */}
               <div className="contact--content">
                  <HiOutlineMail className="contact--card--icon" />

                  <h3 className="contact--card-title">Email</h3>
                  <span className="contact--card--data">marco.boutchelski@gmail.com</span>

                  <a href="mailto:marco.boutchelski@gmail.com" className="contact--button">
                     Email Me{" "}
                     <HiOutlineArrowSmRight className="link--button" />
                  </a>
               </div>
            </div>

            <form className="contact--form--container">
               <label htmlFor="name" className="contact--label">
                  <span className="text-md">Name</span>
                  <input
                     type="text"
                     className="contact--input text-md"
                     name="name"
                     id="name"
                     placeholder="Type your name"
                     required
                  />
               </label>
               <label htmlFor="email" className="contact--label">
                  <span className="text-md">Email</span>
                  <input
                     type="email"
                     className="contact--input text-md"
                     name="email"
                     id="email"
                     placeholder="Type your email"
                     required
                  />
               </label>
               <label htmlFor="message" className="contact--label">
                  <span className="text-md">Message</span>
                  <textarea
                     className="contact--input text-md"
                     id="message"
                     rows="8"
                     placeholder="Type your message..."
                  />
               </label>

               <div className="submit--button--section">
                  <button className="btn btn-primary contact--form--btn btn-unavailable" disabled>Form Temporarily Unavailable</button>
               </div>
            </form>
         </div>
      </section >
   )
}