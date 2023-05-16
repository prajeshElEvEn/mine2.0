import React from 'react'
import ProjectImage from '../assets/images/project.png'

const Card = ({ title, desc, link }) => {
    return (
        <div className="card">
            <img src={ProjectImage} alt="" />
            <div className="card-body">
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {desc}
                </div>
            </div>
            {
                link && <a href={link} target="_blank" rel="noopener noreferrer">
                    <span>View Project</span>
                    <svg width="14" height="14" fill="#1c1c1c" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M19.5 5.125a.625.625 0 0 0-.625-.625h-7.5a.625.625 0 1 0 0 1.25h5.991L4.682 18.433a.626.626 0 1 0 .885.884L18.25 6.634v5.991a.624.624 0 1 0 1.25 0v-7.5Z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            }
        </div>
    )
}

export default Card
