import Nav from './Nav'
import Content from './content'
import Menu1 from './menu1'
import Poptour from './poptour'
import Discover from './discover'
import Footer from './footer'
export default function Home() {
  return (
    <main >
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <div className="bg-origin-border p-4 bg-cover" style={{ backgroundImage: "url(../travel-bg.jpg)" }}>
        <div className='pt-10 mx-40'>
          <div className='space-y-28'>
            <Nav />
            <Content />
            <Menu1 />
          </div>
          <div className='py-48'>
            <Poptour />
          </div>
          <Discover />
          <Footer />
        </div>
      </div>



    </main >
  )
}
