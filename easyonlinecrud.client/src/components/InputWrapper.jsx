
import { Form } from "react-bootstrap";

function InputWrapper ({ controlId, typeName, placeholder, value, onChange, className }) {
    return (
        <Form.Group controlId={controlId} className={className || "mb-3"} >
            <Form.Control
                type={typeName}
                placeholder={placeholder}
                value={value || ""}
                onChange={onChange || (() => { })}
                style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                }}
            />
            <hr style={{ margin: "0.3rem", border: "1px solid" }} />
        </Form.Group>
    )
}

export default InputWrapper