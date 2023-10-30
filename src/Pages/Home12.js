import React, { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
// import Add from '../components/Add'
import View from '../components/View'
import Catogories from '../components/Catogories'

function Home() {
  //state for state lifting
  const [addUpdate,setAddUpdate]=useState({})

  return (
    <div  className='mt-5'>
      <Container>
      <Row style={{marginTop:'200px'}}>
        <Col lg={6} md={6}>
        <div>
        <h2 className='ms-4 ps-5 mb-4'>Start uploading</h2>
      <a className='ms-4 fs-3 ps-5 text-danger' style={{textDecoration:'none'}} href="">View watch history <i class="fa-solid fa-clock fa-spin"></i></a>
      </div></Col>
      <Col lg={6} md={6}>
      <div>
      <img className='w-75 h-25 ms-5 mb-5' src="https://i.postimg.cc/g2RCpkVs/2a7c89c5fe7a8316fa0cbadb71719940.gif" alt="" />
      </div>
      </Col>
      </Row>
      <hr />
      <Row className='mt-5'>
        <Col lg={1}>

          <Add update={setAddUpdate}></Add>

        </Col>

        <Col lg={7}>

          <View updatedState={addUpdate}>
          </View>

        </Col>

        <Col lg={4}>

          <Catogories></Catogories>

        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home