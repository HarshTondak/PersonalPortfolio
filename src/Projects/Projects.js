import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./Projects.css";
import arrow from "../Assets/arrow.svg";
import Footer from "../Footer/Footer";
import gsap from "gsap";

function Projects() {
  const timeline_project = gsap.timeline();
  let text1 = useRef(null);
  let itemsProject = useRef(null);
  useEffect(() => {
    timeline_project.from(
      text1,
      {
        duration: 1,
        skewY: 10,
        y: 500,
        delay: 1,
        stagger: {
          amount: 0.4,
        },
        opacity: 0,
      },
      "-=1.5"
    );
    timeline_project.from(itemsProject, {
      duration: 0.5,
      opacity: 0,
      y: 100,
    });
  });

  return (
    <div className="project">
      <Header timeline={timeline_project} />
      <div className="project-page">
        <div className="my-projects">
          <h1 ref={(el) => (text1 = el)}>
            MY <br />
            PROJECTS
          </h1>
        </div>

        <div className="project-page-container">
          <div className="project-page-items" ref={(el) => (itemsProject = el)}>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>06/23</p>
              </div>
              <a href="https://snap-book.netlify.app/" target="_blank">
                <div className="project-page-item-header">
                  <h1>SnapBook</h1>
                  <p>Social Media Website</p>
                </div>
                <div className="project-page-item-image project-page-item-image1"></div>
                <div className="project-page-item-footer">
                  <p>This is a fully responsive social media website.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>07/23</p>
              </div>
              <a href="https://votewise.free.nf/" target="_blank">
                <div className="project-page-item-header">
                  <h1>VoteWise</h1>
                  <p>Online Voting System</p>
                </div>
                <div className="project-page-item-image project-page-item-image7"></div>
                <div className="project-page-item-footer">
                  <p>This is an online election voting website.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>08/23</p>
              </div>
              <a href="https://lifelines.lovestoblog.com/" target="_blank">
                <div className="project-page-item-header">
                  <h1>WiseLines</h1>
                  <p>Blogging Website</p>
                </div>
                <div className="project-page-item-image project-page-item-image8"></div>
                <div className="project-page-item-footer">
                  <p>This is a fully responsive blogging website.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>05/23</p>
              </div>
              <a href="https://socioheads.com/" target="_blank">
                <div className="project-page-item-header">
                  <h1>SocioHeads</h1>
                  <p>PR Agency Website</p>
                </div>
                <div className="project-page-item-image project-page-item-image2"></div>
                <div className="project-page-item-footer">
                  <p>This is a marketing website social media agency.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>08/23</p>
              </div>
              <a href="https://snake-feast.netlify.app/" target="_blank">
                <div className="project-page-item-header">
                  <h1>Snake-Feast</h1>
                  <p>A Snake Game</p>
                </div>
                <div className="project-page-item-image project-page-item-image9"></div>
                <div className="project-page-item-footer">
                  <p>This is a full responsive OG snake game.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>04/23</p>
              </div>
              <a href="https://dice-roling-game.netlify.app/" target="_blank">
                <div className="project-page-item-header">
                  <h1>Dicy</h1>
                  <p>A Dice Game</p>
                </div>
                <div className="project-page-item-image project-page-item-image3"></div>
                <div className="project-page-item-footer">
                  <p>This is a Dice Game website for two players.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>04/23</p>
              </div>
              <a href="https://numbers-guessing.netlify.app/" target="_blank">
                <div className="project-page-item-header">
                  <h1>GuessIt</h1>
                  <p>A Number Guessing Game</p>
                </div>
                <div className="project-page-item-image project-page-item-image4"></div>
                <div className="project-page-item-footer">
                  <p>This is a Number Guessing Game website.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>01/23</p>
              </div>
              <a
                href="https://banking-website-page.netlify.app/"
                target="_blank"
              >
                <div className="project-page-item-header">
                  <h1>Bankist</h1>
                  <p>Bank Website</p>
                </div>
                <div className="project-page-item-image project-page-item-image5"></div>
                <div className="project-page-item-footer">
                  <p>This website is for the Banking Organizations.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>01/23</p>
              </div>
              <a
                href="https://banking-transaction-app.netlify.app/"
                target="_blank"
              >
                <div className="project-page-item-header">
                  <h1>Transactions</h1>
                  <p>Bank Transactions</p>
                </div>
                <div className="project-page-item-image project-page-item-image6"></div>
                <div className="project-page-item-footer">
                  <p>This website shows how Bank transactions works.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
