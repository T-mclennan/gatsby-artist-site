import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

function GradientWrapper({primaryColor, secondaryColor, iconStyle}) {
  return <>
  <svg width="0" height="0">
    <linearGradient id="dynamic-gradient" x1="100%" y1="100%" x2="0%" y2="0%" gradientTransform="rotate(45)">
      <stop stopColor={secondaryColor} offset="0%" />
      <stop stopColor={primaryColor} offset="100%" />
    </linearGradient>
  </svg>

  <FaQuoteLeft className={iconStyle} style={{ fill: "url(#dynamic-gradient)" }} />


</>;
}

export default GradientWrapper;
