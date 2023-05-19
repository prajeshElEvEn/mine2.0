import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddProject = () => {
    const nav = useNavigate()
    const handleAdd = (e) => {
        e.preventDefault()
    }
    const handleBack = (e) => {
        e.preventDefault()
        nav('/works')
    }
    return (
        <div className="form-container">
            <form>
                <div className="form-field">
                    <input
                        type="text"
                        placeholder="Project Title"
                    />
                </div>
                <div className="form-field">
                    <textarea
                        type="text"
                        placeholder="Project Description"
                        rows={6}
                    />
                </div>
                <div className="form-field">
                    <input type="file" />
                </div>
                <div className="btn-group">
                    <button
                        className="btn"
                        onClick={handleAdd}
                    >
                        <span>Add</span>
                    </button>
                    <button
                        className="btn"
                        onClick={handleBack}
                    >
                        <span>Back</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProject
