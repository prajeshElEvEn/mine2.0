import React from 'react'
import { Link } from 'react-router-dom'

const HomeNav = () => {
    return (
        <div className='nav-container'>
            <div className='nav'>
                <div to={'/'} className='nav-item-column'>
                    <span>Open for any</span>
                    <span>collaboration and work</span>
                </div>
                <Link to={'/'} className='nav-item'>
                    {/* <img src={} alt=''/> */}
                    <span>
                        eleven Co.
                    </span>
                </Link>
                <Link to={'/'} className='nav-item-btn'>
                    <span>
                        Download Resume
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default HomeNav
