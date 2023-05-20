import React from 'react'

const Card = ({ title, desc, link, image, date }) => {
    return (
        <div className="card">
            <div className="card-top">
                <img src={image} alt="" />
                <div className="card-body">
                    <div className="title">
                        {title}
                    </div>
                    <div className="description">
                        {desc}
                    </div>
                </div>
            </div>
            {
                link && (
                    <div className='btn-group'>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <span>View Project</span>
                            <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M19.5 5.125a.625.625 0 0 0-.625-.625h-7.5a.625.625 0 1 0 0 1.25h5.991L4.682 18.433a.626.626 0 1 0 .885.884L18.25 6.634v5.991a.624.624 0 1 0 1.25 0v-7.5Z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <div className="date">
                            <svg width="18" height="18" fill="#1c1c1c" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 2.625a.625.625 0 0 0-1.25 0v.625H4.5A2.5 2.5 0 0 0 2 5.75V7h20V5.75a2.5 2.5 0 0 0-2.5-2.5h-1.25v-.625a.625.625 0 1 0-1.25 0v.625H7v-.625ZM22 19.5V8.25H2V19.5A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5Zm-4.375-8.75h1.25a.624.624 0 0 1 .625.625v1.25a.624.624 0 0 1-.625.625h-1.25a.624.624 0 0 1-.625-.625v-1.25a.624.624 0 0 1 .625-.625Z"></path>
                            </svg>
                            <span>{date}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card
