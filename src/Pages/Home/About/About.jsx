import "./about.css"

export default function About() {
   return (
      <section id="About" className="about--section">
         <div className="about--section--img">
            <img src="./img/about.png" alt="About me" />
         </div>
         <div className="hero--section--content--box about--section--box">
            <div className="her--section--content">
               <p className="section--title">About</p>
               <h1 className="skills--section--heading">
                  About Me
               </h1>
               <p className="hero--section--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet hic facere expedita nulla repellat, dolores enim repudiandae incidunt rerum ducimus veritatis deleniti voluptas blanditiis. Rem nulla explicabo dolor aperiam!</p>
               <p className="hero--section--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet hic facere expedita nulla repellat, dolores enim repudiandae incidunt rerum ducimus veritatis deleniti voluptas blanditiis. Rem nulla explicabo dolor aperiam!</p>
            </div>
         </div>
      </section>
   )
}