import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Updated Navbar to handle Login/Logout
import Homepage from './components/HomePage';
import BlogPage from './components/BlogPage';
import Dashboard from './components/Dashboard';
import WalletPage from './components/WalletPage';
import UserProfile from './components/UserProfile';
import Loader from './components/Loader';
import Login from './components/Login';
import Signup from './components/SignUp';
import Footer from './components/footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track login

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 120);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  // Function to handle user login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass handleLogin to Login */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
