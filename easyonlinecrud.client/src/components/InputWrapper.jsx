
import { Form } from "react-bootstrap";

function InputWrapper ({ controlId, title, typeName, placeholder, value, onChange, className }) {
    return (
        <Form.Group controlId={controlId} className={className || "mb-3"} >
            <Form.Label style={{ display: "flex" }}>{title}</Form.Label>
            <Form.Control
                type={typeName}
                placeholder={placeholder}
                value={value || ""}
                onChange={onChange || (() => { })}
            />
        </Form.Group>
    )
}

export default InputWrapper