import React from "react"
import { FaCode, FaSketch, FaAndroid, FaBrush } from "react-icons/fa"
import { IoBrushOutline, IoColorPaletteOutline } from "react-icons/io5"


const serviceIcon = {
  fontSize: '2.5rem',
  marginBottom: '1.5rem',
}
const services = [
  {
    id: 1,
    icon: <IoBrushOutline style={serviceIcon} />,
    title: "mural painting",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 2,
    icon: <IoColorPaletteOutline style={serviceIcon} />,
    title: "digital art",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 3,
    icon: <FaBrush style={serviceIcon} />,
    title: "consulting services",
    text: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
]

export default services
