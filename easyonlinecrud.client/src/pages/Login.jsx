
import { Form } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Login() {
    return (
        <ContainerWrapper maxWidth = "400px" heading = "Logowanie">
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
                <CustomButton title="Zaloguj"/>
            </Form>
        </ContainerWrapper>
    );
}

export default Login;