import { Card, Text } from 'evergreen-ui';
import React from 'react';
import './ProjectCard.css';

function ProjectCard() {
    return (
        <Card elevation={1} background="white" height={200} width={200}>
            <Text>Project</Text>
        </Card>
    );
}

export default ProjectCard;