export const mfConfig = {
  name: "user",
  exposes: {
    './Login': './src/components/Login.jsx',
    './Register': './src/components/Register.jsx',
    './Footer': './src/components/Footer.jsx',
    './Header': './src/components/Header.jsx',
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
