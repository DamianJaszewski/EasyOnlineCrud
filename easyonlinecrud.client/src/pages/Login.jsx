
import { useState } from 'react';

import { Form } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Login() {

    const initialUser = {
        userName: '',
        userEmail: '',
        userPassword: ''
    }

    const [user, setUser] = useState(initialUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://localhost:7021/api/lgin', {
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
                    value={user.userEmail}
                    onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
                />
                <InputWrapper
                    controlId="formPassword"
                    type="password"
                    placeholder="Hasło"
                    iconName="bi bi-key"
                    value={user.userPassword}
                    onChange={(e) => setUser({ ...user, userPassword: e.target.value })}
                />
                <CustomButton title="Zaloguj"/>
            </Form>
        </ContainerWrapper>
    );
}

export default Login;