import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/login", {username, password});
      
      console.log(response.data);
      
      // console.log(response.data.message == "Login successful");
      

      // const data = await response.json();
      if (response.data.message == "Login successful") {
        
        const user = response.data.user; // Assuming the server response contains the user object with role
        
       
        localStorage.setItem('role', user.role); //add user role to the localstorage
        

        if (user.role === "farmer") {
          localStorage.setItem('farmer_id', user.farmer_id); //TODO: remove this from local storage when we logout
          navigate("/farmerprofile");
        } else if (user.role === "buyer") {
          localStorage.setItem('buyer_id', user.buyer_id); //TODO: remove this from local storage when we logout
          navigate("/buyerprofilebuyerpov");
        } else {
          setError("Unexpected role. Please contact support.");
        }
      } else {
        setError(data.message || "An error occurred during login.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
