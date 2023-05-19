import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, ref as refStorage, uploadBytes } from 'firebase/storage'
import { db, storage } from '../firebase/config'
import { v4 } from 'uuid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'

const AddProject = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [date, setDate] = useState('')
    const [projectUrl, setProjectUrl] = useState('')

    const nav = useNavigate()
    const handleAdd = async (e) => {
        e.preventDefault()
        const imageRef = refStorage(storage, `project_images/${image.name + v4()}`)
        await uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => (
                        addDoc(collection(db, "projects"), {
                            title: title,
                            description: description,
                            date: date,
                            image: url,
                            projectUrl: projectUrl,
                            timestamp: serverTimestamp()
                        })
                    ))
                setImage(null)
                setTitle('')
                setDescription('')
                setDate('')
                setImage(null)
                setProjectUrl('')
                toast.success('Project added successfully!')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleBack = (e) => {
        e.preventDefault()
        nav('/mine2.0/works')
    }

    return (
        <div className="form-container">
            <form>
                <div className="form-field">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div className="form-field">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <textarea
                        type="text"
                        placeholder="Project Description"
                        rows={6}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <input
                        type="url"
                        placeholder="Project URL"
                        value={projectUrl}
                        onChange={(e) => setProjectUrl(e.target.value)}
                    />
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
