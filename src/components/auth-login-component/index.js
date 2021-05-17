import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { RiArrowRightLine } from 'react-icons/ri'
import LogoMor from '../../assets/images/intelligence-game-icon-mor.svg'


function AuthLoginComponent() {
    return (
        <div className="login-form">
            <div className="logo-container">
                <img src={LogoMor} alt="intelligence games" className="logo" />
                <h1>Intelligence Game</h1>

                <a href="/auth/register" className="right-top-button">Kayıt Ol &nbsp; <RiArrowRightLine /></a>
            </div>

            <Form>
                <FormGroup>
                    <Label for="exampleEmail">E-Posta </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="E-posta adresinizi giriniz" />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Şifre</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Şifrenizi giriniz " />
                </FormGroup>

                <FormGroup check className="mb-4">
                    <Label check><Input type="checkbox" />{' '}Beni Hatırla</Label>
                </FormGroup>
                <a href="#" className="btn purple-button">Giriş Yap</a>
            </Form>
        </div>
    )
}

export default AuthLoginComponent
