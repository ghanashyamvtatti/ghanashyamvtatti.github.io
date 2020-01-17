import { Pane } from 'evergreen-ui';
import React from 'react';
import './App.css';
import BioPane from './components/BioPane/BioPane';
import ProjectsPane from './components/ProjectsPane/ProjectsPane';

function App() {  
  return (
    <Pane className="app-wrapper">
      <BioPane />
      <ProjectsPane />
    </Pane>
  );
}

export default App;
