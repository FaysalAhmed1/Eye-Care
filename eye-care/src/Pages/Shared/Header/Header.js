import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>


            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"> Eye Care </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/appointments">Appointment</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Nav.Link as={Link} to="/registar"> Sign up </Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login"> {user?.displayName} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>



                </Container>
            </Navbar>

        </>
    );
};

export default Header;