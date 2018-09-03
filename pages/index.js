import Link from 'next/link'

const Index = () => (
    <div>
    <p> Hello Next.js</p>
  <p>
    <Link href="/about">
      <a style ={{ font: "Roboto"}} >About Page</a>
    </Link></p>
  </div>
    )
export default Index
