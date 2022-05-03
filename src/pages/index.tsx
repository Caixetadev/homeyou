import type { NextPage } from 'next'
import styled from 'styled-components'

import { Navbar, Hero } from '../components'

const Seila = styled.div`
  margin-top: 400rem;
`

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Seila />
    </>
  )
}

export default Home
