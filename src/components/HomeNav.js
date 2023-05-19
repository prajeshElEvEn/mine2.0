import React from 'react'
import { Link } from 'react-router-dom'
import DownloadSvg from '../assets/svgs/download.svg'
import Logo from '../assets/images/logo1080.png'

const HomeNav = () => {
    return (
        <div className='nav-container'>
            <div className='nav'>
                <Link to={'/register'} className='nav-item-column'>
                    <span>Open for any</span>
                    <span>collaboration and work</span>
                </Link>
                <Link to={'/'} className='nav-item'>
                    <img src={Logo} alt='' />
                    <span>
                        eleven Co.
                    </span>
                </Link>
                <a
                    href='https://drive.google.com/file/d/1-AozeKH2jgWkch4hVoPVYbpbHkO055ly/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'
                    className='nav-item-btn'
                >
                    <img src={DownloadSvg} alt='' />
                    <span>
                        Download Resume
                    </span>
                </a>
            </div>
        </div>
    )
}

export default HomeNav
