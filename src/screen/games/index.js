import React, { useState, useEffect } from 'react'
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay, Row, Col, CardFooter
} from 'reactstrap';
import { GoPlay } from 'react-icons/go'
import { BsDot, BsFillCollectionPlayFill, BsInfoCircleFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { GiGamepad } from 'react-icons/gi'

import AppPageHeader from '../../components/app-page-header';

import gameDatas from '../../assets/data/games-data.json'
import AppGameModal from '../../components/app-game-modal';
import { Enums } from '../../assets/data/enums';
import AppMessagesModal from '../../components/app-messages-component';
import AppGroupModal from '../../components/app-groups-component';
import AppFriendsModal from '../../components/app-friends-component';
import AppGameInfoModal from '../../components/app-info-component';


function AppGames() {
    const [modal, setModal] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const [isMessagesShowModal, setMessagesShowModal] = useState(false);
    const [isGroupsShowModal, setGroupsShowModal] = useState(false);
    const [isFriendsShowModal, setFriendsShowModal] = useState(false);
    const [isGameInfoShowModal, setGameInfoShowModal] = useState(false);
    const [gameData, setGameData] = useState({});
    const [mode, setMode] = useState(Enums.GameModes.Play);

    const toggle = () => setModal(!modal);
    const showMessagesModalToggle = () => setMessagesShowModal(!isMessagesShowModal);
    const showGroupsModalToggle = () => setGroupsShowModal(!isGroupsShowModal);
    const showFriendsModalToggle = () => setFriendsShowModal(!isFriendsShowModal);
    const showGameInfoModalToggle = () => setGameInfoShowModal(!isGameInfoShowModal);

    const handlePlayGame = (game, _mode) => {
        setSelectedGame(game)
        setMode(_mode)
        toggle()
    }

    return (
        <Container fluid className="px-0 app">
            <AppPageHeader toggleMessageModal={showMessagesModalToggle} toggleGroupModal={showGroupsModalToggle} toggleFriendsModal={showFriendsModalToggle} />
            <section className="container-fluid bg-gray">
                <div className="container section-content " style={{ minHeight: "10vh" }}>
                    <div className="d-flex flex-row align-items-center"><GiGamepad size={64} className="color-purple" /> <h1 className="ml-3 mb-0">Zeka Oyunları</h1></div>
                    <h6>Toplam {gameDatas.length.toString()} oyun, <b>2873</b> oyuncu sizi bekliyor. </h6>
                </div>
            </section>
            <section className="container-fluid">
                <div className="container section-content">
                    <div className="row game-card-container">
                        {gameDatas.map((game, gameIndex) => {
                            return <Card key={gameIndex.toString()} className="col-md-6 game-card px-0 col-md-offset-1">
                                <Row noGutters>
                                    <Col md={6} xs={12} sm={6} className="px-0">
                                        <div>
                                            <CardImg top width="100%" src={game.image} alt="Card image cap" />
                                            <div className="d-flex flex-row">
                                                <a className="btn purple-button border-right-1" onClick={() => handlePlayGame(game, Enums.GameModes.Play)}><GoPlay className="mr-2" /> Oyun Oyna </a>
                                                <a className="btn yellow-button" onClick={() => handlePlayGame(game, Enums.GameModes.Watch)} ><BsFillCollectionPlayFill className="mr-2" /> İzle </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} xs={12} sm={6} className="pl-0">
                                        <CardBody className="game-content">
                                            <CardTitle tag="h5" className="game-title d-flex justify-content-between algin-items-center">
                                                {game.name}
                                                <a href="#" onClick={() => {
                                                    setGameData(game)
                                                    showGameInfoModalToggle()
                                                }} className="color-purple"> <BsInfoCircleFill /></a>
                                            </CardTitle>
                                            <CardText className="game-description">
                                                <p>{game.description}</p>

                                            </CardText>

                                            <GoPrimitiveDot color="green" fontSize={24} />({Math.round(Math.random() * 999)}) Online Oyuncu
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        })}
                    </div>
                </div>
            </section>
            <AppGameModal isOpen={modal} toggle={toggle} game={selectedGame} mode={mode} />
            <AppMessagesModal isOpen={isMessagesShowModal} toggle={showMessagesModalToggle} />
            <AppGroupModal isOpen={isGroupsShowModal} toggle={showGroupsModalToggle} />
            <AppFriendsModal isOpen={isFriendsShowModal} toggle={showFriendsModalToggle} />
            <AppGameInfoModal isOpen={isGameInfoShowModal} toggle={showGameInfoModalToggle} data={gameData} />
        </Container>
    )
}

export default AppGames
