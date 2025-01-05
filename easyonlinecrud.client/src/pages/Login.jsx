
import { Container, Form, Button } from "react-bootstrap";

function Login() {
    return (
        <Container className="mt-5" style={{ maxWidth: "400px" }}>
            <h1 className="mb-3">Logowanie</h1>
            <Form style={{ textAlign: "left" }}>
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Podaj email" />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="Podaj hasło" />
                </Form.Group>

                <Button style={{textAlign: "center"}} variant="primary" type="submit">
                    Zaloguj
                </Button>
            </Form>
        </Container>
    );
}

export default Login;