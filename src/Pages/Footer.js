import React, {useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {useSelector}  from 'react-redux'
import {allFaqs} from '../features/about/faqsSlice'

const Footer = () => {
    const [showForm, setShowForm] = useState(false)
    const handleButtonClick = () => {
        setShowForm(true)
        
    }

    const  faqs = useSelector(allFaqs)

    return (
        <section className='section footerSec'>
            <Container fluid>
                <div className='footerSec1'>
                    <h3>Need a job done, and done well? Get started</h3>
                    <Button onClick={handleButtonClick}>
                        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="73.7314" width="73.7319" height="73.7319" rx="29.8913" transform="rotate(90 73.7314 0)"/>
                        <path d="M37.3637 38.22C33.8405 38.22 30.9844 35.2404 30.9844 31.5649C30.9844 27.8893 33.8405 24.9097 37.3637 24.9097C40.8868 24.9097 43.7429 27.8893 43.7429 31.5649C43.7429 35.2404 40.8868 38.22 37.3637 38.22Z" fill="#EDEFFF"/>
                        <path d="M29.8908 36.5087L44.8365 36.5087L37.3637 49.8191L29.8908 36.5087Z" fill="#EDEFFF"/>
                        </svg>
                    </Button>
                    {showForm && (
                        <div className='form'>
                            <Form.Control type='text' name='message' placeholder='Enter your message |'  />
                            <Form.Control  type='email' name='email' placeholder='Enter your email |' />
                            <Button>
                                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="74" height="74" rx="30"/>
                                <path d="M38.3588 36.5C38.3588 40.036 35.3683 42.9024 31.6794 42.9024C27.9905 42.9024 25 40.036 25 36.5C25 32.964 27.9905 30.0976 31.6794 30.0976C35.3683 30.0976 38.3588 32.964 38.3588 36.5Z" fill="#EDEFFF"/>
                                <path d="M36.6412 44L36.6412 29L50 36.5L36.6412 44Z" fill="#EDEFFF"/>
                                </svg>
                            </Button>
                        </div>
                    )}
                </div>
                <Row className='footerSec2'>
                    <Col sm={3} >
                        <div>
                            <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 26.4321V22.8794L5.21521 16.4845H0.403758V10.8002H13.9633V14.3529L8.74809 20.7478H14.3671V26.4321H0Z" fill="white"/>
                            <path d="M20.0654 26.4321L14.2782 10.8002H22.488L24.2376 17.6569L26.6265 10.8002H29.6883L32.0772 17.6569L33.8268 10.8002H42.0366L36.2494 26.4321H29.8902L28.1742 21.636L26.4246 26.4321H20.0654Z" fill="white"/>
                            <path d="M49.7419 6.50145C48.9792 7.1883 48.0035 7.53173 46.8146 7.53173C45.6258 7.53173 44.65 7.1883 43.8874 6.50145C43.1247 5.79091 42.7434 4.87905 42.7434 3.76587C42.7434 2.65268 43.1247 1.75267 43.8874 1.06581C44.65 0.35527 45.6258 0 46.8146 0C48.0035 0 48.9792 0.35527 49.7419 1.06581C50.5045 1.75267 50.8859 2.65268 50.8859 3.76587C50.8859 4.87905 50.5045 5.79091 49.7419 6.50145ZM43.0462 26.4321V10.8002H50.6167V26.4321H43.0462Z" fill="white"/>
                            <path d="M59.6563 26.4321C57.5254 26.4321 55.843 25.7808 54.6093 24.4781C53.398 23.1755 52.7924 21.3873 52.7924 19.1135V0.142108H60.3629V18.9004C60.3629 19.5162 60.4863 20.0017 60.733 20.357C61.0022 20.6886 61.3498 20.8544 61.776 20.8544H62.4153L61.9443 26.4321H59.6563Z" fill="white"/>
                            <path d="M75.4696 20.8188L76.8491 25.3308C75.3463 26.4676 73.7537 27.0361 72.0713 27.0361C69.6712 27.0361 67.7758 26.3374 66.3851 24.94C65.0168 23.5426 64.3326 21.6241 64.3326 19.1846V16.4845H62.4484V10.8002H64.9383L65.2074 5.32906H71.9031V10.8002H75.7052V16.4845H71.9031V19.1846C71.9031 19.8715 72.0377 20.4162 72.3069 20.8188C72.5985 21.1978 72.991 21.3873 73.4845 21.3873C74.0228 21.3873 74.6845 21.1978 75.4696 20.8188Z" fill="white"/>
                            <path d="M102.956 17.8619C102.956 23.2584 98.5782 27.6331 93.1774 27.6331C87.7766 27.6331 83.3984 23.2584 83.3984 17.8619C83.3984 12.4653 87.7766 8.0906 93.1774 8.0906C98.5782 8.0906 102.956 12.4653 102.956 17.8619Z" fill="#FFBE2E"/>
                            <path d="M100.442 29.3082V6.41553L120 17.8619L100.442 29.3082Z" fill="#FFBE2E"/>
                            </svg>
                            <p>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                        </div>
                        <div>
                            <h6>links and redirects</h6>
                            <Button>Hire now</Button>
                            <Button>Apply now</Button>
                        </div>
                    </Col>
                    <Col sm={9} className='footerSec3'>
                        <h3>Connecting the right people to the right businesses.</h3>
                        <Row className='footerSec4'>
                            <Col sm={3}>
                                <div className='plat'>platform</div>
                                {faqs.map(faq => {
                                return <p key={faq.id}>{faq.platform}</p>})}
                            </Col>
                            <Col sm={3}>
                                <div className='plat'>categories</div>
                                {faqs.map(faq => {
                                return <p key={faq.id}>{faq.categories}</p>})}
                            </Col>
                            <Col sm={3}>
                                <div className='plat'>help</div>
                                {faqs.map(faq => {
                                return <p key={faq.id}>{faq.help}</p>})}
                            </Col>
                            <Col sm={3}>
                                <div className='plat'>get in touch @</div>
                                {faqs.map(faq => {
                                return <p key={faq.id}>{faq.get}</p>})}
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
                <hr />
                <p>All rights reserved by Zwilt</p>
                <div className='last'>
                    <a href="#home">Privacy Policy</a>
                    <a href="#home">Terms and Conditions</a>
                </div>
            </Container>
        </section>  
    )
}

export default Footer