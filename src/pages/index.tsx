import type { NextPage } from 'next'
import styled from 'styled-components'

import { Navbar, Hero, About, Gallery, Pudget, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Pudget />
      <Footer />
    </>
  )
}

export default Home
