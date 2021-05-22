import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import $ from 'jquery'

import LogoMor from '../../assets/images/intelligence-game-icon-mor.svg'
import { Enums } from '../../assets/data/enums';



const LandingPageHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSigned, setIsSigned] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        var header = $("#header");
        var sticky = "fixed-top";
        $(window).scroll(function () {
            if (window.scrollY > 50) {
                header.addClass(sticky);
            }
            else {
                header.removeClass(sticky);
            }
        });

    }, [$])

    return (
        <Navbar color="transparent" light expand="md" id="header" sticky="top" >
            <Container>
                <NavbarBrand href="/">
                    <img src={LogoMor} alt="intelligence games" className="navbar-img" />

                    <span className="fw-bold mbs-hide site-name">Intellingence <span className="color-purple ">Games</span></span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#features">Özellikler</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#purpose">Amacımız</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#pricing">Fiyatlandırma</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">Hakkımızda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">İletişim</NavLink>
                        </NavItem>
                        <NavItem className="d-flex flex-row align-items-center" >
                            <li className="seperator d-none d-lg-block">
                                &nbsp;
                            </li>
                        </NavItem>

                        {!isSigned ?
                            <NavItem className="auth-buttons">
                                <NavLink className="sign-in" href={`/auth/${Enums.AuthScreenViewModes.Login}`}>Giriş Yap</NavLink>

                                <NavLink className="sign-up" href={`/auth/${Enums.AuthScreenViewModes.Register}`}>Kayıt Ol</NavLink>
                            </NavItem>
                            :
                            <NavItem>
                                <NavLink className="my-account" href="#about">Hesabım</NavLink>
                            </NavItem>}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        //  <header></header>
    );
}

export default LandingPageHeader;