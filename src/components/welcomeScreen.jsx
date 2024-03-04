// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            // Handle successful login (e.g., store token in localStorage)
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={styles.login}>

            {error && <div>{error}</div>}
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.h2}>Login to the Operator Console</h2>

                <div className='mb-3'>
                    <label for="formGroupExampleInput" class="form-label">Username:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label for="formGroupExampleInput" class="form-label">Password:</label>
                    <input class="form-control" id="formGroupExampleInput" placeholder="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary btn-sm">Login</button>
            </form>
        </div>
    );
};

const styles = {
    login: {
        position: 'absolute',
        border: 'solid 0px red',
        background: 'white',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alightItems: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    h2: {
        height: '150px',
    }
}

export default Login;
