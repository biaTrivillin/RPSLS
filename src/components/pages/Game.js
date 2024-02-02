import GameWarning from "../layout/GameWarning"
import Header from '../layout/Header'
import Footer from "../layout/Footer"
import Button from "../layout/Button"
import GameWarningTitle from "../layout/GameWaningTitle"
import BordRockHand from '../../imgs/bord-rock-hand.png'
import BordPaperHand from '../../imgs/bord-paper-hand.png'
import BordScissorsHand from '../../imgs/bord-scissors-hand.png'
import BordLizardHand from '../../imgs/bord-lizard-hand.png'
import BordSpockHand from '../../imgs/bord-spock-hand.png'
import Rock from '../../imgs/rock-hand.png'
import Paper from '../../imgs/paper-hand.png'
import Scissors from '../../imgs/scissors-hand.png'
import Lizard from '../../imgs/lizard-hand.png'
import Spock from '../../imgs/spock-hand.png'
import '../../styles/Game.css'

import React, { useState } from "react";


function Game() {

    const [isItDisabled, setBtnDisabled] = useState(false);

    const [btnStyle, setBtnStyle] = useState('enabled');

    const [isThisImg, setImgChoice] = useState(Rock);

    const [animationChoice, setAnimationChoice] = useState('none_animation');

    const [gameMessage, setgameMessage] = useState('MAKE YOUR CHOICE');

    const [computerImg, setComputerImg] = useState(Rock);

    const userClick = (userChoice, choiceImg) => {

        if (isItDisabled !== false) setBtnDisabled(false);
        else setBtnDisabled(true)

        if (btnStyle !== 'disabled') setBtnStyle('disabled');

        if (animationChoice !== 'choice_animation') setAnimationChoice('choice_animation');
        else setAnimationChoice('none_animation')

        setInterval(() => {
            if (isThisImg !== choiceImg) setImgChoice(choiceImg);
        }, 1000);

        console.log(userChoice)
        console.log(choiceImg)
        console.log(isThisImg)

        const optionsArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

        const imgsArray = [Rock, Paper, Scissors, Lizard, Spock]

        const choiceIndex = Math.floor(Math.random() * 4) ;

        const computerChoice = optionsArray[choiceIndex] 

        const computerChoiceImg = imgsArray[choiceIndex]

        if (computerImg !== computerChoiceImg) setComputerImg(computerChoiceImg);
        else setComputerImg(Rock)

        console.log(computerChoice)

        let isThisAWin = false

        console.log(isThisAWin)

        if(
            (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'rock' && computerChoice === 'lizard') || (userChoice === 'rock' && computerChoice === 'lizard') || (userChoice === 'lizard' && computerChoice === 'spock') || (userChoice === 'spock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'lizard') || (userChoice === 'lizard' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'spock') || (userChoice === 'spock' && computerChoice === 'rock') || (userChoice === 'rock' && computerChoice === 'scissors')) {
            isThisAWin = true
        }

        if (isThisAWin === true && gameMessage !== "BAZINGA!") setgameMessage("BAZINGA!");
            else setgameMessage('WHAT A SHAME!')

        if (isThisAWin === false && userChoice === computerChoice) setgameMessage("IT' A TIE!");

    }


    function playAgain () {
        window.location.reload();
    }

    return (
        <div className="content">
            <Header/>
            <div className="content_presentation">
                <section className="warning_title_container">
                    <GameWarningTitle title={gameMessage}/>
                </section>
                <section className="game_container">
                    <div className="game_content">
                        <h1>YOU</h1>
                        <h1>COMPUTER</h1>
                        <div>
                            <img className={animationChoice} src={isThisImg} alt=""/>
                        </div>
                        <div>
                            <img className={animationChoice} src={computerImg} alt=""/>
                        </div>
                    </div>
                </section>

                <section className="selector_container">
                    <button onClick={() => userClick('rock', Rock)} disabled={isItDisabled}><img src={BordRockHand} alt="" className={btnStyle}/></button>
                    <button onClick={() => userClick('paper', Paper)} disabled={isItDisabled}><img src={BordPaperHand} alt="" className={btnStyle}/></button>
                    <button onClick={() => userClick('scissors', Scissors)} disabled={isItDisabled}><img src={BordScissorsHand} alt="" className={btnStyle}/></button>
                    <button onClick={() => userClick('lizard', Lizard)} disabled={isItDisabled}><img src={BordLizardHand} alt="" className={btnStyle}/></button>
                    <button onClick={() => userClick('spock', Spock)} disabled={isItDisabled}><img src={BordSpockHand} alt="" className={btnStyle}/></button>
                </section>

                <section className="warning_container">
                    <GameWarning title='WON' elementOne='lagarto' action='come' elementTwo='papel'/>
                    <Button click={playAgain} cta='PLAY AGAIN' class='btn' id='play_again_btn'/>
                </section>
            </div>   
            <Footer/>
        </div>
    )
}

export default Game