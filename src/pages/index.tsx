import type { NextPage } from 'next'
import styled from 'styled-components'

import { Navbar, Hero, About, Gallery, Pudget } from '../components'

const Seila = styled.div`
  margin-top: 400rem;
`

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Pudget />
      <Seila />
    </>
  )
}

export default Home
