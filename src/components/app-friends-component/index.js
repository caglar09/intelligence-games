import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge, InputGroup, InputGroupText, InputGroupAddon, Card } from 'reactstrap';
import { Enums } from '../../assets/data/enums';
import { Context as AuthContext } from "../../context/AuthContext"

import { RiUserStarFill } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { ImUsers } from 'react-icons/im'
import ScoreData from '../../assets/data/score-data.json'


const AppFriendsModal = ({ isOpen, toggle }) => {
    const authContext = useContext(AuthContext);
    const [data, setData] = useState([])
    useEffect(() => {
        if (isOpen) {
            setData(ScoreData)
        }
    }, [isOpen])
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} centered className={"friends-modal"} scrollable >
                <ModalHeader toggle={toggle}>
                    Arkadaşlarım ({`${authContext.state.user.name} ${authContext.state.user.lastname}`})
                </ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <span className="text-muted">Arkadaş eklemek için arama yapınız</span>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <FiUsers size={24} className="color-purple" /></InputGroupText>
                            </InputGroupAddon>
                            <input type="text" placeholder="Kullanıcı ara" className="form-control" />
                            {/* <Input placeholder="username" /> */}
                        </InputGroup>
                    </div>


                    <div className="friend-list">
                        {data.slice(0, 15).map((score, i) => (
                            <div className="friend-row">
                                <div className="d-flex flex-row align-items-center">
                                    <ImUsers size={28} className="color-purple" />
                                    <a href="#"> <b>{score.name}</b></a>
                                </div>
                                <a className="text-danger" href="#">Arkadaşlıktan Çıkar</a>
                            </div>
                        ))}

                    </div>

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

export default AppFriendsModal;