

export default function HeroSection() {
   return (
      <section id="heroSection" className="hero--section">
         <div className="hero--section--content--box">
            <div className="hero--section--content">
               <p className="section--title">Hello, I'm Marco</p>
               <h1 className="hero--section--title">
                  <span className="hero--section--title--colour">Computer Science BSc</span> {" "}
                  <br />
                  Graduate
               </h1>
               <p className="hero--section--description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, similique labore neque voluptatem eos corrupti cumque eligendi necessitatibus mollitia earum pariatur vitae quasi, facere temporibus distinctio numquam dignissimos, suscipit ut?
               </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
         </div>
         <div className="hero--section--img">
            <img src="./img/hero_image.png" alt="Hero Section"></img>
         </div>
      </section>

   )
}

