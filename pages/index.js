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
  <a>
  Hello. This is a fresh new site. I have a lot to migrate. In the meantime, please, enjoy these links :)
  <br />
  </a>
  <br />
  </section>
 
  <section>
  <Link href="/about">
  <a>Biography Page
  <br />
  </a>
  </Link>
  <br />
  </section>

  <section>
  <a> 2018 </a>
  <br /><a href='https://github.com/vsnchips/RNDR18'>RNDR18 End of year exhibition interactive signage</a>
  <br /><a href='https://github.com/vsnchips/bvh-builder-nocuda'>CGRA350 Final Project: Agglomerative Bounding Volume Heirarchy.</a>
  <br /><a href='https://github.com/vsnchips/skeleton-animation-editor'>Skeleton Animation Editor</a>
  <br /><a href=' '>Lightfield Integrator</a>
  <br /><a href=' '>Video Stabiliser in OpenCV</a>
  <br />
  <br />
  </section>
  <section>
  <a> 2017 </a>
  <br /><a href='http://www.purview.nz/versions/385c0ca578d27fd55751b8351924df93.html'> Machine Learning: t-distributed stochastic neighbor embedding of landscape photography</a>
  <br /><a href='https://www.facebook.com/daniel.aston.75/media_set?set=a.10159598793570717&type=3'>Graphics: Multi-threaded Monte Carlo Raytracing on the C++<br /></a>
  <br /><a href=''></a>
  </section>
  <section>
  <a> 2016 </a>
  <br /><a href='https://vimeo.com/190215155'> Digital Creation Project Three:Atlas</a>
  <br /><a href='https://www.facebook.com/daniel.aston.75/media_set?set=a.10157669635985717&type=3'>  Industrial Design Projects</a>
  <br /><a href='https://vimeo.com/183779731'>  The Lumenbot </a>
  <br /><a href=' https://vimeo.com/170895434'> I.RYOKO - Opening (Unofficial Video)<br /></a>
  <br />
  </section>
  <section>
  <a> 2015 </a>
  <a href='https://facebook.com/vsnchips'> A whole bunch of gigs<br /></a>
  <br />
  </section>

  <section>
  <a> 2014 </a>
  <a>Fringe Festival: Welcome Home </a>
  <a href= " ">Fringe Festival: Hallelujah Society<br /></a>
  </section>
  </main>
);
