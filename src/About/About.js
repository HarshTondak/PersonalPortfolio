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
  const timeline_about = gsap.timeline();
  useEffect(() => {
    timeline_about.from(
      [text1, text2],
      {
        duration: 0.8,
        y: 500,
        skewY: 10,
        stagger: {
          amount: 0.4,
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
      duration: 0.5,
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
              <div className="container-inner-text1">
                <p ref={(el) => (text1 = el)}>Tondak</p>
              </div>
              <div className="container-inner-text2">
                <p ref={(el) => (text2 = el)}>Harsh</p>
              </div>
            </div>
            <di
              ref={(el) => (p1 = el)}
              v
              className="container-quote container-quote1"
            >
              I create sites and <br /> applications that cause <br /> pleasant
              emotions.
            </di>
            <div className="container-quote container-quote2">
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
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full-Stack
                </p>
              </div>
              <div className="about-text-lower">
                <p>&nbsp;Web&nbsp;Developer</p>
              </div>
              <div className="about-text-lower">
                <p>&nbsp;& a Learner</p>
              </div>
            </div>

            <div className="about-container2-p">
              <p>
                My name is{" "}
                <i>
                  <strong>Harsh Tondak</strong>
                </i>
                <br />
                And I am from Delhi, India <br /> I am 23 years old
              </p>

              <p className="about-container2-p-right">
                I am a final year student pursuing Masters of Computer
                Applications at MNNIT-Allahabad.
                <br /> I have completed my Bachelor of Science in Mathematics
                Honours at University of Delhi from Deen Dayal Upadhyaya
                College.
              </p>
              <p>
                I have good Logical reasoning, and critical thinking abilities.{" "}
                <br /> I have experiences of organizing events.
              </p>
              <p>
                I am very interested in WEB Designing and it's amazing
                applications in our day-to-day lives.
                <br /> I also love photo editing and currently learning to make
                2-D animations.
              </p>
            </div>

            {/* <div className="about-container2-heading2">
              <div className="about-text-lower-1">
                <p>What is my feature?</p>
              </div>
            </div>
            <div className="about-container2-p">
              <p className="about-container2-p-right">
                Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.{" "}
                <br /> Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.{" "}
                <br /> Lorem ipsum dolor sit amet.
              </p>
            </div> */}

            <div className="about-container-flower">
              <img src={flower} alt="" />
            </div>
          </div>
          <div className="about-footer">
            <GetInTouch />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
