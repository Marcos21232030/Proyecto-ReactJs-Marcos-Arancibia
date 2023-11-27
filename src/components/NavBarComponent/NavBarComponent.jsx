import JOTA from '../../assets/img/JOTAmakeup-MINI.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from "@fortawesome/free-solid-svg-icons";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img style={{width:'200px'}} src={JOTA}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><FontAwesomeIcon style={{fontSize:'2rem',
          marginRight:'1.5rem',
          textDecorationColor:'#C8A2C8'}} icon={faHouse} /></Nav.Link>
            <Nav.Link style={{fontSize:'1.5rem',
          marginRight:'1.5rem'}} href="#action2"> Productos</Nav.Link>
            <NavDropdown style={{fontSize:'1.5rem',
          marginRight:'1.5rem'}} title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Bases</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Iluminadores
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Labiales
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{fontSize:'1.5rem',
          marginRight:'1.5rem'}} href="#">
              Contacto
            </Nav.Link>
          </Nav>
          <CartWidgetComponent/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;