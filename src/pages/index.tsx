import type { NextPage } from 'next'
import styled from 'styled-components'

import { Navbar, Hero } from '../components'
import { About } from '../components/About'
import { Gallery } from '../components/Gallery'

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
      <Seila />
    </>
  )
}

export default Home
