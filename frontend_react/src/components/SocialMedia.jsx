import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.facebook.com/themilkiway/" target="_blank">
          <FaFacebookF />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/milky4897/">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://github.com/BooGu7">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
