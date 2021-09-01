import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import {useState} from "react";

const Styles = styled.div `
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`


 const Navibar = ()=>{


    const [show, setShow] = useState(false)
     const handleShow = ()=> {
         setShow(true)
     }


     const handleClose = ()=> {
         setShow(false)
     }

    return <>
        <Styles>
  <Navbar collapseOnSelect expand="lg"  bg='dark' variant='dark'>
      <Container>
      <Navbar.Brand style={{marginLeft:'10px'}}>WEB DEV blog</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
         <Nav className='me-auto' >
            <Nav.Link><Link to='/'>Home</Link> </Nav.Link>
             <Nav.Link><Link to='/users'>Users</Link> </Nav.Link>
             <Nav.Link><Link to='/about'>About</Link> </Nav.Link>
         </Nav>

          <Nav>
              <Button variant='primary'  style={{marginRight: '5px'}} onClick={handleShow}>log in</Button>
              <Button variant='primary' style={{marginRight: '10px'}} onClick={handleShow}>Sing out</Button>
          </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>
        </Styles>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                   <Modal.Title>Log in</Modal.Title>
              </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email adress</Form.Label>
                          <Form.Control type='email' placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder="Enter password"/>
                    </Form.Group>
                    <Form.Group controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label='Remember me'/>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </>
}


export default Navibar