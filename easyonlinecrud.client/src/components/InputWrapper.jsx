
import { Form } from "react-bootstrap";

function InputWrapper ({ controlId, typeName, placeholder, value, onChange, className, iconName }) {
    return (
        <Form.Group controlId={controlId} className={className || "mb-3"} >
            <div style={{display: "flex"}}>
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
                {iconName ? <i class={iconName} style={{ padding: ".375rem 1rem", fontSize: "1.2rem" }}/> : "" }
            </div>
            <hr style={{ margin: "0.3rem", border: "1px solid" }} />
        </Form.Group>
    )
}

export default InputWrapper