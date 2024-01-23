import Button from "../layout/Button"
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../../styles/Home.css'
import SpockHand from '../../imgs/spock-hand.png'

function Home() {
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

                <Button cta='KNOW MORE'/>
            </section>

            <section className='know_more_content'>
                <div className="game_history_content">
                    <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum quam rhoncus fringilla consectetur. Aenean dapibus neque vel leo viverra, et consectetur turpis placerat. 
                    </article>
                    <img src='' alt=''/>
                </div>

                <div className="game_rules">
                    <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum quam rhoncus fringilla consectetur. Aenean dapibus neque vel leo viverra, et consectetur turpis placerat. 
                    </article>
                    <img src='' alt=''/>
                </div>

                <Button cta='PLAY GAME'/>
            </section>
            <Footer/>
        </div>
    )
}

export default Home