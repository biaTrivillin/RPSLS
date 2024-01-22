import Button from "../layout/Button"
import Header from '../layout/Header'
import Footer from '../layout/Footer'

function Home() {
    return (
        <div className="content">
            <Header/>
            <section>
                <div>
                    <h1>ROCK</h1>
                    <h1>PAPER</h1>
                    <h1>SCISSORS</h1>
                    <h1>LIZARD</h1>
                    <h1>SPOCK</h1>
                    <img src='' alt=''/>
                </div>

                <Button cta='KNOW MORE'/>
            </section>

            <section className='know_more'>
                <div>
                    <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum quam rhoncus fringilla consectetur. Aenean dapibus neque vel leo viverra, et consectetur turpis placerat. 
                    </article>
                    <img src='' alt=''/>
                </div>

                <div>
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