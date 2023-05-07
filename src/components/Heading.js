import React from 'react'

const Heading = ({
    text
}) => {
    return (
        <div className='heading-container'>
            <div className='heading'>
                {
                    text
                }
            </div>
        </div>
    )
}

export default Heading
