import { 
    Box, 
    Heading,  
    Image, 
    Text, 
    HStack,
    Collapse,
    Button
 } 
from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Fade from 'react-reveal/Fade'

const Card = ({ title, description, technologies, imageSrc }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    return (
        <Fade bottom cascade>
            <Box p={4} display={{md:'flex'}} bg='black'>
                <Box flexShrink={0.5}>
                    <Image 
                        borderRadius='md' 
                        src={imageSrc} 
                        width={{sm: 'xl', md: '2xl'}}
                    />
                </Box>
                <Box mt={{base: 4, md: 0}} ml={{md: 2}}>
                    <Heading color='white' fontSize='xl'>{title}</Heading>
                    <Collapse startingHeight={40} in={show}>
                        <Text fontSize='sm' color='whiteAlpha.800'>{description}</Text>
                        <Text fontSize='sm' color='whiteAlpha.800'>
                            Technologies: {technologies} 
                        </Text>
                    </Collapse>
                    <HStack spacing={1}>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <Button size='sm' onClick={handleToggle} mt='1rem' colorScheme='blackAlpha'>
                            Show {show ? 'Less' : 'More'}   
                        </Button>
                    </HStack>
                </Box>     
            </Box>
        </Fade>
    )
}

export default Card;

/*
<HStack spacing={4} alignItems='flex-end'>
                       
                        <VStack spacing={6} py={4} alignItems='flex-start'>
                            <Heading color='white' fontSize='xl'>{title}</Heading>
                            <Collapse startingHeight={60} in={show}>
                                <Text fontSize='sm' color='gray.500'>{description}</Text>
                                <Text fontSize='sm' color='gray.500'>
                                    Technologies: {technologies} 
                                </Text>
                            </Collapse>
                            <HStack spacing={1}>
                                <FontAwesomeIcon icon={faAngleDown} />
                                <Button size='sm' onClick={handleToggle} mt='1rem' colorScheme='blackAlpha'>
                                    Show {show ? 'Less' : 'More'}   
                                </Button>
                            </HStack>
                        </VStack>
                    </HStack> 

*/