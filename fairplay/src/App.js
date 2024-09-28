import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/HomePage';
import BlogPage from './components/BlogPage';
import Dashboard from './components/Dashboard';
import WalletPage from './components/WalletPage';
import UserProfile from './components/UserProfile';
import Loader from './components/Loader'; // Import the Loader component
import Login from './components/Login'; // Import Login component
import Signup from './components/SignUp'; // Import Signup component
import Footer from './components/footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/login" element={<Login />} /> {/* Add Login route */}
            <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;