import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Books are packed with knowledge, they give you life lessons, and
              they teach you about hardships, love, fear, and every little thing
              that is a part of life. Books have been here for centuries and
              contain the knowledge of our past, civilizations, and cultures.
            </p>
            <p className="fs-17">
              What is the importance of books in our life? Books play a
              quintessential role in every student’s life by introducing them to
              a world of imagination, providing knowledge of the outside world,
              improving their reading, writing and speaking skills as well as
              boosting memory and intelligence. The importance of books in our
              life cannot be undermined for they not only help in broadening our
              horizons but also act as doorways to connecting us with the world
              around us. They function as survival kits, they influence us and
              leave an impact on us. Want to know the benefits of books and the
              importance of reading? Curious about how books impact our lives?
              Read this blog to know all about the importance of books and the
              importance of book reading in a student’s life, essays on the
              importance of reading books, quotes and more!
            </p>
            <h2>THIS BLOG INCLUDES:</h2>
            <p className="fs-17">
              1.Importance of Books in Our Life 
                <li>Books are Your Best Friend </li>
                <li>Books Illuminate Your Imagination </li>
                <li>Books Give Perspective to the World Around You </li>
                <li>Books Build Confidence</li>
                <li>Books Help You Grow Mentally and Emotionally </li>
              <ol>2. Life Lessons to Learn from Books </ol>
              <ol>3. Essay on the Importance of Books in Our Life </ol>
              <ol>4. Essay on the Importance of Reading</ol>
              <ol>5. Importance of Books Quotes </ol>
              <ol>6. FAQs</ol>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
