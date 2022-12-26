import React from "react";
import { Image } from "react-bootstrap";

const ProfilePhoto = () => {
  return (
    <Image
      src="./photo-de-profile.jpg"
      className="image"
      alt="Photo de profile"
    />
  );
};

export default ProfilePhoto;