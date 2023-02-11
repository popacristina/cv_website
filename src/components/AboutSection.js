import React from "react";
import Fade from 'react-reveal/Fade';
import FullScreenSection from "./FullScreenSection";
import {
    Text,
    Box, 
    Divider,
    HStack, VStack,
    Heading
} from '@chakra-ui/react';
import { faBuildingColumns, faBriefcase, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data.json";


const icons = [ faBuildingColumns, faBriefcase, faPalette ]

const listAbout = data.aboutSection.map((info, index) => {
    return (
        <HStack h={140} spacing={4} ml={2}>
            <FontAwesomeIcon icon={icons[index]} />
            <Text fontSize={{lg:'3xl', md: '2xl', sm: 'md'}}>{info.title}</Text>
            <Divider orientation="vertical" />
            <Text fontSize={{lg:'xl', md: 'lg', sm: 'sm'}}>{info.description}</Text>
        </HStack>
    )
});


const AboutSection = () => {
    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="black"
            p={8}
            alignItems="flex-start"
            spacing={8}
            px={2}
        >
            <Fade bottom>
                <Heading id='about-section'>About</Heading>
            </Fade>
            <Box w={{xl: '100vh', lg: '80vh', md:'60vh', base: '40vh'}}>
                <VStack spacing={20}>
                    <Fade bottom cascade>
                        {listAbout}
                    </Fade>
                </VStack>
            </Box>
        </FullScreenSection>

    );
};

export default AboutSection;