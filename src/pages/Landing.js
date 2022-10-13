import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../features/Images/imagesSlice";
import { BackgroundBtn } from "../components";

const Landing = () => {
  const dispatch = useDispatch();
  const { images, imageIndex } = useSelector((store) => store.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <main style={{ backgroundImage: `url(${images[imageIndex].src})` }}>
      <BackgroundBtn />
    </main>
  );
};

export default Landing;
