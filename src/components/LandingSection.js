import React from "react";
import {  
    VStack, 
    Text
} from "@chakra-ui/react";
import Fade from 'react-reveal/Fade';
import FullScreenSection from "./FullScreenSection";
import data from '../data.json';

// backgroundImage='linear-gradient(to bottom right, black, #42522a, #b8b7b6)'>

const LandingSection = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="black"
        >
            <Fade bottom cascade>
                <VStack px={16}>
                    <Text id="home-section"></Text>
                    <Text fontSize={['3xl','6xl']} color='white' >{data.landingSection.title}</Text>
                    <Text fontSize={['xl','3xl']} color='whiteAlpha.500'>{data.landingSection.description}</Text> 
                </VStack>
            </Fade>
        </FullScreenSection>
    );
};

export default LandingSection;