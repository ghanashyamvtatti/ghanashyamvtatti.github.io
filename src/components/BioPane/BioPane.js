import { Pane } from 'evergreen-ui';
import React from 'react';
import Bio from '../Bio/Bio';
import './BioPane.css';

function BioPane() {
    return (
        <Pane className="bio-pane">
        <Bio bio="My name is Wally West and I am the fastest man alive!
            My name is Wally West and I am the fastest man alive!
            My name is Wally West and I am the fastest man alive! 
            My name is Wally West and I am the fastest man alive! 
            My name is Wally West and I am the fastest man alive! 
            My name is Wally West and I am the fastest man alive! 
            My name is Wally West and I am the fastest man alive! "/>
        
      </Pane>
    );
}

export default BioPane;