import React from 'react'
import Heading from '../components/Heading'
import MeImage from '../assets/images/me.png'
import SoftwareImage from '../assets/images/soft.png'
import HardwareImage from '../assets/images/hard.png'
import Menu from '../components/Menu'

const AboutPage = () => {
    return (
        <>
            <Heading
                text={'Get to know me Better!'}
            />
            <div className="about">
                <div className="about-container">
                    <div className="row">
                        <img src={MeImage} alt="" />
                        <div className="text">
                            <h1>
                                Started to learn <i>Web Development</i> back in <span>2021</span> - have been <span>loving</span> it ever since!
                            </h1>
                            <h1>
                                Now, I create <i>websites</i>, <i>android apps</i>, <i>UI/UX</i> designs.
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text">
                            <h1>
                                I've also explored <i>Machine Learning</i> and <i>Deep Learning</i> a bit.
                            </h1>
                            <h1>
                                Have worked with <span>Natural Language Processing</span> and <span>Computer Vision</span>.
                            </h1>
                        </div>
                        <img src={SoftwareImage} alt="" />
                    </div>
                    <div className="row">
                        <img src={HardwareImage} alt="" />
                        <div className="text">
                            <h1>
                                Been in the <span>hardware</span> game aswell. Designed few <i>PCBs</i> and <i>CAD</i> designs.
                            </h1>
                            <h1>
                                Have worked with <span>Arduino</span>, <span>Raspberry Pi</span>, <span>Arducopter</span> and several <i>sensors</i>.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </>
    )
}

export default AboutPage
