import React, { useEffect, useLayoutEffect, useState } from 'react';
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

import Logo from '../../assets/images/intelligence-game.svg'
import LogoMor from '../../assets/images/intelligence-game-icon-mor.svg'



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
                        {!isSigned ?
                            <NavItem>
                                <NavLink className="sign-in" href="#about">Giriş Yap</NavLink>
                            </NavItem> :
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