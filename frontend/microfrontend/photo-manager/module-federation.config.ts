export const mfConfig = {
  name: "photo_manager",
  exposes: {
    './AddPlacePopup': './src/components/AddPlacePopup.jsx',
    './EditAvatarPopup': './src/components/EditAvatarPopup.jsx',
    './EditProfilePopup': './src/components/EditProfilePopup.jsx',
    './ImagePopup': './src/components/ImagePopup.jsx',
  },
  shared: ["react", "react-dom"],
};
