import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import Badge from '../Badge/Badge';
import './Bio.css';

function Bio(props) {
    return (
        <Pane className="bio-wrapper">
            <Badge
                img="/IMG_1145.jpeg"
                name="Ghanashyam V T"
                email="gvt217@nyu.edu"
                role="Student (MS in CS)"
                organization="NYU Tandon School of Engineering" />
            <Pane className="bio-pane">
                <Heading className="heading" size={600}>Bio:</Heading>
                <p>{props.bio}</p>
            </Pane>
        </Pane>
    );
}

export default Bio;