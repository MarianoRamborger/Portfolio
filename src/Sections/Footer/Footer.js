import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = (props) => {

    return(
        <div className="footer flex-row">

        <div className="icons-div">

        <a href="mailto:marianoramborger@gmail.com" className="footer-icon" target="blank"> <MailIcon />   </a>
        <a href="https://github.com/MarianoRamborger" className="footer-icon" target="blank"> <GitHubIcon />   </a>
        <a href="https://www.linkedin.com/in/mariano-ramborger-342364190/" className="footer-icon" target="blank"> <LinkedInIcon />   </a>
        <a href="https://www.facebook.com/mariano.ram.357" className="footer-icon" target="blank"> <FacebookIcon />   </a>


        </div>

    <div className="stars"></div>
    <div className="twinkling"></div>

        </div>
    )
}

export default Footer