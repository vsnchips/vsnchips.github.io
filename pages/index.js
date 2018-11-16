import Link from "next/link";
import Header from "../components/header";
//import ScrollMenu from 'react-horizontal-scrolling-menu'

const list = [
  { name : '2018'},
  { name : '2017'},
  { name : '2016'},
  { name : '2015'},
  { name : '2014'}
];

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Biography Page</a>
      </Link>
    </section>
 
  <section>
  <a>
  Hello. This is a fresh new site. I have a lot to migrate. In the meantime, please, enjoy these links :)
  </a>
  </section>
  
  <section>
  <a> 2018 </a>
  </section>
 
  <section>
  <a> 2017 </a>
  </section>
 
    <section>
  <a> 2016 </a>
  <a href='https://vimeo.com/190215155'> Digital Creation Project Three:Atlas</a>
  <a href='https://www.facebook.com/daniel.aston.75/media_set?set=a.10157669635985717&type=3'>  Industrial Design Projects</a>
  <a href='https://vimeo.com/183779731'>  The Lumenbot </a>
  <a href=' https://vimeo.com/170895434'> I.RYOKO - Opening (Unofficial Video)</a>
  </section>
 
    <section>
  <a> 2015 </a>
  <a href='https://facebook.com/vsnchips'> A whole bunch of gigs</a>
    </section>
 
    <section>
  <a> 2014 </a>
  <a>Fringe Festival: Welcome Home </a>
  <a href= " ">Fringe Festival: Hallelujah Society</a>
    </section>
  </main>
);
