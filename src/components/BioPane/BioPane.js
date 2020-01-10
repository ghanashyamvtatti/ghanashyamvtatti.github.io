import { Pane } from 'evergreen-ui';
import React from 'react';
import Bio from '../Bio/Bio';
import './BioPane.css';
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function newTab(URL) {
  window.open(URL, '_blank');
}

function BioPane() {
    return (
        <Pane className="bio-pane">
        <Pane align="center">
          <FaGithubAlt size="2em" className="social-media" onClick={() => newTab("https://github.com/ghanashyamvtatti")}/>
          <FaLinkedinIn size="2em" className="social-media" onClick={() => newTab("https://www.linkedin.com/in/ghanashyam-vt")}/>
          <FaTwitter size="2em" onClick={() => newTab("https://twitter.com/ghanashyamvt")}/>
        </Pane>
        <Bio bio="I'm a former Software Learning Engineer (although I've worked full-stack throughout my career). \n
        My interests lie in Computer Vision (image-classification, image-segmentation), Generative Adversarial Networks, and Natural Language Processing.\n
        In my free time, I game and binge-watch anime."/>
      </Pane>
    );
}

export default BioPane;