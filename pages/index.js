import Link from "next/link";
import Header from "../components/header";

import ScrollMenu from 'react-horizontal-scrolling-menu'

const list = [
  { name : '2018'},
  { name : '2017'},
  { name : '2016'},
  { name : '2015'},
  { name : '2014'}
];

export const Menu = (list) => list.map(el=>{
  const { name } = el;
  return ( <MenuItem
    text = {name}
    key={name}
    />
  );
});
const MenuItem = ({text,selected}) => {
  return(
    <div className = "menu-item">
    {text}
    </div>
  );};

const selected = this.state;

const menu = Menu(list, selected);

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
 
  <ScrollMenu
    data={menu}
    arrowLeft={ArrowLeft}
    arrowRight={ArrowRight}
    selected={selected}
    onSelect={this.onSelect}
  />

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


