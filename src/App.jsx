import React from 'react'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Education/>
      <Work/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App