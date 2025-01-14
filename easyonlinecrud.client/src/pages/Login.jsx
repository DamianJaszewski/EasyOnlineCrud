
import { useState } from 'react';

import { Form } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Login() {

    const initialUser = {
        email: '',
        password: ''
    }

    const [user, setUser] = useState(initialUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://localhost:7021/login?useCookies=true', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
    }

    return (
        <ContainerWrapper maxWidth = "400px" heading = "Logowanie">
            <Form onSubmit={handleSubmit}>
                <InputWrapper
                    controlId="formEmail"
                    type="email"
                    placeholder="Email"
                    iconName="bi bi-envelope"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <InputWrapper
                    controlId="formPassword"
                    type="password"
                    placeholder="Hasło"
                    iconName="bi bi-key"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <CustomButton title="Zaloguj"/>
            </Form>
        </ContainerWrapper>
    );
}

export default Login;