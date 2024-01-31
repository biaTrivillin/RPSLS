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
import RockHand from '../../imgs/rock-hand.png'
import '../../styles/Game.css'

function Game() {

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
                            <img src={RockHand} alt=""/>
                        </div>
                        <div>
                            <img src={RockHand} alt=""/>
                        </div>
                    </div>
                </section>

                <section className="selector_container">
                    <img src={BordRockHand} alt=""/>
                    <img src={BordPaperHand} alt=""/>
                    <img src={BordScissorsHand} alt=""/>
                    <img src={BordLizardHand} alt=""/>
                    <img src={BordSpockHand} alt=""/>
                </section>

                <section className="warning_container">
                    <GameWarning title='WON' elementOne='lagarto' action='come' elementTwo='papel'/>
                    <Button click={playAgain} cta='PLAY AGAIN' id='play_again_btn'/>
                </section>
            </div>   
            <Footer/>
        </div>
    )
}

export default Game