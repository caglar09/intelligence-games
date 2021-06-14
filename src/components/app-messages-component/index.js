import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import { Enums } from '../../assets/data/enums';
import { Context as AuthContext } from "../../context/AuthContext"

const AppMessagesModal = ({ isOpen, toggle }) => {
    const authContext = useContext(AuthContext);
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} centered className={"game-modal"}>
                <ModalHeader toggle={toggle}>
                    Mesajlarım ({`${authContext.state.user.name} ${authContext.state.user.lastname}`})
                </ModalHeader>
                <ModalBody>

                    <Row className="h-100">
                        <Col sm="3" className="h-100">
                            <Card body className="h-100 align-items-center justify-content-center">
                                <CardText ><h3>Sohbet Edilen Kişiler</h3></CardText>
                            </Card>
                        </Col>
                        <Col sm="9" className="h-100 mbs-hide">
                            <Card body className="h-100 align-items-center justify-content-center">
                                <CardText ><h3>Mesaj Alanı</h3></CardText>
                            </Card>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button className="color-purple" color="white" onClick={toggle}>
                        Kapat
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AppMessagesModal;