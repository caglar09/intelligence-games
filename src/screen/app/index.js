import React, { useState } from 'react'
import { Container } from 'reactstrap';
import { SiGoogleclassroom } from 'react-icons/si'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import $ from 'jquery'
import AppPageHeader from '../../components/app-page-header';

const iconSize = 96

function AppDashboard() {
    const toghleShourcutMenu = () => {
        $('.card-menu-container').toggle({
            duration: 500
        })
    }

    return (
        <Container fluid className="px-0 app">
            <AppPageHeader />
            <section className="container-fluid bg-gray">
                <div className="container section-content">
                    <div className="d-flex flex-row justify-content-between">
                        <h3>Kısayollar</h3>
                        <a href="javascript:void(0)" className="color-purple" onClick={() => toghleShourcutMenu()} ><BiChevronDown size={48} /></a>
                    </div>
                    <hr />
                    <div className="card-menu-container">
                        <div className="card-menu">
                            <SiGoogleclassroom size={iconSize} className="color-purple" />
                            <span className="card-menu-title" >Sınıflarım</span>
                        </div>

                        <div className="card-menu">
                            <AiOutlineAppstoreAdd size={iconSize} className="color-purple" />
                            <span className="card-menu-title" >Sınıf Oluştur</span>
                        </div>
                    </div>
                </div>
            </section>

        </Container>
    )
}

export default AppDashboard
