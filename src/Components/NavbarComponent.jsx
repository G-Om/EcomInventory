import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id='nav'
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-item' href="#action1">BUY T-SHIRTS</Nav.Link>
            <Nav.Link className='nav-item' href="#action1">WOMEN</Nav.Link>
            <Nav.Link className='nav-item' href="#action2">MEN</Nav.Link>
            <Nav.Link className='nav-item' href="#action2">ABOUT</Nav.Link>
            <Nav.Link className='nav-item' href="#action2">CONTACT</Nav.Link>
            <img src="./images/logo-regular.png" alt="logo" id='logo'/>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#action2">Log In</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};
