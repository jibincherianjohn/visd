import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getCatId } from '../services/allapi';
import {Button, Card,Col, Row } from 'react-bootstrap';

function Display() {

 const param =useParams();

const [getcater,  setCater]=useState({

  id: "",
  name: "",
  videos: []

})
const [video,setVideo]=useState({})


const getcateroy=async()=>{
   const vidid=param.videoid
   const catid= param.id
   const result= await getCatId(catid)
   setCater(result.data);
   setVideo(result.data.videos.find(i=>i.id==vidid))


}
console.log(getcater);

useEffect(()=>{

getcateroy()

},[])


  return (
    <div>
      
      <div className='float-end m-2' >
              <Link to={'/view'}>  <Button className='btn btn-warning rounded btn btn-primary'>Go Home</Button></Link>
            </div>
            <Row style={{ width:'100%',paddingBottom:"163px" }}>
                <h2   className='text-warning'>{getcater?.name}</h2>                {
                    getcater.videos.length > 0 ?

                        getcater.videos.map(j =>
                            <Col lg={4} sm={12} md={12} style={{height:'280px'}} >
                                <h2>{j.caption}</h2>
                                <Card className='border-dark pl-5' >
                                    <iframe height="200" width="100%" src={j.video_url} title="Kalki Official Trailer | Tovino Thomas | Samyuktha Menon | Praveen Prabharam | Jakes Bejoy"
                                        frameborder="0" allow="accelerometer;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    
                                </Card>
                                <br />
                                <br />
                                <br />
                      
                            </Col>
                        ) : <h1>No Video's avilable in this Category</h1>
                }
            </Row>




      
      
     







    </div>
  )
}

export default Display