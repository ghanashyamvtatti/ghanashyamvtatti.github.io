import { Card, Heading } from 'evergreen-ui';
import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    return (
        <Card elevation={1} className="card">
            <Heading size={700} margin-top={30} className="project-name">{props.projectName}</Heading>
        </Card>
    );
}

export default ProjectCard;