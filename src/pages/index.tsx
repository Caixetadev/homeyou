import type { NextPage } from 'next'
import styled from 'styled-components'

import { Navbar, Hero } from '../components'
import { About } from '../components/About'

const Seila = styled.div`
  margin-top: 400rem;
`

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Seila />
    </>
  )
}

export default Home
