import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

const serviceIcon = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
}
const services = [
  {
    id: 1,
    icon: <FaCode style={serviceIcon} />,
    title: "web development",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaSketch style={serviceIcon} />,
    title: "web design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid style={serviceIcon} />,
    title: "app design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]

export default services
