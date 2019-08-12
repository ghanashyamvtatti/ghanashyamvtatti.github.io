import React from 'react';
import { Pane } from 'evergreen-ui';
import ProjectCard from '../ProjectCard/ProjectCard';

function CardAlbum() {
    return (
        <Pane className="album-wrapper" marginTop={100}>
            <ProjectCard />
        </Pane>
    );
}

export default CardAlbum;