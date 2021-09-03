import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import '../styles/TopNav.css';
function TopNav(){
    return(
        <Navbar className="nav">
            <Container>
                <Navbar.Brand href="/">
                <div
                    width="30"
                    height="30"
                    className="d-inline-block align-top">
                        DOG</div>
                </Navbar.Brand>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Container>
        </Navbar>
    )
}
export default TopNav;