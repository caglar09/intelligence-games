import React, { useState, useEffect, useContext } from 'react'
import {
    Container, ListGroup, ListGroupItem, Badge, Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { SiGoogleclassroom } from 'react-icons/si'
import { BiMessageSquareDots } from 'react-icons/bi'
import { GiGamepad } from 'react-icons/gi'
import { FiUsers, FiGlobe } from 'react-icons/fi'
import { BsFillCollectionPlayFill } from 'react-icons/bs'
import { GoPlay, GoPrimitiveDot } from 'react-icons/go'

import { Context as AuthContext } from '../../context/AuthContext'
import $ from 'jquery'

import AppPageHeader from '../../components/app-page-header';
import gameData from '../../assets/data/games-data.json'
import scoreFakeData from '../../assets/data/score-data.json'
import AppGameModal from '../../components/app-game-modal';
import AppMessagesModal from '../../components/app-messages-component';
import AppGroupModal from '../../components/app-groups-component';
import { Enums } from '../../assets/data/enums';
import AppFriendsModal from '../../components/app-friends-component';
const iconSize = 72
const DATA=scoreFakeData.sort((x, y) => (y.score >= x.score ? 1 : -1));
function AppDashboard() {
    const authContext = useContext(AuthContext)
    const [isShowPlayGameModal, setPlayGameModal] = useState(false);
    const [isMessagesShowModal, setMessagesShowModal] = useState(false);
    const [isGroupsShowModal, setGroupsShowModal] = useState(false);
    const [isFriendsShowModal, setFriendsShowModal] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null)
    const [mode, setMode] = useState(Enums.GameModes.Play);
    const playGameToggle = () => setPlayGameModal(!isShowPlayGameModal);
    const showMessagesModalToggle = () => setMessagesShowModal(!isMessagesShowModal);
    const showGroupsModalToggle = () => setGroupsShowModal(!isGroupsShowModal);
    const showFriendsModalToggle = () => setFriendsShowModal(!isFriendsShowModal);

    const handlePlayGame = (game, _mode) => {
        setSelectedGame(game)
        setMode(_mode)
        playGameToggle()
    }

    return (
        <Container fluid className="px-0 app">
            <AppPageHeader toggleMessageModal={showMessagesModalToggle} toggleGroupModal={showGroupsModalToggle} toggleFriendsModal={showFriendsModalToggle} />
            <section className="container-fluid bg-gray">
                <div className="container section-content pt-0">
                    <div className="row">
                        <div className="col-md-12 card-menu-container py-4">
                            <div className="col col-sm-12 card-menu" onClick={() => showGroupsModalToggle()}>
                                <SiGoogleclassroom size={iconSize} className="color-purple" />
                                <span className="card-menu-title" >Gruplarım</span>
                            </div>
                            <div className="col col-sm-12 card-menu" onClick={() => showFriendsModalToggle()} >
                                <FiUsers size={iconSize} className="color-purple" />
                                <span className="card-menu-title" >Arkadaşlarım</span>
                            </div>
                            <div className="col col-sm-12 card-menu" onClick={() => showMessagesModalToggle()}>
                                <BiMessageSquareDots size={iconSize} className="color-purple" />
                                <span className="card-menu-title" >Mesajlar</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-lg-4">
                        <div className="col-md-8 mb-xs-20">
                            <div className="d-flex flex-row align-items-center">
                                <GiGamepad size={32} className="color-purple" />
                                <h4 className="ml-1 mb-0">Son oynadığınız 5 oyun</h4>
                            </div>
                            <hr />
                            <div className="last-played-games row mx-height-none overflow-y-hidden" >
                                {gameData.slice(0, 5).map((game, index) => (
                                    <div key={`game_data_${index.toString()}`} className={`col-md-4 mb-4`}>
                                        <Card>
                                            <CardImg top width="100%" src={game.image} alt={game.name} />
                                            <CardBody className="pb-0">
                                                <CardTitle tag="h5">{game.name} <small> (<GoPrimitiveDot color="green" size={16} />{Math.round(Math.random() * 999)})</small></CardTitle>
                                            </CardBody>
                                            <div className="d-flex flex-row">
                                                <a className="btn purple-button border-right-1" onClick={() => handlePlayGame(game, Enums.GameModes.Play)} ><GoPlay className="mr-2" /> Oyna </a>
                                                <a className="btn yellow-button" onClick={() => handlePlayGame(game, Enums.GameModes.Watch)}  ><BsFillCollectionPlayFill className="mr-2" /> İzle </a>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="d-flex flex-row align-items-center">
                                <FiGlobe size={32} className="color-purple" />
                                <h4 className="ml-1 mb-0">Dünya Genelinde Sıralama</h4>
                            </div>
                            <hr />

                            <div className="score-board">
                                <ListGroup>
                                    {DATA.map((score, index) => {
                                        return <ListGroupItem active={score.id === authContext.state.user.id} key={index.toString()} className="d-flex align-items-center justify-content-between"> {index + 1} - {score.name}  <Badge pill>{score.score}</Badge></ListGroupItem>
                                    })}
                                </ListGroup>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid ">
                <div className="container section-content">
                    <div className="row">


                    </div>
                </div>
            </section>
            <AppGameModal isOpen={isShowPlayGameModal} toggle={playGameToggle} game={selectedGame} mode={mode} />
            <AppMessagesModal isOpen={isMessagesShowModal} toggle={showMessagesModalToggle} />
            <AppGroupModal isOpen={isGroupsShowModal} toggle={showGroupsModalToggle} />
            <AppFriendsModal isOpen={isFriendsShowModal} toggle={showFriendsModalToggle} />
        </Container>
    )
}

export default AppDashboard
