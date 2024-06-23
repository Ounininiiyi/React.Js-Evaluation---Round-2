import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { theStarters } from '../features/jobs/startersSlice'

const SectionFive = () => {
    const starters = useSelector(theStarters)

  return (
    <section className='section fifthSec'>
        <Container fluid>
            <h1>Start your journey today.</h1>
            <Card className='fifthSec1'>
                {
                    starters.map(starter => (
                        <Card.Body key={starter.id} className={starter.class}>
                            <Row>
                                <Col sm={6} className='fifthSec2'>
                                    <div className='number' dangerouslySetInnerHTML={{__html: starter.number}} />
                                    <Card.Title>{starter.title}</Card.Title>
                                    <Card.Text>
                                        {starter.content}
                                    </Card.Text>
                                    <Card.Link><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="49.793" height="49.793" rx="20.1863"/>
                                        <path d="M25.8107 24.5601C25.8107 26.9393 23.7985 28.8681 21.3163 28.8681C18.8341 28.8681 16.8219 26.9393 16.8219 24.5601C16.8219 22.1808 18.8341 20.252 21.3163 20.252C23.7985 20.252 25.8107 22.1808 25.8107 24.5601Z" fill="#EDEFFF"/>
                                        <path d="M24.655 29.6067L24.655 19.5135L33.6438 24.5601L24.655 29.6067Z" fill="#EDEFFF"/>
                                        </svg>
                                        {starter.next}
                                    </Card.Link>
                                </Col>
                                <Col sm={6}>
                                    <div className='card-image' dangerouslySetInnerHTML={{__html: starter.picture}} />
                                </Col>
                            </Row>
                        </Card.Body>
                    ))
                }
            </Card>
        </Container>
    </section>
  )
}

export default SectionFive
