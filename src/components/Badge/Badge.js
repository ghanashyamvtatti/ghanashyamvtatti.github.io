import React from 'react';
import { Pane, Avatar, Heading } from 'evergreen-ui';
import { Link } from 'evergreen-ui/commonjs/typography';
import './Badge.css';

function Badge(props) {
    return (
        <Pane className="badge-wrapper">
            <Pane>
                <Avatar src={props.img} name={props.name} size={175} />
            </Pane>
            <Pane>
                <Heading className="heading" size={800}>{props.name}</Heading>
            </Pane>
            <Pane align="center">
                <p>{props.organizationRole}</p>
                <p>{props.organization}</p>
                <Link href="#" color="green" size={500}>{props.email}</Link>
            </Pane>
        </Pane>
    );
}

export default Badge;