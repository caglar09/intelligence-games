import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { RiArrowLeftLine } from 'react-icons/ri'
import LogoMor from '../../assets/images/intelligence-game-icon-mor.svg'


function AuthRegisterComponent() {
    return (
        <div className="login-form">
            <div className="logo-container">
                <img src={LogoMor} alt="intelligence games" className="logo" />
                <h1>Intelligence Game</h1>
                <p className="description">
                    Aşağıdaki alanları doldurarak hızlıca hesabınızı oluşturabilirsiniz.
                </p>
                <a href="/auth/login" className="left-top-button"><RiArrowLeftLine /> &nbsp; Giriş Yap</a>
            </div>

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
