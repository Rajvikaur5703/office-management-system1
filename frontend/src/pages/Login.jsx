import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../assets/styles/login.css";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      navigate("/admin/dashboard");
    } 
    //employee login 
    else if(username === "employee" && password === "5678") 
    {
      navigate("/dashboard");
    }
    else {
      alert("Invalid username or password");
    }
  };

    return (
        <div className="login-container">
            <form  onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login