import React from 'react'
import Body from './body/body'
import Footer from './footer/footer'
import Header from './header/header'
import PreHeader from './preHeader/preHeader'
import SearchBar from './searchBar/searchBar'

import './layout.sass'

const Layout =  ({data, children}) => {

  return (
    <div className="wrapper">
      <PreHeader/>
      <Body {...data}> 
        <Header/>
        <SearchBar/>
      </Body>
      <Footer/>
    </div>
  )
}

export default Layout