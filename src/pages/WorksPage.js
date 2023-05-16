import React from 'react'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Menu from '../components/Menu'

const WorksPage = () => {
    return (
        <>
            <Heading
                text={'My Works'}
            />
            <div className="container-box">
                <div className="container">
                    <div className="card-container">
                        <div className="card-box">
                            <div className="heading">
                                2023
                            </div>
                            <div className="cards">
                                <Card
                                    title={'Project Title'}
                                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'}
                                    link={'/'}
                                />
                                <Card
                                    title={'Project Title'}
                                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'}
                                    link={'/'}
                                />
                                <Card
                                    title={'Project Title'}
                                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'}
                                    link={'/'}
                                />
                                <Card
                                    title={'Project Title'}
                                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'}
                                    link={'/'}
                                />
                                <Card
                                    title={'Project Title'}
                                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'}
                                    link={'/'}
                                />
                                <Card
                                    title={'Project Title'}
                                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'}
                                    link={'/'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </>
    )
}

export default WorksPage
