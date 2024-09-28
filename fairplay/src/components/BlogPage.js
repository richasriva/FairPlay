import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      {/* Header */}

      <div className="content-container">
        {/* Main Blog Section */}
        <div className="main-section">
          <h2>Upcoming Study Contests</h2>

          <div className="blog-post">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Blog Post"
              className="blog-image"
            />
            <div className="blog-details">
              <h3>National Mathematics Championship 2024</h3>
              <p>
                Join students from all over the country to compete in the
                National Mathematics Championship! Test your knowledge in
                algebra, geometry, and calculus, and stand a chance to win
                exciting prizes. The top three winners will receive scholarships
                and educational resources worth up to $10,000.
              </p>
              <div className="blog-tags">
                <span>Mathematics</span>
                <span>Education</span>
                <span>Prizes</span>
              </div>
            </div>
          </div>

          <div className="blog-post">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Blog Post"
              className="blog-image"
            />
            <div className="blog-details">
              <h3>Science Quiz Competition: Test Your Knowledge</h3>
              <p>
                Take part in the Science Quiz Competition and showcase your
                understanding of biology, physics, and chemistry. The winners
                will be awarded exciting gadgets, including tablets and
                scientific calculators, along with certifications for academic
                excellence.
              </p>
              <div className="blog-tags">
                <span>Science</span>
                <span>Education</span>
                <span>Prizes</span>
              </div>
            </div>
          </div>

          <div className="blog-post">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Blog Post"
              className="blog-image"
            />
            <div className="blog-details">
              <h3>Essay Writing Contest: Share Your Thoughts</h3>
              <p>
                Participate in our Essay Writing Contest and express your ideas
                on the given topics. The top three essays will be published in
                national journals, and the authors will receive certificates
                and prize money worth up to $2,000.
              </p>
              <div className="blog-tags">
                <span>Writing</span>
                <span>Literature</span>
                <span>Prizes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="subscribe-section">
            <h3>Stay Updated with Study Contests</h3>
            <p>
              Subscribe to receive updates about upcoming contests, tips for
              preparation, and special offers for participants.
            </p>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="recent-posts">
            <h3>Recent Contests</h3>
            <div className="small-blog-post">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                alt="Small Blog Post"
                className="small-blog-image"
              />
              <p>National Coding Championship 2024</p>
            </div>

            <div className="small-blog-post">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                alt="Small Blog Post"
                className="small-blog-image"
              />
              <p>Debate Competition: The Art of Argumentation</p>
            </div>
            
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
