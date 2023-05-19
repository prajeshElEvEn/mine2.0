import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav'>
                <Link to='/mine2.0/works' className='nav-item-v'>
                    <span className='sub-text'>01</span>
                    <span className='text'>Works</span>
                </Link>
                <Link to='/mine2.0/about' className='nav-item-v'>
                    <span className='sub-text'>02</span>
                    <span className='text'>About</span>
                </Link>
                <Link to='/mine2.0/contact' className='nav-item-v'>
                    <span className='sub-text'>03</span>
                    <span className='text'>Contact</span>
                </Link>
                <div className='nav-item-text'>
                    &copy; {new Date().getFullYear()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
