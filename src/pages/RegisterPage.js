import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
    }
    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                addDoc(collection(db, "users"), {
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    timestamp: serverTimestamp()
                })
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                }))
                toast.success('Account created successfully!')
                nav('/works')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className="form-container">
            <form>
                <div className="form-field">
                    <input
                        type="text"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="btn-group">
                    <button
                        className="btn"
                        onClick={handleLogin}
                    >
                        <span>Login</span>
                    </button>
                    {/* <button
                        className="btn-reg"
                        onClick={handleRegister}
                    >
                        <span>Register</span>
                    </button> */}
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
