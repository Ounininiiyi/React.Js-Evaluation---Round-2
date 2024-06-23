import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import {allJobsToChoose} from '../features/jobs/chooseJobsSlice'
import {useSelector} from 'react-redux'

const SectionSix = () => {
    const chooseJobs = useSelector(allJobsToChoose)
    
  return (
    <section className='section sixthSec'>
        <Container fluid>
            <Row>
                <Col sm={2}>
                    <h2>Why choose Zwilt</h2>
                    <p>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                </Col>
                <Col sm={10}>
                    <Carousel className='sixthSec1'>
                        {
                            chooseJobs.map(chooseJob => {
                                return (
                                  <Carousel.Item key={chooseJob.id} className={chooseJob.class}>
                                      <Row>
                                          <Col sm={7}>
                                            <Carousel.Caption>
                                                <h3>{chooseJob.title}.</h3>
                                                <ul>
                                                    <li><svg width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="18" height="7" rx="3.5"/>
                                                        </svg>
                                                        {chooseJob.content1}.</li>
                                                    <li><svg width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="18" height="7" rx="3.5"/>
                                                        </svg>{chooseJob.content2}.</li>
                                                    <li><svg width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="18" height="7" rx="3.5"/>
                                                        </svg>{chooseJob.content3}.</li>
                                                </ul>
                                                <div className='link-car'>
                                                    <a href='#home'><svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="74" height="74" rx="30" />
                                                        <path d="M38.3588 36.5C38.3588 40.036 35.3683 42.9024 31.6794 42.9024C27.9905 42.9024 25 40.036 25 36.5C25 32.964 27.9905 30.0976 31.6794 30.0976C35.3683 30.0976 38.3588 32.964 38.3588 36.5Z" fill="#EDEFFF"/>
                                                        <path d="M36.6412 44L36.6412 29L50 36.5L36.6412 44Z" fill="#EDEFFF"/>
                                                        </svg>
                                                        {chooseJob.next}
                                                    </a>
                                                </div>
                                            </Carousel.Caption>
                                          </Col>
                                          <Col sm={5}>
                                            <div className='slidePic' dangerouslySetInnerHTML={{__html: chooseJob.picture}} />
                                            <div className='firstPic' dangerouslySetInnerHTML={{__html: chooseJob.picture2}} />
                                            <div className='fourthPic' dangerouslySetInnerHTML={{__html: chooseJob.picture4}} />
                                          </Col>
                                      </Row>
                                  </Carousel.Item>  
                                )
                            })
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SectionSix
