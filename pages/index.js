import Link from "next/link";
import Header from "../components/header";

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
   
   <section>
  <a> 2018 </a>
    </section>
 
    <section>
  <a> 2017 </a>
    </section>
 
    <section>
  <a> 2016 </a>
    </section>
 
    <section>
  <a> 2015 </a>
    </section>
 
    <section>
  <a> 2014 </a>
    </section>
  </main>
);
