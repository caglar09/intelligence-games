import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, CardBody, CardImg, CardSubtitle } from 'reactstrap';
import { Enums } from '../../assets/data/enums';

const AppGameInfoModal = ({ isOpen, toggle, mode, data }) => {

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} centered size="lg">

                <ModalBody>
                    <Card className="d-flex flex-row">
                        <CardImg top src={data.image} style={{ height: 180, width: "auto" }} />
                        <CardBody>
                            <CardTitle tag="h5">{data?.name}</CardTitle>

                            <CardText>{data?.description}</CardText>
                        </CardBody>
                    </Card>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Kapat
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AppGameInfoModal;