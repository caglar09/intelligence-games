import React, { useState } from 'react'
import { Container } from 'reactstrap';

import AppPageHeader from '../../components/app-page-header';

import gameDatas from '../../assets/data/games-data.json'


function AppGames() {

    return (
        <Container fluid className="px-0 app">
            <AppPageHeader />
            <section className="container-fluid bg-gray">
                <div className="container section-content">
                    <h1>Zeka Oyunları</h1>
                </div>
            </section>
            <section className="container-fluid">
                <div className="container section-content">
                    <div className="row game-card-container">
                        {gameDatas.map((game, gameIndex) => {
                            return <div className="col-md-2 game-card">
                                <img src={game.image} className="game-image" />
                                <h1 className="game-title">{game.name}</h1>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default AppGames
