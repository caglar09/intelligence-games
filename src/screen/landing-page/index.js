import React, { useState } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { datas } from '../../assets/data/data';
import LandingPageHeader from '../../components/landing-header';
import LangingPageCarousel from '../../components/landing-page-carousel';

import AboutImage from '../../assets/images/undraw_about_me_wa29.svg'
import ContactImage from '../../assets/images/undraw_contact_us_15o2.svg'
import TeamImage from '../../assets/images/undraw_team_ih79.svg'
import PricingImage from '../../assets/images/undraw_personal_finance_tqcd.svg'
import PurposeImage from '../../assets/images/undraw_functions_purpose_egi3.svg'
import LandingFooter from '../../components/landing-footer';
import pricingPackages from '../../assets/data/pricing-list';
import LandingPrices from '../../components/landing-prices';

function LandingPage() {

    return (<>
        <LandingPageHeader />
        <section className="container-fluid bg-gray" id="features">
            <LangingPageCarousel />
        </section>
        <section className="container-fluid section-content" id="purpose">
            <Container>
                <div className="row">
                    <div className="col-md-5 d-flex flex-column justify-content-center order-0 ">
                        <h1 className="text-center fw-bold section-title">Amacımız</h1>
                        <p className="text-center mt-4 fs-18">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-md-7 order-1" >
                        <img src={PurposeImage} className={"w-100 section-image"} />
                    </div>

                </div>
            </Container>
        </section>
        <section className="container-fluid section-content  bg-gray" id="about">
            <Container>
                <div className="row">
                    <div className="col-md-7  order-0" >
                        <img src={AboutImage} className={"w-100 section-image"} />
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center order-1 ">
                        <h1 className="text-center fw-bold section-title">Hakkımızda</h1>
                        <p className="text-center mt-4 fs-18">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
        <section className="container-fluid section-content" id="pricing">
            <Container>
                <div className="row">
                    <div className="col-md-5 d-flex flex-column justify-content-center order-0 ">
                        <h1 className="text-center fw-bold section-title">Fiyatlandırma</h1>
                        <p className="text-center mt-4 fs-18">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-md-7 order-1" >
                        <img src={PricingImage} className={"w-100 section-image"} />
                    </div>
                    <div className="col-md-12 order-2 mt-md-5">
                        <div className="price-list">

                            <LandingPrices />

                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section className="container-fluid section-content  bg-gray" id="contact">
            <Container>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center order-0" >
                        <img src={ContactImage} className={"w-100 section-image"} />
                    </div>
                    <div className="col-md-7 order-1">
                        <h1 className="text-center fw-bold section-title">İletişim</h1>
                        <p className="text-center mt-4 fs-18">
                            Lütfen aşağıdaki iletişim formunu doldurunuz.
                        </p>
                        <div className="contact-form-container">
                            <Form action="#" >
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="email">E-posta</Label>
                                            <Input type="email" name="email" id="email" placeholder="E-posta adresiniz." />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="phone">Telefon</Label>
                                            <Input type="number" name="Phone" id="phone" placeholder="Telefon numaranız." />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormGroup>
                                    <Label for="message">Mesajınız</Label>
                                    <Input type="textarea" name="text" id="message" placeholder="Mesajınızı giriniz." rows={5} />
                                </FormGroup>
                                <Button className="bg-purple no-border">Gönder</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <footer>
            <LandingFooter />
        </footer>
    </>
    );
}

export default LandingPage
