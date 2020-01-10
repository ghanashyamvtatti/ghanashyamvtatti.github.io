import { Card, Heading, Dialog } from 'evergreen-ui';
import React, { Component } from 'react';
import './ProjectCard.css';
import { Pane } from 'evergreen-ui/commonjs/layers';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isShown: false }
    }

    render() {
        let newDesc = this.props.desc ? this.props.desc.split('\\n').map((item, i) => <p key={i}>{item}</p>) : '';
        let longDesc = this.props.longDesc ? this.props.longDesc.split('\\n').map((item, i) => <p key={i}>{item}</p>) : '';
        return (
            <Pane>
                <Card
                    elevation={2}
                    hoverElevation={4}
                    activeElevation={4}
                    className="card"
                    onClick={() =>  this.setState({ isShown: true })}>
                    <Heading size={700} className="project-name">{this.props.projectName}</Heading>
                    <Pane className="short-desc">{newDesc}</Pane>
                </Card>
                <Dialog
                    isShown={this.state.isShown}
                    title={this.props.projectName}
                    onCloseComplete={() => this.setState({ isShown: false })}
                    hasFooter={false}>
                    {longDesc || newDesc}
                </Dialog>
            </Pane>
        );
    }
}


export default ProjectCard;