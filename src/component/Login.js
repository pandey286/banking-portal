import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        // Send a request to the server to check the login credentials
    }

    return (
        <div class='login-container d-flex justify-content-center m-5 p-3 col '>
            <div class='row border border-dark border-3 rounded-3 p-3'>
                <h2 class='text-center p-3 '> Please Login Here </h2>
                <form onSubmit={handleSubmit}>
                    <div class="p-3 col align-self-center">
                        <input type="number" class="form-control border border-dark border-2 " id="userId" aria-describedby="UserId"
                            value={username} onChange={event => setUsername(event.target.value)} placeholder="User Id" />
                    </div>
                    <div class="p-3 col align-self-center">
                        <input type="password" class="form-control border border-dark border-2" id="InputPassword1"
                            value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" />
                    </div>
                    <div class="text-center p-3">
                    <button type="submit" class="btn btn-primary border border-dark border-1 rounded-pill">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
