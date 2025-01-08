
import { Form } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Register() {
    return (
        <ContainerWrapper maxWidth="400px" heading="Rejestracja">
            <Form>
                <InputWrapper
                    controlId="formEmail"
                    title="Email"
                    type="email"
                    placeholder="Podaj email"
                />
                <InputWrapper
                    controlId="formPassword"
                    title="Hasło"
                    type="password"
                    placeholder="Podaj hasło"
                />
                <CustomButton title="Załóż konto" />
            </Form>
        </ContainerWrapper>
    )
}

export default Register