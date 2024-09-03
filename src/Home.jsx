import React from 'react';
import {Container} from 'react-bootstrap';
import './Home.css'; // Import custom CSS file for styling
import 'bootstrap-icons/font/bootstrap-icons.css';
import memojihello from './image/memojihello.png'

function Home() {

    const linkedin = () =>{
        window.location.href = 'https://www.linkedin.com/in/seshwinraj-jayakrishnan-450ba3296/';
    }

    const github = () =>{
        window.location.href = 'https://github.com/SeshLovesCoding';
    }

    return (

        <Container id='Container'>
            <div className='row1'>
                <img className="memojihello" src={memojihello} alt=""/>
                <h3 className='bubble-hello'>Hello, I'm Seshwinraj</h3>
            </div>
            <div className="row2">
                <h1 className='home-text-title'>UI/UX Designer<br/>& Software Developer</h1>
            </div>
            <div className="row3">
                <h3 className="header-text-descp">I create digital experiences that are aesthetic and functionable
                </h3>
            </div>
            <div className="row4">
                <h3 className='bubble-medium1'>Based in
                    <span className='emoji'> 🇲🇾</span>
                </h3>
                <h3 className='bubble-medium2'>Bachelor in Comp. Science</h3>
                <h3 className='bubble-medium3'>Full-Stack Dev</h3>
            </div>
            <div className="row5">
                <div className="mouse">
                    <div className="roll"></div>
                    <div className="rollshadow"></div>
                </div>
            </div>
            <div className="row6">
              <div className="icon">
              <i onClick={linkedin}id="linkedin-icon" className="bi bi-linkedin"></i>
              <i onClick={github} id="github-icon" className="bi bi-github"></i>
              </div>
              <div className="signature-block">
                <h2 className='signature-text'>Seshwinraj</h2>
              </div>
            </div>
        </Container>

    );
};

export default Home;
