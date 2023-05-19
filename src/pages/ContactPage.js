import React from 'react'
import Heading from '../components/Heading'
import EmailSvg from '../assets/svgs/email.svg'
import LinkedinSvg from '../assets/svgs/linkedin.svg'
import GithubSvg from '../assets/svgs/github.svg'
import TwitterSvg from '../assets/svgs/twitter.svg'
import InstagramSvg from '../assets/svgs/instagram.svg'
import DiscordSvg from '../assets/svgs/discord.svg'
import ContactImage from '../assets/images/contact.png'

const ContactPage = () => {
    return (
        <>
            <Heading
                text={"Let's Connect and make something Awesome together!"}
            />
            <div className="container-box">
                <div className="container">
                    <div className="left">
                        <div className="col">
                            <a href="mailto:prajesh.eleven118@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={EmailSvg} alt="" />
                                <span>prajesh.eleven118@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/prajesh-eleven/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedinSvg} alt="" />
                                <span>/prajesh-eleven</span>
                            </a>
                            <a href="https://github.com/prajeshElEvEn" target="_blank" rel="noopener noreferrer">
                                <img src={GithubSvg} alt="" />
                                <span>/prajeshElEvEn</span>
                            </a>
                        </div>
                        <div className="col">
                            <a href="https://twitter.com/prajeshElEvEn" target="_blank" rel="noopener noreferrer">
                                <img src={TwitterSvg} alt="" />
                                <span>/prajeshElEvEn</span>
                            </a>
                            <a href="https://www.instagram.com/prajesheleven/" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramSvg} alt="" />
                                <span>/prajesheleven</span>
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <img src={DiscordSvg} alt="" />
                                <span>/prajeshElEvEn#0000</span>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={ContactImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
