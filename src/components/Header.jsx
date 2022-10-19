import React from "react";
import "./Header.css";
import { useEffect } from "react";
import part0 from '/public/part0.jpg'
import part1 from '/public/part1.png'
import part2 from '/public/part2.png'
import part3 from '/public/part3.png'
import part4 from '/public/part4.png'

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".part1", 5, { y: -100 })
      .to(".text1", 2, { y: -600 }, "-=5")
      .to(".part2", 5, { y: -300 }, "-=5")
      .to(".part3", 5, { y: -400 }, "-=5")
      .to(".part4", 5, { y: -500 }, "-=5")
      .to(".bottom-shadow", 5, { y: -300 }, "-=5");

    ScrollTrigger.create({
      animation: tl,
      trigger: ".hero-section",
      start: "center center",
      end: "+=2000",
      scrub: true,
    });
  }, []);

  return (
    <div>
      <div className="hero-section">
        <img className="part0" src={part0} />
        <img className="part1" src={part1} />
        <img className="part2" src={part2} />
        <span className="text1">Weather APP</span>
        <img className="part3" src={part3} />
        <img className="part4" src={part4} />
        <div className="bottom-shadow"></div>
      </div>
    </div>
  );
};

export default Header;
