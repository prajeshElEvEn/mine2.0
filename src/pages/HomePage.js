import React from 'react'
import Heading from '../components/Heading'
import Navbar from '../components/Navbar'
import Dev from '../assets/images/developer.png'

const HomePage = () => {
    return (
        <div className='main-container'>
            <Heading
                text={'Prajesh Pratap Singh'}
            />
            <Navbar />
            <div className='container-box'>
                <div className='container'>
                    <div className='item'>
                        {/* <img src={StarsSvg} alt='' /> */}
                        <span>
                            Prajesh Pratap Singh is a
                        </span>
                        <span>
                            self-taught full stack developer from India.
                        </span>
                        <span>
                            I code, design and build.
                        </span>
                    </div>
                    <div className='item'>
                        <img src={Dev} alt='' />
                    </div>
                    <div className='item'>
                        {/* <img src={StarsSvg} alt='' /> */}
                        <span>
                            Passionate about building solutions
                        </span>
                        <span>
                            for real world problems.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
