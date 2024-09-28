import React, { useEffect, useState } from 'react';
import './HomePage.css';
import bannerIm from '../images/banner.jpg';

// Countdown Timer Component
const CountdownTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown">
      <div className="time-section">
        <span>{timeLeft.days || "0"}</span>
        <span>Days</span>
      </div>
      <div className="time-section">
        <span>{timeLeft.hours || "0"}</span>
        <span>Hrs</span>
      </div>
      <div className="time-section">
        <span>{timeLeft.minutes || "0"}</span>
        <span>Min</span>
      </div>
      <div className="time-section">
        <span>{timeLeft.seconds || "0"}</span>
        <span>Sec</span>
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  const [text, setText] = useState('');
  const fullText = 'Wiin Exciting Prizes! Join now and showcase your skills.';

  const contestEndDate = "2024-10-03T00:00:00"; // Set your contest end date here

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index += 1;
      if (index >= fullText.length) clearInterval(interval);
    }, 100); // Adjust typing speed here
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="homepage">
      
      <div className="banner">
        <div className="banner-image">
          {/* You can add an image here or any other visual elements */}
          <img src={bannerIm} alt="Contest Banner" />
        </div>
      </div>
      <div className="homepage-header">
        <h1>Happy Contesting...</h1>
        <p className="typing-text">{text}</p>
      </div>
      <div className="trophy-container">🏆</div>
      <div className="contests">
        <h2>ONGOING CONTESTS</h2>

        

        <div className="contest-cards">
          <div className="contest-card">
            <h3>CONTEST 1</h3>
            <p>Join the exciting Contest 1!</p>
            <p>Step up and showcase your skills in a variety of exciting challenges. Compete with talented individuals from around the globe.</p>
            <button className="contest-button">Participate</button>
          </div>
          <div className="contest-card">
            <h3>CONTEST 2</h3>
            <p>Don't miss out on Contest 2!</p>
            <p>Step up and showcase your skills in a variety of exciting challenges. Compete with talented individuals from around the globe.</p>
            <button className="contest-button">Participate</button>
          </div>
          <div className="contest-card">
            <h3>CONTEST 3</h3>
            <p>Don't miss out on Contest 3!</p>
            <p>Step up and showcase your skills in a variety of exciting challenges. Compete with talented individuals from around the globe.</p>
            <button className="contest-button">Participate</button>
          </div>
        </div>
        <h2>UPCOMING CONTESTS</h2>
        {/* Countdown Timer for Contest */}
        <div><CountdownTimer endDate={contestEndDate} /></div>
        <div className="card">
          <div className="card-image">
            <img src={bannerIm} alt="Card" />
          </div>
          <div className="card-content">
            <h2>LIVE CONTEST</h2>
          <p>
            Participate in this contest and win more.
          </p>
          <button className="card-button">Participate</button>
        </div>
    </div>
      </div>
    </div>
    
  );
};

export default HomePage;
