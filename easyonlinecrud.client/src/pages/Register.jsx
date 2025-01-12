﻿
import { useState } from 'react';

import { Form } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Register() {

    const initialNewUser = {
        email: '',
        password: ''
    }

    const [newUser, setNewUser] = useState(initialNewUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://localhost:7021/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
    }

    return (
        <ContainerWrapper maxWidth="400px" heading="Rejestracja">
            <Form onSubmit={handleSubmit}>
                {/*<InputWrapper*/}
                {/*    controlId="formName"*/}
                {/*    type="name"*/}
                {/*    placeholder="Nazwa"*/}
                {/*    value={newUser.userName}*/}
                {/*    onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}*/}
                {/*/>*/}
                <InputWrapper
                    controlId="formEmail"
                    type="email"
                    placeholder="Email"
                    iconName="bi bi-envelope"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <InputWrapper
                    controlId="formPassword"
                    type="password"
                    placeholder="Hasło"
                    iconName="bi bi-key"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <CustomButton title="Załóż konto" />
            </Form>
        </ContainerWrapper>
    );
}

export default Register