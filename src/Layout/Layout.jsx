import Body from './body/body'
import Footer from './footer/footer'
import Header from './header/header'
import PreHeader from './preHeader/preHeader'

import './layout.sass'

const Layout = () => {
  return (
    <div className="wrapper">
      <PreHeader/>
      <Body> 
        <Header/>
      </Body>
      <Footer/>
    </div>
  )
}

export default Layout