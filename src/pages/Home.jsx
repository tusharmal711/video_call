import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(""); // State for validation message
    const navigate = useNavigate();

    const handleJoinroom = useCallback(() => {
        if (!value.trim()) {
            alert("Please enter a room code!"); // Show error if input is empty
            return;
        }
        setError(""); // Clear error message
        navigate(`/room/${value}`);
    }, [navigate, value]);

    return (
        <div className="container">
            <input 
                type="text" 
                name="id" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Enter your room code" 
                required 
            />
            {error && <p className="error-message">{error}</p>} {/* Show error message */}
            <button onClick={handleJoinroom} id="btn">Join</button>
        </div>
    );
};

export default Home;
