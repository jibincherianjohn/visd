import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import './Landing.css'
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <div>
      <Container>
        <Row>

          <Col lg={4} md={6} sm={12} xs={12} >
            <div>
              <h2>Vid<span className='text-danger'>eo</span>Up<span className='text-info'>load</span></h2>

              <p className='mt-2 p-2 fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, explicabo earum atque quam non, maxime minima voluptates quisquam aperiam ea iste nobis laborum alias delectus repudiandae error eum esse architecto.</p>

            <Link to={'/view'}> <button style={{border:"none", borderRadius:'30px', backgroundColor:'blue'}} className='btn-ms-3 b1'>Get started   <i class="fa-solid fa-play fa-sm"></i></button></Link>
            </div>


          </Col>
               
          <Col lg={4} md={6} sm={12} xs={12}>
<img className='w-100 bg-dark mt-2' src="https://i.postimg.cc/nrtGF2YS/f9ddef8eb2c99a87e425f5b16edf9dd3.gif" alt="" />
         
          </Col>
        </Row>
        <hr />
<Row className='p-4' >
<h1 className='text-center'>Features</h1>
<Col className='mt-2' lg={4} md={6} sm={12} xs={12} >
<Card className='card ms-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/6pychYcg/gif-icons-menu-transition-animations-play.gif" />
      <Card.Body>
        <Card.Title>Mange videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
</Col>

<Col className='mt-2' lg={4} md={6} sm={12} xs={12}>
<Card className='ms-3 card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/4dHcqSqH/ea2d6ec2d94e5d1e492c58b102688282.gif" />
      <Card.Body>
        <Card.Title>categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
</Col>

<Col className='mt-2' lg={4} md={6} sm={12} xs={12}>  
<Card className='ms-3 card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/NFydND7d/10bd2392da16e33ab81c8a9862c3e116.gif" />
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

export default Landingpage