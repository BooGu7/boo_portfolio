import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Transforming <span>Visions</span>
        <br />
        into <span>Stunning Web Realities</span>
      </h2>

      <h2 className="app__desc bold-text">
        I'm a self-taught developer specializing in frontend. I've invested time
        in HTML, CSS, JavaScript and ReactJS. From building simple interfaces to
        enhancing user experiences, this journey has been exciting. I constantly
        update my skills to apply new trends and technologies like NextJS,
        Redux, Sass, Git and Ant Design. I believe in my abilities and I'm ready
        to contribute to creative and challenging projects.
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
