import { Card, Heading } from 'evergreen-ui';
import React from 'react';
import './ProjectCard.css';
import { Pane } from 'evergreen-ui/commonjs/layers';

function ProjectCard(props) {
    let newDesc = props.desc ? props.desc.split('\\n').map((item, i) => <p key={i}>{item}</p>): '';
    return (
        <Card elevation={1} className="card">
            <Heading size={700} className="project-name">{props.projectName}</Heading>
            <Pane className="short-desc">{newDesc}</Pane>
        </Card>
    );
}

export default ProjectCard;