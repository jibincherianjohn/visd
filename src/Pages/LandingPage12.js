import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Col, Row } from 'react-bootstrap'
import './LandingPage.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{marginTop:'150px'}} className='' lg={6} md={6}>
            <div>
            <h2 className><span className='text-warning'>V</span >ideo<span className='text-warning'>U</span>ploader</h2>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eligendi repellat nihil commodi adipisci magni, omnis quod maiores atque alias optio? Eos maiores nihil illum culpa accusantium aperiam odio minima.</h5>
            <Link to={'/view'}><button className='b1'>Get Started <i class="fa-solid fa-play fa-beat"></i></button></Link>
            </div>
          </Col>
          
          <Col className='' lg={6} md={6}>
            
          <img className='w-100 mt-4 p-5' src="https://i.postimg.cc/Y0BFHSf1/autoplaying-gifs.gif" alt="" />
          </Col>
        </Row>
        <hr />
        <h2 className='text-center text-warning fw-bold '>Features</h2>
        <Row className='mt-5 p-4'>
          <Col lg={4} md={6}>
          <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/HLdfv0ym/2575ce3e61185886be0c04ab64204474.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col lg={4} md={6}>
          <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/j5BVWP4z/1af8dd54cee834a592a4938bedb5afda.gif" />
      <Card.Body>
        <Card.Title>Catogorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col lg={4} md={6}>
          <Card style={{ width: '20rem' }}>
      <Card.Img style={{height:'14.8rem'}} variant="top" src="https://i.postimg.cc/4NcPFZ0G/3baaf259578105-5b6235360fe1e.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage