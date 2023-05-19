import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Menu from '../components/Menu'
import { useNavigate } from 'react-router-dom'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/config'

const WorksPage = ({ user }) => {

    const [projects, setProjects] = useState()

    const nav = useNavigate()

    useEffect(() => {
        const projectRef = collection(db, "projects")
        const projectQuery = query(projectRef, orderBy("date", "desc"))
        onSnapshot(projectQuery, (snapshot) => {
            setProjects(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

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
                            onClick={() => nav('/mine2.0/add')}
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
                            {/* <div className="heading">
                                2023
                            </div> */}
                            <div className="cards">
                                {
                                    projects && projects.map((project) => (
                                        <Card
                                            key={project.id}
                                            image={project.data.image}
                                            title={project.data.title}
                                            desc={project.data.description}
                                            link={project.data.projectUrl}
                                            date={project.data.date}
                                        />
                                    ))
                                }
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
