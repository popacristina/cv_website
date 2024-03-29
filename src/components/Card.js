import { 
    Box, 
    Heading,  
    Image, 
    Text, 
    HStack,
    Collapse,
    Button,
    useColorModeValue,
    VStack
 } 
from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Fade from 'react-reveal/Fade'

const Card = ({ title, description, technologies, imageSrc }) => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    const color = useColorModeValue('black', 'white');
    const secondaryColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
    const bg = useColorModeValue('white', 'black');

    return (
        <Fade bottom cascade>
            <Box p={4} display={{md:'flex'}} bg={bg}>
                <Box flexShrink={0.5}>
                    <Image 
                        borderRadius='md' 
                        src={imageSrc} 
                        width={{sm: 'xl', md: '2xl'}}
                    />
                </Box>
                <Box mt={{base: 4, md: 0}} ml={{md: 2}}>
                    <Heading color={color} fontSize='xl'>{title}</Heading>
                    <Collapse startingHeight={40} in={show}>
                        <Text fontSize='sm' color={secondaryColor}>{description}</Text>
                        <Text fontSize='sm' color={secondaryColor}>
                            Technologies: {technologies} 
                        </Text>
                    </Collapse>
                    <Button size='sm' onClick={handleToggle} mt='1rem' color={color} bg={bg}>
                        <FontAwesomeIcon icon={faAngleDown} color={color}/>
                        Show {show ? 'Less' : 'More'}   
                    </Button>
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