
import { Form } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Login() {

    return (
        <ContainerWrapper maxWidth = "400px" heading = "Logowanie">
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
                <CustomButton title="Zaloguj"/>
            </Form>
        </ContainerWrapper>
    );
}

export default Login;