import React from 'react'
import { Container, ListGroup } from 'reactstrap';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import LogoMor from '../../assets/images/intelligence-game-icon-mor.svg'


function LandingFooter() {
    return (
        <div className="container-fluid bg-purple " id="footer">
            <Container   >
                <div className="row">
                    <div className="col-sm-2 col-md-2 d-flex justify-content-center align-items-baseline ">
                        <img src={LogoMor} className="logo" />
                    </div>
                    <div className="col-sm-10 col-md-6">
                        <ListGroup type="unstyled">
                            <li className="list-group-item">
                                <a href="#contact">İletişim</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#"> Veri Gizliliği</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#">Kullanıcı Sözleşmesi</a>
                            </li>
                        </ListGroup>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <ListGroup type="unstyled">
                            <li className="list-group-item">
                                <a href="#"><FaFacebookSquare /> Facebook'da biz</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.instagram.com/gamesintelligence" target="_blank"> <FaInstagramSquare /> Instagram'da biz</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://twitter.com/IntelligenceGa9?s=09" target="_blank"><FaTwitterSquare /> Twitter'da biz</a>
                            </li>
                        </ListGroup>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LandingFooter
