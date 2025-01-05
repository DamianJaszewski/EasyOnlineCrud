
import { Container, Form, Button } from "react-bootstrap";

function Login() {
    return (
        <Container className="mt-5" style={{ maxWidth: "400px" }}>
            <h1 className="mb-3">Logowanie</h1>
            <Form>
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label style={{ display: "flex" }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Podaj email" />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label style={{ display: "flex" }}>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="Podaj hasło" />
                </Form.Group>

                <Button className="btn w-100" style={{
                    backgroundColor: '#152837',
                    color: '#fff',  
                    borderRadius: '4px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                }}>
                    Zaloguj
                </Button>
            </Form>
        </Container>
    );
}

export default Login;