import React, { } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FaRegCopyright } from 'react-icons/fa'

import LandingPageHeader from '../../components/landing-header';
import LangingPageCarousel from '../../components/landing-page-carousel';

import AboutImage from '../../assets/images/undraw_about_me_wa29.svg'
import ContactImage from '../../assets/images/undraw_contact_us_15o2.svg'
import PricingImage from '../../assets/images/undraw_personal_finance_tqcd.svg'
import PurposeImage from '../../assets/images/undraw_functions_purpose_egi3.svg'
import LandingFooter from '../../components/landing-footer';
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
                            Öğrenirken eğlenmeyi hedefleyen projemiz size aynı zamanda analitik düşünme becerilerini geliştirmeyi,
                            konsantrasyonu yeteneğinizi artırmayı, öngörü becerisini daha çok düşünmeyi, çözüm üretme daha pratik olmayı
                            Çok yönlü düşünme ve çoklu zekanın daha etkin kullanımını bunu yanı sıra el-göz koordinasyonunu
                            geliştirmeyi amaçlarımız arasında öncelik verdik. Pandemi sürecinde değişen bir çok şeyin yanında eğitimdeki fırsat eşitsizliğinden dolayı bu fırsat yaratmayı da hedefliyoruz.
                        </p>
                    </div>
                    <div className="col-md-7 order-1" >
                        <img alt="test" src={PurposeImage} className={"w-100 section-image"} />
                    </div>

                </div>
            </Container>
        </section>
        <section className="container-fluid section-content  bg-gray" id="about">
            <Container>
                <div className="row">
                    <div className="col-md-7  order-0" >
                        <img alt="test" src={AboutImage} className={"w-100 section-image"} />
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center order-1 ">
                        <h1 className="text-center fw-bold section-title">Hakkımızda</h1>
                        <p className="text-center mt-4 fs-18">
                            Dünyada yaşanan pandemi sorunları nedeniyle öğrencilerin eğitim
                            materyallerine erişme sıkıntısı doğuruyor ve bu da eğitim açısından büyük bir
                            eksiklik olarak gözlere çarpmakta bizim projenin amacı öğrencilerin materyalleri
                            kullanımını en aza indirmek ve öğrenmeyi eğlenceli ve kalıcı hale getirmek, web
                            sitemizin öğrenciler arasında rekabet ortamı oluşturmak ve hatta öğrenciler
                            arasında turnuva düzenleme ve benzeri gibi kolaylıklar sağlamak ve bunları
                            yaparken özellikle materyal üretimi için kullanılan ağaç plastik ve benzeri
                            maddelerin kullanımını en aza indirmek
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
                        <img alt="test" src={PricingImage} className={"w-100 section-image"} />
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
                        <img alt="test" src={ContactImage} className={"w-100 section-image"} />
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
                                <Button className="bg-purple no-border purple-button">Gönder</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <footer>
            <LandingFooter />
            <div className="container-fluid d-flex flex-row justify-content-center align-items-center bg-dark-purple" id="sub-footer" >
                {new Date().getFullYear().toString()} <FaRegCopyright className="mr-1 ml-1" /> Tüm hakları saklıdır.
            </div>

        </footer>
    </>
    );
}

export default LandingPage
