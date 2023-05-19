import React from 'react'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Menu from '../components/Menu'
import { useNavigate } from 'react-router-dom'

const WorksPage = ({ user }) => {
    const nav = useNavigate()
    return (
        <>
            <Heading
                text={'My Works'}
            />
            <div className="container-box">
                {
                    user && (
                        <div
                            className="btn"
                            onClick={() => nav('/add')}
                        >
                            <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-9.375-4.375a.625.625 0 1 0-1.25 0v3.75h-3.75a.625.625 0 1 0 0 1.25h3.75v3.75a.624.624 0 1 0 1.25 0v-3.75h3.75a.624.624 0 1 0 0-1.25h-3.75v-3.75Z"></path>
                            </svg>
                            <span>
                                New Project
                            </span>
                        </div>
                    )
                }
                <div className="container">
                    <div className="card-container">
                        <div className="card-box">
                            <div className="heading">
                                2023
                            </div>
                            <div className="cards">
                                <Card
                                    image={""}
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
