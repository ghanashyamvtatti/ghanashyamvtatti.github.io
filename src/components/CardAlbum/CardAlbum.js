import React from 'react';
import { Pane } from 'evergreen-ui';
import ProjectCard from '../ProjectCard/ProjectCard';
import './CardAlbum.css';

function CardAlbum() {
    return (
        <Pane className="album-wrapper" marginTop={50}>
            <ProjectCard projectName="AutoML"
                        desc="Automated Machine Learning for regression, classification, 
                        forecasting of numerical data and classification of images as well."
                        longDesc="Automated Machine Learning for regression, classification, 
                            forecasting of numerical data and classification of images as well.\n
                            It uses a combination of scikit-learn, tensorflow and keras.\n
                            Each trained model can be deployed on automatically managed docker containers." />
            <ProjectCard projectName="Gas Leak Detection"
                        desc="Detection of gas leaks using image classification via Convolutional Neural Networks on low-cost thermal cameras.\n
                            Data from the temperature sensor array is also used to help determine the type of gas being leaked." />
            <ProjectCard projectName="Distributed Machine Learning(DMLN)"
                        desc="Allows users to remotely capture data from sensors, train classification models using them and finally deploy them to any remote location."
                        longDesc="An application to collect training data, train and build models based on the collected data using Tensorflow,\n
                         and to deploy these models on remote systems.\n
                        The application used python, Tensorflow, docker, librosa, OpenCV, scikit-image and flask for the APIs." />
            <ProjectCard projectName="Analysis and Automated Mapping of Products to Categories in E-Commerce" 
                        desc="A solution to map new products automatically to categories"
                        longDesc="Scraped and cleaned product to category mapping of multiple e-commerce websites.\n
                            Used the data to build an intelligent solution that maps new products automatically to categories based on information like brand and image." />
            <ProjectCard projectName="Chatbot Builder" 
                        desc="Uses Spacy, RASA and duckling to enable users to quickly and easily build chatbots via a simple UI.\n
                            The chatbot can also be deployed as an Alexa skill." 
                            longDesc="The Chatbot Framework is a python library to create powerful chatbots really fast and easily.\n 
                            It uses a basic neural network for intent classification and a Natural Language Processing (NLP) unit\n
                            for tasks like Named Entity Recognition (NER) and sentiment analysis. \n
                            The framework also allows training of new custom entities."/>
            <ProjectCard projectName="License Plate Detection using Image Segmentation" 
                        desc="Performs image segmentation using DeepLab and then uses Tesseract to perform OCR" />
            <ProjectCard projectName="PokeGAN" 
                        desc="A Generative Adversarial Network to generate images of new Pokemon using images of existing pokemon"/>
            <ProjectCard projectName="React Native App for DMLN" 
                        desc="Built a React Native application for iOS and Android.\n
                            Allows users to capture and upload data.\n
                            Also enables the users to deploy the trained models and uses on-device hardware for inference." />
            <ProjectCard projectName="Smart Water-Grid System using Blockchain" 
                        desc="Used to determine leakage in water-grids.\n
                            Amount of water sent and received is recorded on the blockchain and tallied to detect the leaks."
                        longDesc="A smart grid system was built using blockchain, \n
                        where a leak in the grid could be detected through tracking the blockchain ledger in which all transactions would be recorded.\n
                        This project gave us the opportunity to evaluate various blockchain implementations, including hyperledger fabric and ethereum." />
            <ProjectCard projectName="Custom ERC-20 Token" 
                        desc="An ERC-20 compliant cryptocurrency to serve as store credit for a medical service provider." />
            <ProjectCard projectName="Document Verification using Blockchain"
                        desc="An application to store verified records of professionals for quick, easy and reliable background verification." />
            <ProjectCard projectName="E-Commerce Inventory Hierarchy Visualization" 
                        desc="Used d3.js to determine and visualize the hierarchy of the product inventory for an e-commerce company." />
            <ProjectCard projectName="Crypto-Currency based Mutual Funds" 
                        desc="Prototyped an application to generate cryptocurrencies based on stocks and other cryptocurrencies.\n
                            This includes rebalancing strategies for simple and reliable price variation." />
            <ProjectCard projectName="Custom Character-Set Generation and OCR" 
                        desc="Created an application that generates encrypted character-sets and trained the Tesseract OCR for reading them." />
            <ProjectCard projectName="Personal Website" 
                        desc="This website.\n
                            Built using React.js.\n
                            Powered by GitHub pages."/>
            <ProjectCard projectName="StockMeMaybe" 
                        desc="Scraped user generated content about stocks on various forums and social media.\n
                            Performed sentiment analysis on the content and used it to predict the stock prices for the next day"
                        longDesc="StockMeMaybe is a web application that uses the predictive capacity of User Generated Content (UGC) \n to predict stock prices. 
                        \nIt scrapes UGC from Twitter, Yahoo Finance News and Yahoo Finance Messages. \n
                        Sentiment analysis is performed on the UGC and the effective sentiment is used to predict the next day's price of any NASDAQ company. 
                        \nPrimary Language : Python
                        \nWeb Application Framework : Django
                        \nDBMS: MySQL
                        \nFront-end: HTML, CSS, JavaScript, Bootstrap.
                        \nKeywords: Stocks, Prediction, Scraping, Predictive Analytics, User Generated Content, Sentiment Analytics, Natural Language Pricessing, Python, Django" />
            <ProjectCard projectName="Automated Task Extraction" 
                        desc="Used OpenCV and Scikit-Image to determine the actions being performed by the user on the screen.\n
                            The collected data is then used to eventually suggest the fastest way of performing a certain task." />
            <ProjectCard projectName="SocialSurvey" 
                        desc="An organization-level application to send out surveys to customers, analyze the data and get service insights.\n
                            Includes various API integrations including LinkedIn, Facebook, Twitter and Zillow.\n " />
        </Pane>
    );
}

export default CardAlbum;