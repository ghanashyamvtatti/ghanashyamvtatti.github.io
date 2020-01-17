import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';
import ProjectCard from '../ProjectCard/ProjectCard';
import './CardAlbum.css';
import firebase from '../Firestore/Firestore';

class CardAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] }
    }

    componentDidMount() {
        let currentComponent = this;
        let projectList = []
        const db = firebase.firestore();
        db.collection("projects").get().then(function(result) {
            result.forEach((doc) => {
                projectList.push(doc.data());
            });
            currentComponent.setState({ projects: projectList});
        });
    }

    render() {
        return (
        <Pane className="album-wrapper" marginTop={50}>
            {this.state.projects.map(
                function(doc) {
                    return (
                    <ProjectCard key={doc.name} projectName={doc.name} desc={doc.shortDesc} longDesc={doc.longDesc} link={doc.link} />
                    )
                }
            )}
        </Pane>
        )
    }


}

export default CardAlbum;