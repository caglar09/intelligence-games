import React, { useState, useEffect } from 'react'
import { Col, Container, NavLink } from 'reactstrap'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import { Redirect, useHistory, useParams } from 'react-router'
import { } from 'react-router-dom'

import LogoMor from '../../assets/images/intelligence-game-icon-mor.svg'
import AuthLoginComponent from '../../components/auth-login-component'
import AuthRegisterComponent from '../../components/auth-register-component'

import { Enums } from '../../assets/data/enums'
import Image1 from '../../assets/images/undraw_Access_account_re_8spm.svg'



function AuthScreen(props) {
    const history = useHistory();
    const [_viewMode, setViewMode] = useState();
    const { viewMode } = useParams();

    useEffect(() => {
        if (viewMode && Object.values(Enums.AuthScreenViewModes).find(s => s === viewMode)) {
            setViewMode(viewMode)
        }
    }, [viewMode])

    const changeViewMode = (mode) => {
        setViewMode(mode)
        history.replace(`/auth/${mode}`)
    }

    return (
        <Container fluid className="px-0 auth">

            <Col md={5}>
                <div className="full-height form-content"  >
                    <div className="logo-container">
                        <NavLink href="/"><img src={LogoMor} alt="intelligence games" className="logo" /></NavLink>
                        <h1>Intelligence Game</h1>
                        {_viewMode === Enums.AuthScreenViewModes.Login || _viewMode === Enums.AuthScreenViewModes.Forgot ?
                            <a href="javascript:void(false)" onClick={() => changeViewMode(Enums.AuthScreenViewModes.Register)} className="right-top-button">Kayıt Ol &nbsp; <RiArrowRightLine /></a> : (
                                <>
                                    <p className="description">
                                        Aşağıdaki alanları doldurarak hızlıca hesabınızı oluşturabilirsiniz.
                                    </p>
                                    <a href="javascript:void(false)" onClick={() => changeViewMode(Enums.AuthScreenViewModes.Login)} className="left-top-button"><RiArrowLeftLine /> &nbsp; Giriş Yap</a>
                                </>
                            )
                        }
                    </div>
                    {(_viewMode === Enums.AuthScreenViewModes.Login || _viewMode === Enums.AuthScreenViewModes.Forgot) &&
                        <AuthLoginComponent changeViewMode={changeViewMode} viewMode={_viewMode} />}
                    {_viewMode === Enums.AuthScreenViewModes.Register && <AuthRegisterComponent changeViewMode={changeViewMode} viewMode={_viewMode} />}
                </div>

            </Col>
            <Col md={7} className="tablet-hide">
                <div className="full-height form-content-right">
                    <img src={Image1} alt="hesap işlemleri" className="form-content-right-image" />

                    <div className="text-container">
                        {_viewMode === Enums.AuthScreenViewModes.Login && <h1> Hesabınıza giriş yapın</h1>}
                        {_viewMode === Enums.AuthScreenViewModes.Forgot && <h1>Şifre sıfırlama işlemleri</h1>}
                        {_viewMode === Enums.AuthScreenViewModes.Register && <h1> Yandaki alandan kayıt olunuz.</h1>}
                    </div>

                </div>

            </Col>

        </Container>
    )
}

export default AuthScreen
