import React from 'react'

const RegisterPage = () => {
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
                    />
                </div>
                <div className="form-field">
                    <input
                        type="password"
                        placeholder="Password"
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
