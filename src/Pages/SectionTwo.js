import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { allIts } from '../features/it/itDetailsSlice'
import { allItPictures } from '../features/it/itPicturesSlice';
import SectionTwoFirstChild from './SectionTwoFirstChild';
import SectionTwoSecondChild from './SectionTwoSecondChild';

const SectionTwo = () => {
  const its = useSelector(allIts)
  const content = its.map(it => <SectionTwoFirstChild key={it.id} it={it} />)
  
  const itPictures = useSelector(allItPictures)
  const pictureContent = itPictures.map(itPicture => <SectionTwoSecondChild key={itPicture.id} itPicture={itPicture} />)

  return (
    <section className='section secondSec'>
      <Container fluid width='1440'>
        <div className='text-center'>
          <h1>Your one-stop markertplace for finding the talent your business needs.</h1>
        </div>
        <Row className='secondSec1'>
          <Col sm={6}>
            {content}
          </Col>
          <Col sm={6}>
           {pictureContent}
          </Col>
          <Col sm={6} className='exploreCon'>
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="74" height="74" rx="30" />
              <path d="M38.3588 36.5C38.3588 40.036 35.3683 42.9024 31.6794 42.9024C27.9905 42.9024 25 40.036 25 36.5C25 32.964 27.9905 30.0976 31.6794 30.0976C35.3683 30.0976 38.3588 32.964 38.3588 36.5Z" fill="#EDEFFF"/>
              <path d="M36.6412 44L36.6412 29L50 36.5L36.6412 44Z" fill="#EDEFFF"/>
            </svg>
            <span className='explore'>Explore More</span>
          </Col>
          <Col sm={6}>
            <p className='explore2'><span>30 more</span> to explore</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionTwo
