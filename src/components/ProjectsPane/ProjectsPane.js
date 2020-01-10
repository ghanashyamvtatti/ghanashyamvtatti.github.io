import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import CardAlbum from '../CardAlbum/CardAlbum';
import './ProjectsPane.css';

function ProjectsPane() {
    return (
        <Pane className="projects-pane" >
            <Pane>
                <Heading marginTop={50} size={900}>Projects</Heading>
            </Pane>
            <CardAlbum />
        </Pane>
    );
}

export default ProjectsPane;