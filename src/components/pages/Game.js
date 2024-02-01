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

    const [isThisImg, setImgChoice] = useState(Rock);

    const [animationChoice, setAnimationChoice] = useState('none_animation');

    const userClick = (choice, choiceImg) => {

        if (isItDisabled !== false) setBtnDisabled(false);
        else setBtnDisabled(true)

        if (animationChoice !== 'choice_animation') setAnimationChoice('choice_animation');
        else setAnimationChoice('none_animation')

        setInterval(() => {
            if (isThisImg !== choiceImg) setImgChoice(choiceImg);
        }, 1000);

        console.log(choice)
        console.log(choiceImg)
        console.log(isThisImg)
    }

    function playAgain () {
        window.location.reload();
    }

    return (
        <div className="content">
            <Header/>
            <div className="content_presentation">
                <section className="warning_title_container">
                    <GameWarningTitle title='BAZINGA!'/>
                </section>
                <section className="game_container">
                    <div className="game_content">
                        <h1>YOU</h1>
                        <h1>COMPUTER</h1>
                        <div>
                            <img className={animationChoice} src={isThisImg} alt=""/>
                        </div>
                        <div>
                            <img className={animationChoice} src={Rock} alt=""/>
                        </div>
                    </div>
                </section>

                <section className="selector_container">
                    <button onClick={() => userClick('rock', Rock)} disabled={isItDisabled}><img src={BordRockHand} alt="" /></button>
                    <button onClick={() => userClick('paper', Paper)} disabled={isItDisabled}><img src={BordPaperHand} alt="" /></button>
                    <button onClick={() => userClick('scissors', Scissors)} disabled={isItDisabled}><img src={BordScissorsHand} alt="" /></button>
                    <button onClick={() => userClick('lizard', Lizard)} disabled={isItDisabled}><img src={BordLizardHand} alt="" /></button>
                    <button onClick={() => userClick('spock', Spock)} disabled={isItDisabled}><img src={BordSpockHand} alt="" /></button>
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