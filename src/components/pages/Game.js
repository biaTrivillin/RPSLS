import GameWarning from "../layout/GameWarning"
import Header from '../layout/Header'
import Footer from "../layout/Footer"

function Game() {
    return (
        <div className="content">
            <Header/>
            <h1>Game</h1>
            <GameWarning title='WON' description='ipsum lorem dolor sit amat '/>
            <Footer/>
        </div>
    )
}

export default Game