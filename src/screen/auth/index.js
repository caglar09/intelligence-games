import React from 'react'
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


import AuthLoginComponent from '../../components/auth-login-component'
import AuthRegisterComponent from '../../components/auth-register-component'

import { Enums } from '../../assets/data/enums'
import Image1 from '../../assets/images/undraw_Access_account_re_8spm.svg'


function AuthScreen({ viewMode }) {

    return (
        <Container fluid className="px-0 auth">

            <Col md={5}>
                <div className="full-height form-content">
                    {viewMode === Enums.AuthScreenViewModes.Login && <AuthLoginComponent />}
                    {viewMode === Enums.AuthScreenViewModes.Register && <AuthRegisterComponent />}
                </div>

            </Col>
            <Col md={7} className="tablet-hide">
                <div className="full-height form-content-right">
                    <img src={Image1} alt="hesap işlemleri" className="form-content-right-image" />

                    <div className="text-container">
                        {viewMode === Enums.AuthScreenViewModes.Login && <h1> Hesabınıza giriş yapın</h1>}
                        {viewMode === Enums.AuthScreenViewModes.Register && <h1> Yandaki alandan kayıt olunuz.</h1>}
                    </div>

                </div>

            </Col>

        </Container>
    )
}

export default AuthScreen
