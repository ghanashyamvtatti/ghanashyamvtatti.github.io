import { Heading, Pane } from 'evergreen-ui';
import React from 'react';
import Badge from '../Badge/Badge';
import './Bio.css';

function Bio(props) {

    let newText = props.bio.split('\\n').map((item, i) => <p key={i}>{item}</p>);

    return (
        <Pane className="bio-wrapper">
            <Badge
                img="/IMG_1145.jpeg"
                name="Ghanashyam V T"
                email="gvt217@nyu.edu"
                organizationRole="Student (MS in CS)"
                organization="NYU Tandon School of Engineering" />
            <Pane className="bio-pane">
                <Heading className="heading" size={600}>Bio:</Heading>
                {newText}
            </Pane>
        </Pane>
    );
}

export default Bio;