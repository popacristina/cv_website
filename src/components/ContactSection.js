import React, {useRef} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  useColorModeValue
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useAlertContext } from "../context/alertContext";


const ContactSection = () => {

    const color = useColorModeValue('black', 'white');
    const bg = useColorModeValue('white', 'black');

    const form = useRef();
    const [ isLoading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState(null);
    const { onOpen } = useAlertContext();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => {
                console.log(result.text);
                setLoading(false);
                setResponse({
                    type: 'success',
                    message: `Thanks for your submission, we will get back to you shortly!`,
                });
                onOpen(response.type, response.message);
                formik.resetForm();
            },
            error => {
                console.log(error.text);
                setLoading(false);
                setResponse({
                    type: 'error',
                    message: 'Something went wrong, please try again later!',
                });
                onOpen(response.type, response.message);
            }
        );
    };

    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            message: '',
        },
        validationSchema: Yup.object().shape({
            user_name: Yup.string().required("Required"),
            user_email: Yup.string().email("Invalid email").required("Required"),
            message: Yup.string()
                .min(25, "Must be at least 25 characters")
                .required("Required"),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor={bg}
            py={10}
            spacing={8}    
        >
            <VStack 
                py={10} 
                alignItems="flex-start"
                w={{xl: "100vh", lg : "80vh", md : "60vh", base: "40vh"}}
                >  
                <Heading as='h1' id="contact-section" color={color}>
                    Contact me
                </Heading>
                <Box p={2} rounded='md'  w='100%'>
                    <form ref={form} onSubmit={sendEmail}>
                        <VStack spacing={4}>
                        <FormControl 
                            isInvalid={formik.touched.user_name && formik.errors.user_name} 
                            isRequired
                            >
                            <FormLabel htmlFor="user_name" color={color}>Name</FormLabel>
                            <Input
                                id="user_name"
                                name="user_name"
                                color={color}
                                {...formik.getFieldProps('user_name')}  
                            />
                            <FormErrorMessage>{formik.errors.user_name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.user_email && formik.errors.user_email} isRequired>
                            <FormLabel htmlFor="user_email" color={color}>Email</FormLabel>
                            <Input
                            id="user_email"
                            name="user_email"
                            color={color}
                            type="user_email"
                            {...formik.getFieldProps('user_email')}
                            />
                            <FormErrorMessage>{formik.errors.user_email}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.message && formik.errors.message} isRequired>
                            <FormLabel htmlFor="message" color={color}>Message</FormLabel>
                            <Textarea
                            id="message"
                            name="message"
                            color={color}
                            height={250}
                            {...formik.getFieldProps('message')}
                            />
                            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                        </FormControl>
                        <Button isLoading={isLoading} type="submit" color={color} variant='outline' width="full"> 
                            Submit
                        </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ContactSection;