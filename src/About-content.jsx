import './About-content.css';
import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import mypicture from './image/my-picture.png';
import scroll from './image/scroll.png';

function AboutContent() {

    return (
        <Container className='about-me-content'>
            <Row className='row-about-content'>
                <Col md={5} className="d-flex justify-content-center align-items-center">
                    <img className="my-picture" src={mypicture} alt=''/>
                </Col>
                <Col md={5} className='col2'>
                    <h3 className='about-me-h3'>
                        Hello, I'm
                        <span
                            style={{
                            fontStyle: 'italic'
                        }}> Seshwinraj</span>, I hold a
                        <span
                            style={{
                            textDecoration: 'underline'
                        }}> Bachelor's degree in Computer Science (Hons)
                        </span> and a gold medalist of idea Regeneration eXpo 16th (Final Year Project). I have established myself as a Full-Stack Developer with a passion for
                        crafting innovative digital solutions.
                        <br></br>
                        <br></br>
                        With a strong foundation in computer science and a commitment to excellence,
                        I've embarked on a journey to bridge the digital divide, seamlessly navigating
                        the intricate realms of both front-end and back-end development.
                        Continuous learning and adaptation are key aspects of my professional
                        journey.
                    </h3>
                </Col>
                <img className="image-scroll" src={scroll} alt=''/>
            </Row>
        </Container>
    )
};

export default AboutContent;