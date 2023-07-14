import React from 'react'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import SkillsBar from './components/skillBar/SkillBar'
import About from './components/about/About'
import Portfolio from './components/Portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <About/>
      <SkillsBar/>
      <Portfolio/>
    </>
  )
}

export default App