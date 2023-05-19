import React, { useState } from 'react'

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
    }
    const handleRegister = (e) => {
        e.preventDefault()
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
                        Login
                    </button>
                    <button
                        className="btn-reg"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
