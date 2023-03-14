import React, { useEffect, useState } from 'react';
import { Box, 
    Button, 
    HStack, 
    useColorMode, 
    useColorModeValue 
} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Burger from './Burger';

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: popa_cristina@outlook.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/popacristina",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/cristina-popa-b73a89252/"
    },
];

function useScroll() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const direction = currentScroll > lastScroll ? "down" : "up";
            if (direction !== scrollDirection) {
                setScrollDirection(direction);
            }
            lastScroll = currentScroll > 0 ? currentScroll : 0;
        };
        window.addEventListener("scroll", handleScroll); 
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollDirection]);

    return scrollDirection;
};

const Header = () => {

    const scrollDirection = useScroll();
    const {colorMode, toggleColorMode} = useColorMode()
    const color = useColorModeValue('black', 'white')
    const bg = useColorModeValue('white', 'black')

    const listIcons = socials.map((social) => {
        return(
            <a href={social.url}>
                <FontAwesomeIcon icon={social.icon} size="2px" color={color}/>
            </a>
        )
    });

    const colorModeIcon = (colorMode) => {
        if (colorMode === 'light') return <FontAwesomeIcon icon={faMoon} color='black'/>
        else return <FontAwesomeIcon icon={faSun} color='white'/>
    }

    return (
        <Box
            position='fixed'
            zIndex='102'
            top={0}
            left={0}
            right={0}
            transform="auto"
            translateY={`${scrollDirection === "down" ? "-200px" : "0px"}`}
            transitionProperty='transform'
            transitionDuration='.3s'
            transitionTimingFunction='ease-in-out'
            bg={bg}
        >
            <HStack
                px={16}
                py={4}
                justifyContent='space-between'
                alignItems='center'    
            >
            <nav>
                <HStack spacing={6}>
                    <Burger />
                    <Button onClick={toggleColorMode} color={color} bg={bg}>
                        {colorModeIcon(colorMode)}
                    </Button>
                </HStack>
            </nav>
            <nav>
                <HStack spacing={12}>
                    {listIcons}
                </HStack>
            </nav>
            </HStack>
        </Box>
    )
}

export default Header;