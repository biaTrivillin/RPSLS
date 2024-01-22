import {Link} from 'react-router-dom'
import '../../styles/Header.css'

function Header() {

    return (
        <header>
            <div>
                <Link to='/'><img src='#' alt=''/></Link>
                <h1><Link to='/'>RPSLS</Link></h1>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/game'>Game</Link></li>
                    <li><a href='https://www.linkedin.com/in/beatriz-trivillin/' target='_blank' rel="noopener noreferrer">Contact</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header


