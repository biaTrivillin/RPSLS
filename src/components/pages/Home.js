import Button from '../layout/Button';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import '../../styles/Home.css';

import logo from '../../imgs/logo.png';
import arrows from '../../imgs/arrows.png';

import SpockHand from '../../imgs/spock-hand.png';
import BordRockHand from '../../imgs/bord-rock-hand.png';
import BordPaperHand from '../../imgs/bord-paper-hand.png';
import BordScissorsHand from '../../imgs/bord-scissors-hand.png';
import BordLizardHand from '../../imgs/bord-lizard-hand.png';
import BordSpockHand from '../../imgs/bord-spock-hand.png';

import React, { useState } from "react";

function Home() { 

    const [showStyle, setShowStyle] = useState('know_more_content hide');
    
    const [showStyleBtn, setShowStyleBtn] = useState('btn show');

    const knowMore = () => {

        if (showStyle !== 'know_more_content show') setShowStyle('know_more_content show');
        else setShowStyle('know_more_content hide');

        if (showStyleBtn !== 'btn click') setShowStyleBtn('btn click');
        else setShowStyleBtn('btn');
    }

    function playGame () {
        window.location.href = '/game';
    }

    return (
        <div className="content">
            <Header/>
            <section className="presentation_content">
                <div className="title_container">
                    <div className="title_content">
                        <h1>ROCK</h1>
                        <h1>PAPER</h1>
                        <h1>SCISSORS</h1>
                        <h1>LIZARD</h1>
                        <h1>SPOCK</h1>
                    </div>
                    <img src={SpockHand} alt=""/>
                </div>

                <Button click={knowMore} cta='KNOW MORE' class={showStyleBtn} id='know_more_btn'/>
            </section>

            <section className={showStyle}>
                <div className="game_history_content">
                    <article>
                        Have you ever heard of the game Rock-paper-scissors-lizard-Spock? It's like the classic game, but with two additional weapons! Created by Sam Kass and Karen Bryla, it received Sheldon Cooper's seal of approval for resolving any kind of dispute and gained even more popularity thanks to the TV series "The Big Bang Theory".
                    </article>
                    <img src={logo} alt=''/>
                </div>

                <div className="game_rules">
                    <article>
                        According to Sheldon Cooper, the game is very simple: "Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, and (as it always has) Rock crushes Scissors."
                    </article>
                    <div className="rules_img_container">
                        <img className="arrow_img" src={arrows} alt=''/>
                        <img className="hand_img" src={BordRockHand} alt=''/>
                        <img className="hand_img" src={BordPaperHand} alt=''/>
                        <img className="hand_img" src={BordScissorsHand} alt=''/>
                        <img className="hand_img" src={BordLizardHand} alt=''/>
                        <img className="hand_img" src={BordSpockHand} alt=''/>
                    </div>
                </div>

                <Button click={playGame} cta='PLAY GAME' class='btn' id='game_btn'/>
            </section>
            <Footer/>
        </div>
    )
}

export default Home
