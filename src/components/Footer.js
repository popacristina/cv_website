import React from "react";
import {
  Box, 
  Flex, 
  Text, 
  HStack,
  useColorModeValue
} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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

const Footer = () => {

  const color = useColorModeValue('black', 'white');
  const bg = useColorModeValue('white', 'black');

  const listIcons = socials.map((social) => {
    return(
      <a href={social.url}>
        <FontAwesomeIcon icon={social.icon} size="2px" color={color}/>
      </a>
    )
  });

  return (
    <Box backgroundColor={bg}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color={color}
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={20}
        >
          <Text>Cristina Popa © 2023</Text>
          <HStack spacing={10}>
            {listIcons}
          </HStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
