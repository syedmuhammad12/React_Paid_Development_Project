import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import './Industry.css'
import {FaGraduationCap, FaPlaneDeparture } from 'react-icons/fa'
import {BsBank} from 'react-icons/bs'
import {MdLocalHospital } from 'react-icons/md'
import {RiHandHeartFill} from 'react-icons/ri'
import { GiWallet } from 'react-icons/gi'


function Industry() {

  return (
    <Container id="industry" fluid className='industry-bg'>
    <h2 style={{textAlign: 'center', paddingTop: 40, paddingBottom: 40, fontWeight: 700}} className="industry-head">INDUSTRIES</h2>
    <Row xs={1} md={2} lg={3} className="g-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
        <Col className='cardi'>
          <Card style={{alignItems: 'center', width: 300, height: 300, backgroundColor: '#8BE4A4', margin: 0, borderRadius: 40}}> 
            <FaGraduationCap style={{width: 93, height: 68}}/>
            <hr style={{width: '100%'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}><h3>Education</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col className='cardi'>
          <Card style={{alignItems: 'center', width: 300, height: 300, backgroundColor: '#F0EAB6', borderRadius: 40}}> 
            <BsBank style={{width: 93, height: 68}}/>
            <hr style={{width: '100%'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}><h3>Government</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='cardi'>
          <Card style={{alignItems: 'center', width: 300, height: 300, backgroundColor: '#8BE4A4', borderRadius: 40}}> 
            <MdLocalHospital style={{width: 93, height: 68}}/>
            <hr style={{width: '100%'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}><h3>Hospital</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='cardi'>
          <Card style={{alignItems: 'center', width: 300, height: 300, backgroundColor: '#F0EAB6', borderRadius: 40}}> 
            <RiHandHeartFill style={{width: 93, height: 68}}/>
            <hr style={{width: '100%'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}><h3>Non-profit</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='cardi'>
          <Card style={{alignItems: 'center', width: 300, height: 300, backgroundColor: '#8BE4A4', borderRadius: 40}}> 
          <FaPlaneDeparture style={{width: 93, height: 68}}/>
            <hr style={{width: '100%'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}><h3>Transportation</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='cardi'>
          <Card style={{alignItems: 'center', width: 300, height: 300, backgroundColor: '#F0EAB6', borderRadius: 40}}> 
            <GiWallet style={{width: 93, height: 68}}/>
            <hr style={{width: '100%'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}><h3>Finance</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      {/* // ))} */}
    </Row>
    </Container>
  );
}

export default Industry;