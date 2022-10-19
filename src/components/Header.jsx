import React from "react";
import "./Header.css";
import { useEffect } from "react";
import SearchBar from "./SearchBar";

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
        <img className="part0" src="/public/part0.jpg" />
        <img className="part1" src="/public/part1.png" />
        <img className="part2" src="/public/part2.png" />
        <span className="text1">Weather APP</span>
        <img className="part3" src="/public/part3.png" />
        <img className="part4" src="/public/part4.png" />
        <div className="bottom-shadow"></div>
      </div>
    </div>
  );
};

export default Header;
