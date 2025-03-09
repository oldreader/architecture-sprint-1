export const mfConfig = {
  name: "card_board",
  exposes: {
    './Main': './src/components/Main.jsx',
  },
  shared: ["react", "react-dom"],
  remote: {
    'likes': 'tasks@http://localhost:8084/likes.js',
  }
};
