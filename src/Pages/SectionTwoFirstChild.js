import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SectionTwoFirstChild = ({it}) => {
    const topic = it.topic
    const skills = it.skills
    const sub = it.sub
    const profile = it.profile

  return (
    <div className='firstPart'>
      <h4>{topic}</h4>
      <Row>
        <Col sm={6}>
          <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.001C10.1217 5.001 12.1566 5.84385 13.6569 7.34415C15.1571 8.84444 16 10.8793 16 13.001C16 15.1227 15.1571 17.1576 13.6569 18.6579C12.1566 20.1581 10.1217 21.001 8 21.001C5.87827 21.001 3.84344 20.1581 2.34315 18.6579C0.842855 17.1576 0 15.1227 0 13.001C0 10.8793 0.842855 8.84444 2.34315 7.34415C3.84344 5.84385 5.87827 5.001 8 5.001ZM8 8.501L6.677 11.181L3.72 11.611L5.86 13.696L5.355 16.642L8 15.251L10.645 16.641L10.14 13.696L12.28 11.61L9.323 11.18L8 8.501ZM9 0L14 0.00100005V3.001L12.637 4.139C11.5059 3.54558 10.2711 3.17583 9 3.05V0.00100005V0ZM7 0V3.05C5.72935 3.17565 4.49482 3.54505 3.364 4.138L2 3.001V0.00100005L7 0Z" fill="#A285D0"/>
          </svg>
          <span>{skills}</span>
        </Col>
        <Col sm={6}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="#A285D0"/>
          </svg>
          <span>{sub}</span>
        </Col>
        <Col sm={12}>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.82485 10.6147V17.1467H0C0 15.4143 0.719044 13.7529 1.99895 12.5279C3.27886 11.3029 5.01479 10.6147 6.82485 10.6147ZM11.9435 16.7385L9.4362 18L9.9148 15.3284L7.88696 13.4357L10.6903 13.0454L11.9435 10.6147L13.1975 13.0454L16 13.4357L13.9722 15.3284L14.4499 18L11.9435 16.7385ZM6.82485 9.79814C3.9968 9.79814 1.70621 7.60581 1.70621 4.89907C1.70621 2.19233 3.9968 0 6.82485 0C9.65289 0 11.9435 2.19233 11.9435 4.89907C11.9435 7.60581 9.65289 9.79814 6.82485 9.79814Z" fill="#A285D0"/>
          </svg>
          <span>{profile}</span>
        </Col>
      </Row>
    </div>
  )
}

export default SectionTwoFirstChild
