import React from 'react';
import { Pane, Avatar, Heading } from 'evergreen-ui';
import './Badge.css';

function Badge(props) {
    return (
        <Pane className="badge-wrapper">
            <Pane>
                <Avatar src={props.img} name={props.name} size={175} />
            </Pane>
            <Pane>
                <Heading className="heading" size={800} color="white">{props.name}</Heading>
            </Pane>
            <Pane align="center">
                <p>{props.organizationRole}</p>
                <p>{props.organization}</p>
                <a href="#" className="link">{props.email}</a>
            </Pane>
        </Pane>
    );
}

export default Badge;