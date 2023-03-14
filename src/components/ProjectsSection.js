import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Card from "./Card";
import Fade from "react-reveal/Fade";
import data from "../data.json";


const ProjectsSection = () => {

    const color = useColorModeValue('black', 'white');
    const bg = useColorModeValue('white', 'black');

    return (
        <FullScreenSection
            backgroundColor={bg}
            isDarkBackground
            p={16}
            alignItems="flex-start"
            spacing={8}
        >
            <Fade bottom>
                <Heading as="h1" id="projects-section" color={color}>
                    Featured Projects
                </Heading>
            </Fade>
            <Box
                display="grid"
                gridGap='15vh'
            >
                {data.projectsSection.map((project) => (
                    <Card 
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        imageSrc={require(`../images/${project.image}`)}
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
  };

export default ProjectsSection;
