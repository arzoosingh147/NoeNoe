import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import loginImage from "../assets/login.png"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !username) {
      setError("Please fill out all fields.");
      return;
    }

    const userData = {
      email,
      username,
      badges: ["Green Starter"],
      progress: 25,
    };

    login(userData);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#E1FEA4]">
      {/* Login Form on the Left */}
      <div className="w-full max-w-md p-8 bg-[#E1FEA4] ">
        <h2 className="text-6xl font-bold text-center mb-6">Login(Maybe)</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FAFAC6] text-black border-2 border-black py-2 rounded hover:bg-[#FAFAC6]"
          >
            Login
          </button>
        </form>
      </div>

      {/* Image on the Right */}
      <div className="hidden md:block w-full max-w-md p-8">
        <img
          src={loginImage}
          alt="Login Visual"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
