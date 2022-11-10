import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import './Service.css'
import { Element } from 'react-scroll';


function Service() {
    return (
        
        
        <Container id="services" fluid className='service-bg'>
            <h2 style={{textAlign: 'center', paddingTop: 40, paddingBottom: 40, fontWeight: 700}} className="industry-head"><span style={{color: "#8BE4A4"}}>OUR</span> SERVICES</h2>
        <Row xs={1} md={4} className="g-4">
            {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title>APPLICATION RESEARCH</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title>MVP DEVELOPMENT</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            
            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title>QUALITY ASSURANCE</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title>AUTOMATION</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title>ANNOTATION</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title>DATA ANALYTICS</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title>MOBILE APPLICATION</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title>FULL STACK DEVELOPMENT</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title>ERP SERVICES</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title>BUSINESS RISK MANAGEMENT</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title>BUSINESS INTELLIGENCE</Card.Title>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title>EXECUTIVE TRAININGS</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            {/* ))} */}
      </Row>
      </Container>
    )
}
  
  export default Service;
