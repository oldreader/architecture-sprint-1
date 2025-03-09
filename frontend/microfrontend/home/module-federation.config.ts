export const mfConfig = {
  name: "home",
  exposes: {},
  shared: ["react", "react-dom"],
  remote: {
    'user': 'users@http://localhost:8081/user.js',
    'photo-manager': 'tasks@http://localhost:8082/photo-manager.js',
    'card-board': 'tasks@http://localhost:8083/card-board.js',
  }
};
