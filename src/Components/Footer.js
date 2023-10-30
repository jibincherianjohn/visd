import React from 'react'
import './Footer.css'
import { Row ,Col} from 'react-bootstrap'

function Footer() {
  return (
    <div className=' p-0 bg-light'>
<Row style={{width:'100%'}} >



 <Col lg={3} md={6} sm={12} xs={12} className='ps-3'>
 <img
              alt=""
              src="https://i.postimg.cc/0NtL718Y/pngegg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <b>Vid<span className='text-warning'>eo</span>uplo<span className='text-info'>ad</span></b>
 </Col>
 <Col lg={3} md={6} sm={12} xs={12} className='ps-3' >
  <h4>Link</h4>
 <a href="" className='fs-5' style={{textDecoration:'none' ,color:'red'}}>Landing page</a> <br />
 <a href=""  className='fs-5' style={{textDecoration:'none',color:'red'}}>Home</a> <br />
 <a href=""className='fs-5'  style={{textDecoration:'none', color:'red'}}> Watch history</a> <br />
 </Col>

 <Col lg={3} md={6} sm={12} xs={12} className='ps-3'>

<h4>Guides</h4>
<h5>react</h5>
<h5>react-bootstrap</h5>
<h5>routing</h5>



 </Col>
 <Col lg={3} md={6} sm={12} xs={12} className=''>
<h4 className='text-danger' >Contact us</h4>
<input  style={{border:'none', borderRadius:'8px' }} type="text" placeholder='email' className='' />
<button className='btn-danger mt-1 w-50'> send</button> <br />
<i style={{margin:'10px',padding:'10px', color:"black"}} class="fa-brands fa-instagram fa-2xl"></i>
<i style={{margin:'10px',padding:'10px', color:"black"}} class="fa-brands fa-x-twitter fa-2xl"></i>
<i style={{margin:'10px',padding:'10px', color:"black"}} class="fa-brands fa-facebook fa-2xl"></i>
 </Col>

</Row>
    </div>
  )
}

export default Footer