﻿
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState } from "react";

function Navigation() {

    // Dodaj stan do obsługi zwijania menu
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded); // Przełączanie rozwinięcia
    const handleClose = () => setExpanded(false); // Zamykanie 

    return (
        <Navbar variant="light" expand="lg" sticky="top" expanded={expanded} >
            <Container>
                {/* Logo po lewej stronie */}
                <Navbar.Brand href="/">Twoja Aplikacja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Nawigacja z prawej strony */}
                    <Nav className="ms-auto">
                        <Link class='nav-link' to='/' onClick={handleClose}>Home</Link>
                        <Link class='nav-link' to='/login' onClick={handleClose}>Account</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation