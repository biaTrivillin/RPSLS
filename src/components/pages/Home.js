import Button from "../layout/Button"
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../../styles/Home.css'
import SpockHand from '../../imgs/spock-hand.png'
import logo from '../../imgs/logo.png'
import arrows from '../../imgs/arrows.png'
import BordRockHand from '../../imgs/bord-rock-hand.png'
import BordPaperHand from '../../imgs/bord-paper-hand.png'
import BordScissorsHand from '../../imgs/bord-scissors-hand.png'
import BordLizardHand from '../../imgs/bord-lizard-hand.png'
import BordSpockHand from '../../imgs/bord-spock-hand.png'

function Home() {

    function activateLasers () {
        console.log('lala')
    }

    function playGame () {
        window.location.href = 'http://localhost:3000/game'
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

                <Button click={activateLasers} cta='KNOW MORE' id='know_more_btn'/>
            </section>

            <section className='know_more_content'>
                <div className="game_history_content">
                    <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum quam rhoncus fringilla consectetur. Aenean dapibus neque vel leo viverra, et consectetur turpis placerat. 
                    </article>
                    <img src={logo} alt=''/>
                </div>

                <div className="game_rules">
                    <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum quam rhoncus fringilla consectetur. Aenean dapibus neque vel leo viverra, et consectetur turpis placerat. 
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

                <Button click={playGame} cta='PLAY GAME' id='game_btn'/>
            </section>
            <Footer/>
        </div>
    )
}

export default Home