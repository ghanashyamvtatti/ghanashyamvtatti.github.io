import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import Bio from './components/Bio/Bio';
import './App.css';

function App() {
  return (
    <Pane className="app-wrapper">
      <Pane display="flex" justifyContent="center" flex={2} background="#084B8A" color={"white"} height="100%">
        <Bio bio="My name is Wally West and I am the fastest man alive!
        My name is Wally West and I am the fastest man alive!
        My name is Wally West and I am the fastest man alive! 
        My name is Wally West and I am the fastest man alive! 
        My name is Wally West and I am the fastest man alive! 
        My name is Wally West and I am the fastest man alive! 
        My name is Wally West and I am the fastest man alive! "/>
        
      </Pane>
      <Pane flex={5} background="tint1" justifyContent="center" display="flex">
        <Heading size={900}>Projects come here</Heading>
      </Pane>
    </Pane>
  );
}

export default App;
