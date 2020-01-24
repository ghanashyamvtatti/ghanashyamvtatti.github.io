import { Heading, Pane } from 'evergreen-ui';
import React from 'react';
import Badge from '../Badge/Badge';
import './Bio.css';

function Bio(props) {

    let newText = props.bio.split('\\n').map((item, i) => <p className="paragraph" key={i}>{item}</p>);

    return (
        <Pane className="blue-bg">
            <Pane className="bio-wrapper">
                <Badge
                    img="/IMG_1145.jpeg"
                    name="Ghanashyam V Tatti"
                    email="ghanashyamvtatti@gmail.com"
                    organizationRole="Student (MS in CS)"
                    organization="NYU Tandon School of Engineering" />
            </Pane>
            <Pane className="bio-pane">
                <Heading className="heading" size={500} color="white">Biography:</Heading>
                {newText}
            </Pane>
        </Pane>
    );
}

export default Bio;