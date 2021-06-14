import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, CardImg, CardBody, CardSubtitle, Badge } from 'reactstrap';
import { GrGroup } from 'react-icons/gr'
import { ImUsers } from 'react-icons/im'
import { GiKeyring } from 'react-icons/gi'


import { Enums } from '../../assets/data/enums';
import { Context as AuthContext } from "../../context/AuthContext"


const groups = [
    {
        id: 12,
        name: "8. Sınıf",
        description: "Zübeyde Hanım OrtaOkulu 8. Sınıf Zeka Oyunları Grubu",
        code: "ZXYE5-E",
        users: [{
            "name": "İbrahim Kayahan",
            "score": 1235,
            "id": 117
        },
        {
            "name": "Çağlar Yıldırım",
            "score": 5687,
            "id": 118
        },
        {
            "name": "Mustafa Emir Karademir",
            "score": 98,
            "id": 119
        },
        {
            "name": "user-123648",
            "score": 10,
            "id": 120
        },
        {
            "name": "Ramazan Tori",
            "score": 103,
            "id": 121
        },
        {
            "name": "Batuhan Koruyan",
            "score": 561,
            "id": 122
        },
        
        ]
    },
    {
        id: 32,
        name: "6. Sınıf",
        description: "Zübeyde Hanım OrtaOkulu 6. Sınıf Zeka Oyunları Grubu",
        code: "THG4E-X",
        users: [{
            "name": "Mervegül Ulaş",
            "score": 298,
            "id": 109
        },
        {
            "name": "Taner Yay",
            "score": 287,
            "id": 110
        },

        {
            "name": "Utku Rona",
            "score": 83,
            "id": 112
        },
        {
            "name": "Giray Özgümüş",
            "score": 186,
            "id": 113
        },
        {
            "name": "Talip Orhan",
            "score": 298,
            "id": 114
        },
        {
            "name": "Dilşad Nur Kızıltuğ",
            "score": 149,
            "id": 115
        },
        {
            "name": "Hale Nur Kavasoğlu",
            "score": 36,
            "id": 116
        }
        ]
    }
];

const AppGroupModal = ({ isOpen, toggle }) => {
    const authContext = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState(groups[0].id);
    const [activeDetailTab, setActiveDetailTab] = useState(1);

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            setActiveDetailTab(1)
        }
    }

    const toggleDetailTab = tab => {
        if (activeDetailTab !== tab) setActiveDetailTab(tab);
    }
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} centered scrollable className={"game-modal"}>
                <ModalHeader toggle={toggle} tag="h3">
                    Gruplarım ({`${authContext.state.user.name} ${authContext.state.user.lastname}`})
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col sm="3">

                            {groups.map((group, index) => (
                                <Card body outline key={index.toString()} className={"mb-3 group-card " + (group.id === activeTab ? "active" : "")} onClick={() => toggleTab(group.id)}>
                                    <CardTitle tag="h4">{group.name} <small style={{ fontSize: 14 }}><i>({group.users.length} katılımcı)</i></small> </CardTitle>
                                    <CardText>{group.description}</CardText>
                                </Card>
                            ))}
                        </Col>
                        <Col sm="8" className="border-left-1">
                            <TabContent activeTab={activeTab}>

                                {groups.map((group, index) => (
                                    <TabPane tabId={group.id}>
                                        <Row>
                                            <Col sm="12">
                                                <div className="d-flex flex-row align-items-center">
                                                    <GrGroup size={48} className="color-purple" />
                                                    <h3 className="ml-2 d-flex flex-row align-items-center">
                                                        {group.name} <small><GiKeyring size={24} className="color-purple mx-2" /><Badge className="bg-purple text-white">{group.code}</Badge></small>
                                                    </h3>
                                                </div>
                                                <div>
                                                    <Nav tabs className="mb-2 detail-tabs">
                                                        <NavItem>
                                                            <NavLink
                                                                className={activeDetailTab === 1 && "active"}
                                                                onClick={() => { toggleDetailTab(1); }}
                                                            >
                                                                Açıklama
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                            <NavLink
                                                                className={activeDetailTab === 2 && "active"}
                                                                onClick={() => { toggleDetailTab(2); }}
                                                            >
                                                                Katılımcılar ({group.users.length})
                                                            </NavLink>
                                                        </NavItem>
                                                    </Nav>

                                                    <TabContent activeTab={activeDetailTab}>
                                                        <TabPane tabId={1}>
                                                            <Row>
                                                                <Col sm="12">
                                                                    <p>
                                                                        {group.description}
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </TabPane>
                                                        <TabPane tabId={2}>
                                                            <Row>
                                                                <Col sm="12">
                                                                    <div className="friend-list">
                                                                        {group.users.map((user, i) => (
                                                                            <div key={i.toString()} className="friend-row">
                                                                                <div className="d-flex flex-row align-items-center">
                                                                                    <ImUsers size={28} className="color-purple" />
                                                                                    <a href="#"> <b>{user.name}</b></a>
                                                                                </div>
                                                                                {/* <a className="text-danger" href="#">Arkadaşlıktan Çıkar</a> */}
                                                                            </div>
                                                                        ))}

                                                                    </div>

                                                                </Col>
                                                            </Row>
                                                        </TabPane>
                                                    </TabContent>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                ))}
                            </TabContent></Col>
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

export default AppGroupModal;