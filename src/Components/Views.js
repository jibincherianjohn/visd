import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideo } from '../services/allapi'

function View({updatedState}) {

  const [allVideos, setAllVideos] = useState([])

  //state to update delete
  const [deleteUpdate,setDeleteUpdate]=useState({})

  const accessAllVideos = async () => {
    const result = await getAllVideo()
    if (result.status >= 200 && result.status < 300) {
      setAllVideos(result.data)
    }
  }
  console.log(allVideos);

  useEffect(() => {
    accessAllVideos()
  }, [updatedState,deleteUpdate])

  return (
    <Row>
      {
        allVideos.length>0?(
          allVideos.map(i=>
           <Col lg={4} md={6}> <Videocard deleteFunc={setDeleteUpdate} video={i}></Videocard></Col>
            )

        ):<h1>No videos in your collection</h1>
      }
      </Row>
 
  )
}

export default View