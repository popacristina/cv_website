import React from "react";
import {Box, Flex, Text, HStack} from "@chakra-ui/react";
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
  const listIcons = socials.map((social) => {
    return(
        <a href={social.url}>
            <FontAwesomeIcon icon={social.icon} size="2px" color="white"></FontAwesomeIcon>
        </a>
    )
  });

  return (
    <Box backgroundColor='black'>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={20}
        >
          <HStack>
            <Text>Cristina Popa © 2023</Text>
          </HStack>
          <HStack spacing={10}>
            {listIcons}
          </HStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
