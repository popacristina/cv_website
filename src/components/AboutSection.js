import React from "react";
import Fade from 'react-reveal/Fade';
import FullScreenSection from "./FullScreenSection";
import {
    Text,
    Box, 
    Divider,
    HStack, VStack,
    Heading,
    useColorModeValue
} from '@chakra-ui/react';
import { faBuildingColumns, faBriefcase, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data.json";

const icons = [ faBuildingColumns, faBriefcase, faGear ]

const AboutSection = () => {

    const color = useColorModeValue('black', 'white');
    const bg = useColorModeValue('white', 'black');

    const listAbout = data.aboutSection.map((info, index) => {
        return (
            <HStack spacing={2}>
                <HStack w='40%'>
                    <FontAwesomeIcon icon={icons[index]} color={color}/>
                    <Text fontSize={{lg:'3xl', md: '2xl', sm: 'sm'}} color={color}>{info.title}</Text>
                </HStack>
                <HStack w='60%'>
                    <Text fontSize={{lg:'xl', md: 'lg', sm: 'sm'}} color={color}>{info.description}</Text>
                </HStack>
            </HStack>
        )
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor={bg}
            p={8}
            alignItems="flex-start"
            spacing={8}
            px={2}
        >
            <Fade bottom>
                <Heading id='about-section' color={color}>About</Heading>
            </Fade>
            <Box w={{xl: '100vh', lg: '80vh', md:'60vh', sm: '40vh', base: '30vh'}}>
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