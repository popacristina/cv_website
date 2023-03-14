import { useDisclosure, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader,
    DrawerBody, 
    VStack, HStack,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import React, {useRef} from "react";
import {Button} from '@chakra-ui/react';
import { faBars, 
    faAddressCard,
    faFolderOpen,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Burger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    
    const {colorMode, toggleColorMode} = useColorMode();
    const color = useColorModeValue('black', 'white');
    const bg = useColorModeValue('white', 'black');

    return (
        <>
            <Button ref={btnRef} onClick={onOpen}  size='md' bg={bg}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                bg={bg}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader bg={bg}/>
                        <DrawerBody bg={bg}>
                            <VStack spacing={8} py={8} alignItems='flex-start'>
                            <HStack spacing={4} px={8}>
                                    <FontAwesomeIcon icon={faAddressCard}/>
                                    <a href='#home' onClick={handleClick("home")}> Home </a>
                                </HStack>
                                <HStack spacing={4} px={8}>
                                    <FontAwesomeIcon icon={faAddressCard}/>
                                    <a href='#about' onClick={handleClick("about")}> About </a>
                                </HStack>
                                <HStack spacing={4} px={8}>
                                    <FontAwesomeIcon icon={faFolderOpen}/>
                                    <a href='#projects' onClick={handleClick("projects")}>Projects</a>
                                </HStack>
                                <HStack spacing={4} px={8}>
                                    <FontAwesomeIcon icon={faPenToSquare}/>
                                    <a href='#contact' onClick={handleClick("contact")}>Contact</a>
                                </HStack>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay> 
            </Drawer>
        </>
    )
}

export default Burger;