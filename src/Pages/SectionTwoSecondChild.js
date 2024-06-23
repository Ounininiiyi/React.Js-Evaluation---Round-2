import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const SectionTwoSecondChild = ({itPicture}) => {
  const title = itPicture.title
  const  pic1 = itPicture.pic1
  const  pic2 = itPicture.pic2
  const  pic3 = itPicture.pic3
  const  pic4 = itPicture.pic4
  const  pic5 = itPicture.pic5
  const  pic6 = itPicture.pic6

  return (
    <div className='secondPart'>
      <h6>{title}</h6>
      <Row>
        <Col sm={2}><Button dangerouslySetInnerHTML={{__html: pic1}} /></Col>
        <Col sm={2}><Button dangerouslySetInnerHTML={{__html: pic2}} /></Col>
        <Col sm={2}><Button dangerouslySetInnerHTML={{__html: pic3}} /></Col>
        <Col sm={2}><Button dangerouslySetInnerHTML={{__html: pic4}} /></Col>
        <Col sm={2}><Button dangerouslySetInnerHTML={{__html: pic5}} /></Col>
        <Col sm={2}><Button dangerouslySetInnerHTML={{__html: pic6}} /></Col>
      </Row>
    </div>
  )
}

export default SectionTwoSecondChild
