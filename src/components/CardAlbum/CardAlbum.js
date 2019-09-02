import React from 'react';
import { Pane } from 'evergreen-ui';
import ProjectCard from '../ProjectCard/ProjectCard';
import './CardAlbum.css';

function CardAlbum() {
    return (
        <Pane className="album-wrapper" marginTop={100}>
            <ProjectCard projectName="Scraping and Analysis of Stock Data" />
            <ProjectCard projectName="SocialSurvey" />
            <ProjectCard projectName="Gas Leak Detection" />
            <ProjectCard projectName="Automated Task Extraction" />
            <ProjectCard projectName="Distributed Machine Learning(DMLN)" />
            <ProjectCard projectName="React Native App for DMLN" />
            <ProjectCard projectName="Smart Water-Grid System using Blockchain" />
            <ProjectCard projectName="Custom ERC-20 Token" />
            <ProjectCard projectName="Document Verification using Blockchain" />
            <ProjectCard projectName="E-Commerce Inventory Hierarchy Visualization" />
            <ProjectCard projectName="Crypto-Currency based Mutual Funds" />
            <ProjectCard projectName="Analysis and Automated Mapping of Products to Categories in E-Commerce" />
            <ProjectCard projectName="Chatbot Builder" />
            <ProjectCard projectName="AutoML" />
            <ProjectCard projectName="License Plate Detection using Image Segmentation" />
            <ProjectCard projectName="PokeGAN" />
            <ProjectCard projectName="Custom Character-Set Generation and OCR" />
            <ProjectCard projectName="Personal Website" />
        </Pane>
    );
}

export default CardAlbum;