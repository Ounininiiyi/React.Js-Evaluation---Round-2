import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Container className= 'home'>
          <Header />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <Footer />
      </Container>
    </>
  )
}

export default Home