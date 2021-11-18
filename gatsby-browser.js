const React = require('react');
// import { ParallaxProvider } from "react-scroll-parallax";
const { ParallaxProvider } = require("react-scroll-parallax");
const Layout = require('./src/components/layout/Layout').default

exports.wrapPageElement = ({element, props}) => {
  return (
    <ParallaxProvider>
      <Layout {...props}>
        {element}
      </Layout>
    </ParallaxProvider>
  )
}