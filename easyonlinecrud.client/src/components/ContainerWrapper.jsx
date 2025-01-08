
import { Container } from "react-bootstrap";

function ContainerWrapper ({ maxWidth, children, heading }) {
    return (
        <Container className="mt-5" style={{ maxWidth: maxWidth, padding: "1rem" }}>
            <h1 className="mb-3">{heading}</h1>
            {children}
        </Container>
    )
};

export default ContainerWrapper