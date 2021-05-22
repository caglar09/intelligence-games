import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

function AuthRegisterComponent() {
    return (
        <div className="login-form">
            <Form>
                <FormGroup>
                    <Label for="name">Ad Soyad </Label>
                    <Input type="text" name="name" id="name" placeholder="Adınızı soyadınızı giriniz" />
                </FormGroup>

                <FormGroup>
                    <Label for="email">E-Posta </Label>
                    <Input type="email" name="email" id="email" placeholder="E-posta adresinizi giriniz" />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Şifre</Label>
                    <Input type="password" name="password" id="password" placeholder="Şifrenizi giriniz " />
                </FormGroup>

                <a href="#" className="btn purple-button">Kayıt Ol</a>
            </Form>
        </div>
    )
}

export default AuthRegisterComponent
