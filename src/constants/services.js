import React from "react"
import { FaCode, FaSketch, FaAndroid, FaBrush } from "react-icons/fa"
import { IoBrushOutline, IoColorPaletteOutline } from "react-icons/io5"


const serviceIcon = {
  fontSize: '3rem',
  marginBottom: '1.5rem',
}
const services = [
  {
    id: 1,
    icon: <IoBrushOutline style={serviceIcon} />,
    title: "mural painting",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <IoColorPaletteOutline style={serviceIcon} />,
    title: "other mediums",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaBrush style={serviceIcon} />,
    title: "consulting services",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]

export default services
