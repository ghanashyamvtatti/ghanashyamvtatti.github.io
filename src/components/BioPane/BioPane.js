import { Pane } from 'evergreen-ui';
import React from 'react';
import Bio from '../Bio/Bio';
import './BioPane.css';

function BioPane() {
    return (
        <Pane className="bio-pane">
        <Bio bio="I'm a former Machine Learning Engineer (although I've worked full-stack throughout my career). \n
        My interests lie in Computer Vision (image-classification, image-segmentation), Generative Adversarial Networks, and Natural Language Processing.\n
        In my free time, I game and binge-watch anime."/>
      </Pane>
    );
}

export default BioPane;