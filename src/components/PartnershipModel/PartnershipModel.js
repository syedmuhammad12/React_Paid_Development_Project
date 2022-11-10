import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './PartnershipModel.css'

const PartnershipModel = () => {
  return (
    <Container id="partnershipmodel" fluid className='service-bg partnership-bg'>
            <h2 style={{textAlign: 'center', paddingTop: 40, paddingBottom: 40, fontWeight: 700}} className="industry-head"><span style={{color: "#8BE4A4"}}>PARTNERSHIP</span> MODEL</h2>
        <Row xs={1} md={2} className="g-4">
            {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#8BE4A4"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>STAFF AUGMENTATION</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 600}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>PROJECT BASED ECONOMICAL SOLUTIONS</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>CONTINUOUS IMPROVEMENT AND SUPPORT</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>CONTINUOUS IMPROVEMENT AND SUPPORT</h3></Card.Title>
                    <Card.Text style={{textAlign: 'justify', fontWeight: 700}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cumque corporis ipsum nemo inventore labore consequatur. Id impedit doloremque iusto?
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{padding: 40, textAlign: 'center', borderRadius: 40, backgroundColor: "#F0EAB6"}}>
                <Card.Body>
                    <Card.Title ><h3 style={{fontWeight: 700}}>CONSULTANCY SERVICES</h3></Card.Title>
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

export default PartnershipModel