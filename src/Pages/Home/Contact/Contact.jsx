import "./contact.css"

export default function Contact() {
   return (
      <section id="Contact" className="contact--section">
         <div>
            <p className="sub--title">Get In Touch</p>
            <h2>Contact Me</h2>
            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolor praesentium accusamus deserunt illum ab cumque quisquam saepe expedita odio, aspernatur assumenda magni repellendus impedit quas neque, ut quia rem?</p>
         </div>
         <form className="contact--form--container">
            <div className="container">
               <label htmlFor="first-name" className="contact--label">
                  <span className="text-md">First Name</span>
                  <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
               </label>
               <label htmlFor="last-name" className="contact--label">
                  <span className="text-md">Last Name</span>
                  <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
               </label>
            </div>
            <label htmlFor="email" className="contact--label">
               <span className="text-md">Email</span>
               <input type="email" className="contact--input text-md" name="email" id="email" required />
            </label>
            <label htmlFor="message" className="contact--label">
               <span className="text-md">Message</span>
               <textarea className="contact--input text-md" id="message" rows="8" placeholder="Type your message..." />
            </label>
            <div>
               <button className="btn btn-primary contact--form--btn">Submit</button>
            </div>
         </form>
      </section >
   )
}