import React, {useState} from 'react'
import { Container, ListGroup } from 'react-bootstrap';

const SectionSeven = () => {
    const [selectedItem, setSelectedItem] = useState(null)

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    
    const renderSvg = () => (
        <svg className='svg' width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.924 7.81731C13.924 11.5029 10.807 14.4906 6.96198 14.4906C3.11698 14.4906 -2.38813e-08 11.5029 -1.62296e-08 7.81731C-8.57797e-09 4.13174 3.11698 1.144 6.96198 1.144C10.807 1.144 13.924 4.13174 13.924 7.81731Z" fill="#FFBE2E"/>
        <path d="M12.1337 15.6346L12.1337 2.5191e-08L26.0577 7.81731L12.1337 15.6346Z" fill="#FFBE2E"/>
        </svg>
    );


    return (
        <section className='section seventhSec'>
            <Container fluid>
                <div className='text-center'>Frequently asked questions</div>
                <div className='seventhSec1'>
                    <div className='text-center'>
                        <ListGroup horizontal>
                            <ListGroup.Item className='general' action href='#home' onClick={() => handleItemClick('general1')}>
                                General {selectedItem === 'general1' && renderSvg()}
                            </ListGroup.Item>
                            <ListGroup.Item action href='#home' onClick={() => handleItemClick('part-time1')}>
                                I want to work part-time, is that possible {selectedItem === 'part-time1' && renderSvg()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item action href='#home' className='col-sm-12' onClick={() => handleItemClick('projects1')}>
                                How long are the average projects? {selectedItem === 'projects1' && renderSvg()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item action href='#home' className='col-sm-12' onClick={() => handleItemClick('payment1')}>
                                How does the payment works? {selectedItem === 'payment1' && renderSvg()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item action href='#home' className='col-sm-12' onClick={() => handleItemClick('earnings1')}>
                                How much can I earn? {selectedItem === 'earnings1' && renderSvg()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item className='general' action href='#home' onClick={() => handleItemClick('general2')}>
                                General {selectedItem === 'general2' && renderSvg()}
                            </ListGroup.Item>
                            <ListGroup.Item className='general' action href='#home' onClick={() => handleItemClick('joining')}>
                                Joining Process {selectedItem === 'joining' && renderSvg()}
                            </ListGroup.Item>
                            <ListGroup.Item action href='#home' onClick={() => handleItemClick('part-time2')}>
                                I want to work part-time, is that possible {selectedItem === 'part-time2' && renderSvg()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item action href='#home' className='col-sm-12' onClick={() => handleItemClick('projects2')}>
                                How long are the average projects? {selectedItem === 'projects2' && renderSvg()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item action href='#home' className='col-sm-12' onClick={() => handleItemClick('projects3')}>
                                How long are the average projects? {selectedItem === 'projects3' && renderSvg()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                                <ListGroup.Item action href='#home' className='col-sm-12' onClick={() => handleItemClick('earnings2')}>
                                    How much can I earn? {selectedItem === 'earnings2' && renderSvg()}
                                </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SectionSeven
