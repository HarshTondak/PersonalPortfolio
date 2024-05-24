import React, { useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import gsap from "gsap";
import ParticlesContainer from "./particleContainer.jsx";

function App() {
  const cursorRef = useRef(null);
  const posXRef = useRef(0);
  const posYRef = useRef(0);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);
  const barRef = useRef(null);
  const barcRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let posX = posXRef.current;
    let posY = posYRef.current;
    let mouseX = mouseXRef.current;
    let mouseY = mouseYRef.current;

    const tl = gsap.timeline();
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });

    document.addEventListener("mousemove", (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    const tl2 = gsap.timeline();
    tl2.from(
      cursor,
      {
        duration: 1.5,
        delay: 2,
        opacity: 0,
      },
      "-=1"
    );

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  useEffect(() => {
    const load = gsap.timeline({ paused: true });
    const loader = loaderRef.current;
    const progress = progressRef.current;
    const percent = percentRef.current;
    const bar = barRef.current;

    load.to([percent, bar], {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });
    load.to(progress, {
      duration: 0.8,
      width: "0%",
    });
    load.to(loader, {
      visibility: "hidden",
      zIndex: -1,
    });

    let id;
    let width = 1;

    function loading() {
      id = setInterval(frame, 20);
    }

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        load.play();
      } else {
        width++;
        barcRef.current.style.width = width + "%";
        percentRef.current.innerHTML = width + "%";
      }
    }

    window.addEventListener("load", loading);

    return () => {
      clearInterval(id);
      window.removeEventListener("load", loading);
    };
  }, []);

  return (
    <div>
      <Router>
        <ParticlesContainer />
        <div className="App">
          <div className="loader" ref={loaderRef}>
            <div className="progress" ref={progressRef}>
              <div id="percent" ref={percentRef}>
                1%
              </div>
              <div id="bar" ref={barRef}>
                <div id="barc" ref={barcRef}></div>
              </div>
            </div>
          </div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <div className="cursor-follower" ref={cursorRef}></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
