import { useState } from 'react';
import Axios from 'axios';
import './register.css'


function Register() {
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const RegisterUser = () => {
        Axios.post('http://127.0.0.1:8080/register', {
            email: email,
            password: pass,
            role: role
        })
        .then(response => {
            console.log("Success:", response.data);
            setSuccess("Registration successful!");
            setError(""); // Clear any previous error
        })
        .catch(error => {
            console.error("Error:", error.response ? error.response.data : error.message);
            setError("Registration failed. Please try again.");
            setSuccess(""); // Clear any previous success message
        });
    };

    return (
        <div className="fle">
            <div className="info">
            <h1>You Are Welcome!</h1>
                <label className='txt'>Email </label>
                <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label className='txt'>Password</label>
                <input
                    type="password"
                    value={pass}
                    onChange={(event) => setPass(event.target.value)}
                />
                <label className='txt'>Role</label>
                <input
                    type="text"
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                />
                <button className='btnregister' onClick={RegisterUser}>Register</button>
                {success && <div className="success">{success}</div>}
                {error && <div className="error">{error}</div>}
                <div className='d-flex gap-2'>
                    <p>Login Now !</p>
                    <a href="/">Login</a>
                    </div>
            </div>
            <div className='box'>

        </div>
        </div>
    );
}

export default Register;
