import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { Enums } from '../../assets/data/enums';

import { Context as AuthContext } from '../../context/AuthContext'

function AuthLoginComponent({ viewMode, changeViewMode }) {
    const authContext = React.useContext(AuthContext);


    if (viewMode === Enums.AuthScreenViewModes.Forgot) {
        return (
            <div className="login-form">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">E-Posta </Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="E-posta adresinizi giriniz" value={authContext.state.user.email} />
                    </FormGroup>

                    <FormGroup check className="mb-4 p-0 d-flex flex-row align-items-center justify-content-center">
                        <NavLink href="javascript:void(0)" onClick={(e) => changeViewMode(Enums.AuthScreenViewModes.Login)}>Giriş Yap</NavLink>
                    </FormGroup>
                    <a href="#" className="btn purple-button">Şifre sıfırlama linki gönder</a>
                </Form>
            </div>
        )
    }

    return (
        <div className="login-form">
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">E-Posta </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="E-posta adresinizi giriniz" value={authContext.state.user.email} />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Şifre</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Şifrenizi giriniz " value={authContext.state.user.password} />
                </FormGroup>

                <FormGroup check className="mb-4 d-flex flex-row align-items-center justify-content-between">
                    <Label check><Input type="checkbox" />{' '}Beni Hatırla</Label>
                    <NavLink href="javascript:void(0)" onClick={(e) => changeViewMode(Enums.AuthScreenViewModes.Forgot)} className="pr-0">Şifremi Unuttum</NavLink>
                </FormGroup>
                <a href="/app" className="btn purple-button">Giriş Yap</a>
            </Form>
        </div>
    )
}

export default AuthLoginComponent
