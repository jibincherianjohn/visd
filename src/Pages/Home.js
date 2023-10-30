import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import Views from '../Components/Views'
import Categranize from '../Components/Categranize'
import { Link } from 'react-router-dom'


function Home() {
   //state for state lifting
   const [addUpdate,setAddUpdate]=useState({})

  return (
    
      <div className=''>
<div>
<Row style={{width:'100%'}}>
          <Col>
          <h1 className='ms-5 ps-5 mb-5'><span className='info'>St</span>art Upload <span className='info'>v</span>ideos for free</h1>
    
    <Link to={'/history'} style={{textDecoration:'none'}}> <a style={{textDecoration:'none'}} ><i class="fa-regular fa-clock fa-lg danger"></i> View Watch History</a></Link>
    <hr />
      </Col>
      <Col>
      
      
      
      </Col>
      </Row>
</div>
<Row style={{width:'100%'}}>
<Col  lg={1}>
<Add  update={setAddUpdate}></Add>
</Col>
<Col lg={7}>
<Views updatedState={addUpdate} ></Views>
</Col>

<Col lg={4}>
<Categranize></Categranize>
</Col>



</Row>


    </div>
  )
}

export default Home