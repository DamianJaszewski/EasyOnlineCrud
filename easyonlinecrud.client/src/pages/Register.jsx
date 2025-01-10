
import { Form } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Register() {
    return (
        <ContainerWrapper maxWidth="400px" heading="Rejestracja">
            <Form>
                <InputWrapper
                    controlId="formEmail"
                    type="email"
                    placeholder="Email"
                />
                <InputWrapper
                    controlId="formPassword"
                    type="password"
                    placeholder="Hasło"
                />
                <CustomButton title="Załóż konto" />
            </Form>
        </ContainerWrapper>
    )
}

export default Register