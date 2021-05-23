import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import { Enums } from '../../assets/data/enums';

const AppGameModal = ({ isOpen, toggle, game, mode }) => {

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} centered className={"game-modal"}>
                <ModalHeader toggle={toggle}>
                    {game?.name} ({mode === Enums.GameModes.Play ? "Oynuyorsun" : "İzliyorsun"})
                </ModalHeader>
                <ModalBody>

                    <Row className="h-100">
                        <Col sm="8" className="h-100">
                            <Card body className="h-100 align-items-center justify-content-center">
                                <CardText ><h3>Oyun Alanı</h3></CardText>
                            </Card>
                        </Col>
                        <Col sm="4" className="h-100 mbs-hide">
                            <Card className="h-100">
                                <CardHeader>
                                    Sohbet
                                </CardHeader>
                                <CardBody className="h-100">
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        {mode === Enums.GameModes.Play ? "Oyunu Bitir" : "izlemeyi Bitir"}
                    </Button>{' '}
                    {mode === Enums.GameModes.Play && <Button color="secondary" onClick={toggle}>Oyundan Kaç :)</Button>}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AppGameModal;