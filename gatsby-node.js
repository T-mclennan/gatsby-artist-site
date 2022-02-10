const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~constants": path.resolve(__dirname, "src/constants"),
        "~hooks": path.resolve(__dirname, "src/hooks"),
        "~layout": path.resolve(__dirname, "src/components/layout"),
        "~input": path.resolve(__dirname, "src/components/input"),
        "~homepage": path.resolve(__dirname, "src/components/homepage"),
        "~projects": path.resolve(__dirname, "src/components/projects"),
        "~music": path.resolve(__dirname, "src/components/music"),
        "~about": path.resolve(__dirname, "src/components/about"),
      }
    }
  });
};