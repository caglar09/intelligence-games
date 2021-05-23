import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { FiUser, FiLogOut } from 'react-icons/fi'

import avatar1 from '../../assets/images/avatar1';
import LogoMor from '../../assets/images/intelligence-game-icon-mor.svg'
import LogoCircleMor from '../../assets/images/logo-mor100x.svg'

function AppPageHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const dropdownToggle = () => setDropdownOpen(prevState => !prevState);
    window.addEventListener('resize', (ev) => {
        const width = window.innerWidth;
        if (width < 768)
            setIsMobile(true)
        else
            setIsMobile(false)
    })


    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/app">
                <img src={LogoCircleMor} alt="intelligence games" className="navbar-img" />

                <div className="d-flex flex-column justify-content-center" >
                    <span className="fw-bold mbs-hide site-name">Intellingence</span>
                    <span className="fw-bold mbs-hide site-sub-name color-purple ">Games</span>
                </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/app">Anasayfa</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/app/games">Oyunlar</NavLink>
                    </NavItem>
                </Nav>
                <div>
                    <Dropdown direction={isMobile ? "down" : "left"} isOpen={dropdownOpen} toggle={dropdownToggle} className="user-dropdown">
                        <DropdownToggle className="custom-dropdwon-toggle">
                            <img src={"https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} alt={"user"} className="avatar" />
                        </DropdownToggle>
                        <DropdownMenu >
                            <div className="d-flex flex-column align-items-center justify-content-center my-4">
                                <img src={"https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} alt={"user"} className="avatar" />
                                <span className="user-name">Çağlar YILDIRIM</span>
                                <span className="user-email">test@test.com</span>
                            </div>
                            <DropdownItem divider />
                            <DropdownItem><FiUser size={20} className="dropdown-item-icon" /> <span>Hesabım</span></DropdownItem>
                            <DropdownItem onClick={() => document.location.href = "/"}><FiLogOut size={20} className="dropdown-item-icon" /> <span>Çıkış Yap</span></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

            </Collapse>
        </Navbar>

    )
}

export default AppPageHeader
