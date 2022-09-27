import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const CicularProgress = ({ size, strokeWidth, percentage, color }) => {
  // const [circle, setCircle] = useState(false);
  // const { ref: myRef, inView: anime } = useInView();
  // const { ref: myAnime, inView: isVis } = useInView();
  // console.log(anime);
  // console.log(isVis);
  // using hooks
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  // const [anime, setAnime] = useState();
  // const myRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries;
  //     setAnime(entry.isIntersecting);
  //     c
  //   observer.observe(myRef.current);onsole.log("entry", entry);
  //   });
  // }, []);

  // let Anime = window.addEventListener("scroll", useEffect);
  const use = () => {
    if (window.scrollY >= 500) {
      setProgress(percentage);
    } else {
      setProgress(null);
    }
  };
  // useEffect(() => {});

  window.addEventListener("scroll", use);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill="none"
        stroke="#ccc"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        style={{ transition: "all 1s" }}
      />
      <text
        fill="#FF4D5A"
        fontSize="40px"
        x="50%"
        y="50%"
        dy="20px"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CicularProgress;
