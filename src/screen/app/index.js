import React, { useState, useEffect } from 'react'
import { Container, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { SiGoogleclassroom } from 'react-icons/si'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BiMessageSquareDots } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import $ from 'jquery'

import AppPageHeader from '../../components/app-page-header';
import gameData from '../../assets/data/games-data.json'
const iconSize = 84

function AppDashboard() {
    const [scoreData, setScoreData] = useState([]);
    useEffect(() => {
        const data = []
        for (let i = 0; i < 49; i++) {
            let fakeUser = {
                name: "user-" + Math.round(Math.random() * 999999),
                score: Math.round(Math.random() * 500)
            }
            data.push(fakeUser)
        }
        data.unshift({ name: "Caglar YILDIRIM", score: 100000 })
        setScoreData(data)
    }, [])
    const toghleShourcutMenu = () => {
        $('.card-menu-container').toggle({
            duration: 500
        })
    }

    return (
        <Container fluid className="px-0 app">
            <AppPageHeader />
            <section className="container-fluid bg-gray">
                <div className="container section-content">
                    <div className="row">
                        <div className="col-md-4 mb-xs-20">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <h4>Kısayollar</h4>
                                {/* <a href className="color-purple pointer-link" onClick={() => toghleShourcutMenu()} ><BiChevronDown size={48} /></a> */}
                            </div>
                            <hr />
                            <div className="row card-menu-container">
                                <div className="col-md-5 card-menu">
                                    <SiGoogleclassroom size={iconSize} className="color-purple" />
                                    <span className="card-menu-title" >Sınıflarım</span>
                                </div>
                                <div className="col-md-1 tablet-hide" ></div>

                                <div className="col-md-5 card-menu">
                                    <AiOutlineAppstoreAdd size={iconSize} className="color-purple" />
                                    <span className="card-menu-title" >Sınıf Oluştur</span>
                                </div>

                                <div className="col-md-5 card-menu mt-md-3">
                                    <FiUsers size={iconSize} className="color-purple" />
                                    <span className="card-menu-title" >Arkadaşlarım</span>
                                </div>
                                <div className="col-md-1  tablet-hide" ></div>
                                <div className="col-md-5 card-menu mt-md-3">
                                    <BiMessageSquareDots size={iconSize} className="color-purple" />
                                    <span className="card-menu-title" >Mesajlar</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-xs-20">
                            <div className="d-flex flex-row justify-content-between">
                                <h4>Son Oynadığınız Oyunlar</h4>
                            </div>
                            <hr />
                            <div className="last-played-games">
                                <ListGroup>
                                    {gameData.slice(0, 5).map((game, index) => {
                                        return <ListGroupItem key={index.toString()} className="d-flex align-items-center justify-content-start">
                                            <img src={game.image} alt={game.name} className="mr-3" /> {game.name}
                                        </ListGroupItem>
                                    })}
                                </ListGroup>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="d-flex flex-row justify-content-between">
                                <h4>Dünya Genelinde Sıralama</h4>
                            </div>
                            <hr />

                            <div className="score-board">
                                <ListGroup>
                                    {scoreData.map((score, index) => {
                                        return <ListGroupItem active={index === 0} key={index.toString()} className="d-flex align-items-center justify-content-between"> {index + 1} - {score.name}  <Badge pill>{score.score}</Badge></ListGroupItem>
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

        </Container>
    )
}

export default AppDashboard
