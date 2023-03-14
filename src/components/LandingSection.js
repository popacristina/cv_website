import React from "react";
import {  
    VStack, 
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import Fade from 'react-reveal/Fade';
import FullScreenSection from "./FullScreenSection";
import data from '../data.json';


const LandingSection = () => {

    const color = useColorModeValue('black', 'white');
    const secondaryColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
    const bg = useColorModeValue('white', 'black');

    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor={bg}
        >
            <Fade bottom cascade>
                <VStack px={16}>
                    <Text id="home-section"></Text>
                    <Text fontSize={['3xl','6xl']} color={color} >{data.landingSection.title}</Text>
                    <Text fontSize={['xl','3xl']} color={secondaryColor}>{data.landingSection.description}</Text> 
                </VStack>
            </Fade>
        </FullScreenSection>
    );
};

export default LandingSection;