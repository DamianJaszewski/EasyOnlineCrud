
import { Navbar, Nav, Container } from "react-bootstrap";
/*import { Link } from 'react-router-dom'*/


function Navigation() {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <Container>
                {/* Logo po lewej stronie */}
                <Navbar.Brand href="/">Twoja Aplikacja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Nawigacja z prawej strony */}
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        //<div style={{display: "flex", justifyContent: "space-between" } }>
        //    <Link class='nav-link' to='/'>Backlog</Link>
        //    <Link class='nav-link' to='/login'>Login</Link>
        //    <Link class='nav-link' to='/register'>Register</Link>
        //</div>
    )
}

export default Navigation