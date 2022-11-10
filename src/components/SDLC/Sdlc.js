import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Sdlc = () => {
  return (
    <Container id="sdlc" fluid className='service-bg'>
            <h2 style={{textAlign: 'center', paddingTop: 40, paddingBottom: 40, fontWeight: 700}} className="industry-head"><span style={{color: "#8BE4A4"}}>SYSTEM</span> DEVELOPMENT LIFECYCLE</h2>
        <Row xs={1} md={2} className="g-4">
            {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>APPLICATION RESEARCH</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 600}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>PROTOTYPING</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>DEVELOPMENT</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>TESTING AND VALIDATION</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>MAINTAINANCE</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>DEPLOYMENT</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
        
  )
}

export default Sdlc