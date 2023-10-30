import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
function Head() {
  return (
    <div>
        
        <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand >
              <img
                alt=""
                src="https://i.postimg.cc/0NtL718Y/pngegg.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
             <b>Video upload</b>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>


    </div>
  )
}

export default Head