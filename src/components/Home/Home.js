import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css'

function Home() {
  return (
    <Container id="home" fluid style={{paddingInline: 0}}>
      <div className='home-bg d-flex align-items-center'>
        <h2 className='home-heading'>YOUR <span>TECHNOLOGY</span> DEVELOPMENT PARTNER</h2>
        <p className='home-para'>We help our customers succeed in digital transformation initiatives with solutions to increase the efficiency and to increase the value of technological investments</p>
        <div className='values' id="values">
          <div className='features'>
            <div className='beliefs'><p>Beliefs</p></div>
            <div id='essence' className='beliefs'><p>Essence</p></div>
            <div id='purpose' className='beliefs'><p>Purpose</p></div>
          </div>
          <div className='features-text'>
            <h3>Our Purpose</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores, dolorem perferendis adipisci amet earum consequuntur beatae voluptatum pariatur atque?</p>
            <h3>Our Belief</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores, dolorem perferendis adipisci amet earum consequuntur beatae voluptatum pariatur atque?</p>
            <h3>Our Essence</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores, dolorem perferendis adipisci amet earum consequuntur beatae voluptatum pariatur atque?</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;