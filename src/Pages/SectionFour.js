import React, {useEffect} from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { useSelector } from 'react-redux'  
import { allJobGets } from '../features/jobs/jobGetSlice'

const SectionFour = () => {
    const jobGets = useSelector(allJobGets)

    // useEffect(() => {
    //     const active = document.querySelector()
    //     return () => {
    //         cleanup
    //     };
    // }, [input])

  return (
    <section className='section fourthSec'>
        <Container fluid>
            <Row>
                <Col sm={6} className='fourthSec1'>
                    <div>
                        <h3>How we ensure you're in good hands</h3>
                        <p>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p>
                    </div>
                    <Accordion flush>
                    {
                        jobGets.map(jobGet => (
                            <Accordion.Item eventKey={jobGet.id.toString()} key={jobGet.id}>
                                <Accordion.Header>
                                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="57" height="57" rx="28.5" fill="#ECECEC"/>
                                        <path className='secondFill' d="M21 21.8221C21 21.3684 21.3914 21 21.8735 21H35.96C36.4421 21 36.8335 21.3684 36.8335 21.8221V35.08C36.8333 35.298 36.7412 35.507 36.5774 35.6611C36.4136 35.8152 36.1916 35.9019 35.96 35.9021H21.8735C21.6419 35.9019 21.4199 35.8152 21.2561 35.6611C21.0923 35.507 21.0002 35.298 21 35.08V21.8221ZM27.7046 25.4831C27.6517 25.4498 27.5901 25.4307 27.5266 25.4278C27.463 25.4248 27.3998 25.4382 27.3436 25.4664C27.2875 25.4946 27.2405 25.5366 27.2077 25.5879C27.175 25.6393 27.1576 25.698 27.1575 25.7579V31.1442C27.1576 31.2041 27.175 31.2628 27.2077 31.3142C27.2405 31.3655 27.2875 31.4075 27.3436 31.4357C27.3998 31.4639 27.463 31.4773 27.5266 31.4743C27.5901 31.4714 27.6517 31.4523 27.7046 31.4191L31.9964 28.7267C32.0446 28.6965 32.0842 28.6555 32.1116 28.6074C32.139 28.5593 32.1533 28.5056 32.1533 28.4511C32.1533 28.3965 32.139 28.3428 32.1116 28.2947C32.0842 28.2466 32.0446 28.2056 31.9964 28.1754L27.7037 25.4831H27.7046Z"/>
                                    </svg>
                                    {jobGet.step}{jobGet.activity}
                                </Accordion.Header>
                                <Accordion.Body>
                                   {jobGet.details} 
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SectionFour
