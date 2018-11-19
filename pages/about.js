import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
          <p>
      Hi, I'm Dan. I've been on the Earth since 1989.
      I'm a visual artist, designer, mechanic, and computer graphics engineer.
      
      I began programming around 2000, using the 2D edition of blitz BASIC.
      My first exercises included writing a basic rasteriser for drawing and rotating 3D wireframes,
      and an autostereogram (magic-eye) generator. 

          </p>
     <p>
      Throughout highschool I studied painting and design, while continuing to develop digital skills
      through music visualisation with Winamp's AVS, and mod development.<br />
      In 2003 I joined the development team for 'Galactic Conquest', star wars conversion mod for battlefield 1942. I took on the role of a world designer.
         I especially enjoyed the overall process of look development for each world, including the painterly process of
      generative texturing, terrain sculpting, and color matching the dynamic light settings with the static environmental assets
    </p>
    <p>
      
    </p>
    <p>
      I attended Elam School of Fine Arts in 2008 and 2009.
      At the time I was focused on painting, and generative film.
    </p>
    <p>
      I have lived in Wellington since 2010. I am currently studying a Bachelor of Design Innovation at Victoria.
      My studies include a minor in Computer Science with a focus on image based & real time computer graphics.
    </p>
    <p>
    </p>
    </section>

    
     </main>
    );
  }
}

export default AboutPage;
