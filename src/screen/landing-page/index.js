import React, { } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FaRegCopyright, FaFacebookSquare, FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

import LandingPageHeader from '../../components/landing-header';
import LangingPageCarousel from '../../components/landing-page-carousel';
import LandingFooter from '../../components/landing-footer';
import LandingPrices from '../../components/landing-prices';

import AboutImage from '../../assets/images/undraw_about_me_wa29.svg'
import ContactImage from '../../assets/images/undraw_contact_us_15o2.svg'
import PricingImage from '../../assets/images/undraw_personal_finance_tqcd.svg'
import PurposeImage from '../../assets/images/undraw_functions_purpose_egi3.svg'

import Caglar from '../../assets/images/team/caglar.png'
import Batuhan from '../../assets/images/team/batuhan.jpg'
import Eda from '../../assets/images/team/eda.jpeg'
import Ramazan from '../../assets/images/team/ramazan.jpeg'

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
                <div className="row mt-5" id="team">
                    <div className="col-md-12" >
                        <h1 className="text-center fw-bold section-title mb-5">Ekibimiz</h1>
                        <div className=" d-flex flex-row justify-content-between flex-wrap">
                            <div className="image-area">
                                <div className="img-wrapper">
                                    <img src={Eda} alt="Eda ILDIR" />
                                    <h2 className="d-flex flex-column justify-content-center">Eda ILDIR
                                    <small style={{ fontSize: 13 }}>Proje Yöneticisi</small>
                                    </h2>
                                    <ul>
                                        <li><a target="_blank" href="https://github.com/"><FaGithub /></a></li>
                                        <li><a target="_blank" href="https://www.instagram.com//"><FaInstagram /></a></li>
                                        <li><a target="_blank" href="https://twitter.com/"><FaTwitter /></a></li>
                                        <li><a target="_blank" href="https://www.youtube.com/"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-area">
                                <div className="img-wrapper">
                                    <img src={Ramazan} alt="Ramazan TORI" />
                                    <h2 className="d-flex flex-column justify-content-center">Ramazan TORI
                                    <small style={{ fontSize: 13 }}>Konu Alan Uzmanı</small>
                                    </h2>
                                    <ul>
                                        <li><a target="_blank" href="https://github.com/"><FaGithub /></a></li>
                                        <li><a target="_blank" href="https://www.instagram.com//"><FaInstagram /></a></li>
                                        <li><a target="_blank" href="https://twitter.com/"><FaTwitter /></a></li>
                                        <li><a target="_blank" href="https://www.youtube.com/"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-area">
                                <div className="img-wrapper">
                                    <img src={Batuhan} alt="Batuhan KORUYAN" />
                                    <h2 className="d-flex flex-column justify-content-center">Batuhan KORUYAN
                                    <small style={{ fontSize: 13 }}>Grafik Tasarımcısı</small>
                                    </h2>
                                    <ul>
                                        <li><a target="_blank" href="https://github.com/"><FaGithub /></a></li>
                                        <li><a target="_blank" href="https://www.instagram.com//"><FaInstagram /></a></li>
                                        <li><a target="_blank" href="https://twitter.com/"><FaTwitter /></a></li>
                                        <li><a target="_blank" href="https://www.youtube.com/"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-area">
                                <div className="img-wrapper">
                                    <img src={Caglar} alt="Caglar YILDIRIM" />
                                    <h2 className="d-flex flex-column justify-content-center">Çağlar YILDIRIM
                                    <small style={{ fontSize: 13 }}>Yazılım Geliştiricisi</small>
                                    </h2>
                                    <ul>
                                        <li><a href="https://github.com/"><FaGithub /></a></li>
                                        <li><a href="https://www.instagram.com//"><FaInstagram /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                        <li><a href="https://www.youtube.com/"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                            Bazen yeni bilgiler edinmek, mesleki becerilerimizi geliştirmek
                            bazen de kişisel gelişimimizi tamamlamak için eğitimlere katılırız.
                            Değerlendirme sonunda başarılı olamayan öğrenciyi yeniden eğitime alır ve ikinci değerlendirme için davet eder.
                            Ancak sonuçların doğruluğu ve güvenilirliği için önceden belirlenen standartlara göre yapılması şarttır.
                            Başarılı olduğunuz eğitimi bir belgeyle kanıtlayın.
                            Başarınızı kanıtlamak için bireyin katıldığı, kazandığı içerikleri isterse belge
                            ile eposta yoluyla alın başarınızı kanıtlayın.
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
