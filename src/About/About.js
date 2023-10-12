import React, { useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Header from "../Header/Header";
import "./About.css";
import gsap from "gsap";
import flower from "../Assets/flower.svg";
function About() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let image = useRef(null);
  let p1 = useRef(null);
  let p2 = useRef(null);
  const timeline_about = gsap.timeline();
  useEffect(() => {
    timeline_about.from(
      [text1, text2],
      {
        duration: 1,
        y: 700,
        skewY: 10,
        stagger: {
          amount: 0.5,
        },
      },
      "-=.5"
    );
    timeline_about.from(
      image,
      {
        duration: 1.5,
        y: 300,
        delay: 0.2,
        opacity: 0,
      },
      "-=.5"
    );
    timeline_about.from(p1, {
      duration: 0.8,
      x: -200,
      skewX: 10,
      opacity: 0,
    });
    timeline_about.from(p2, {
      duration: 0.8,
      x: 200,
      skewX: 10,
      opacity: 0,
    });
  });
  return (
    <>
      <div>
        <div className="about">
          <Header timeline={timeline_about} />
          <div className="about-container">
            <div className="container-text">
              <div className="container-inner-text1" id="harsh">
                <p ref={(el) => (text1 = el)}>HARSH</p>
              </div>
              <div className="container-inner-text2" id="tondak">
                <p ref={(el) => (text2 = el)}>TONDAK</p>
              </div>
            </div>
            <div
              ref={(el) => (p1 = el)}
              className="container-quote container-quote1"
            >
              I create sites and <br /> applications that cause <br /> pleasant
              emotions.
            </div>
            <div
              ref={(el) => (p2 = el)}
              className="container-quote container-quote2"
            >
              I specialize in creating <br /> creative and interactive websites{" "}
              <br /> and applications.
            </div>

            <div className="container-image" ref={(el) => (image = el)}></div>
          </div>

          <div className="about-container2">
            <div className="about-container2-heading">
              <div className="about-text-lower">
                <p>Web Designer,</p>
              </div>
              <div className="about-text-lower">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full-Stack</p>
              </div>
              <div className="about-text-lower">
                <p>Web&nbsp;Developer</p>
              </div>
              <div className="about-text-lower">
                <p>&nbsp;& a Learner</p>
              </div>
            </div>

            <div className="about-container2-p">
              <p>I am a 23 years old Developer from New Delhi, India.</p>

              <p className="about-container2-p-right">
                I am a final year student of Masters of Computer Applications
                <br />
                at MNNIT-Allahabad.
                <br />I have completed my Bachelor of Science in Mathematics
                Honours
                <br />
                at University of Delhi from Deen Dayal Upadhyaya College.
              </p>

              <p>
                I have good Logical reasoning, and critical thinking abilities.{" "}
                <br /> I have experiences of organizing events.
              </p>

              <p className="about-container2-p-right">
                I am very interested in WEB Designing and
                <br />
                it's amazing applications in our day-to-day lives.
                <br /> I also love photo editing and designing animations.
                <br /> My areas of interest are: Machine Learning & Web Dev.
              </p>
            </div>

            <div className="about-container-flower">
              <img src={flower} alt="" />
            </div>
          </div>
          <div className="about-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
