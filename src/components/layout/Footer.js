import '../../styles/Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {

    return (
        <footer>
            <h3>RPSLS</h3>
            <p>&copy; 2024 - All rights reserved</p>
            <ul>
                <li>Privacy Policy</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="footer_icons">
                <a href='https://www.linkedin.com/in/beatriz-trivillin/' target='_blank' rel="noopener noreferrer">< FaLinkedin /></a>
                <a href='https://github.com/biaTrivillin' target='_blank' rel="noopener noreferrer">< FaGithub /></a>
            </div>
        </footer>
    )

}

export default Footer