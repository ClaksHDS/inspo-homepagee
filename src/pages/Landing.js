import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../features/Images/imagesSlice";
import {
  BackgroundBtn,
  Time,
  Weather,
  Quote,
  Tasks,
  Footer,
} from "../components";

const Landing = () => {
  const dispatch = useDispatch();
  const { images, imageIndex } = useSelector((store) => store.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${images[imageIndex].src})`,
          backgroundColor: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        }}
      >
        <section className='dashboard'>
          <Time />
          <Weather />
        </section>
        <section>
          <Tasks />
          <BackgroundBtn />
        </section>
        <Quote />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Landing;
