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
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
//import useSubmit from "../hooks/useSubmit";
//import {useAlertContext} from "../context/alertContext";
import emailjs from '@emailjs/browser';


const ContactSection = () => {
    //const {isLoading, response, submit} = useSubmit();
    //const {onOpen} = useAlertContext();
    // <Button isLoading={isLoading} type="submit" colorScheme="white" variant='outline' width="full"> 
    // <form ref={form} onSubmit={formik.handleSubmit}></form>

    //const url = 'localhost/3000';

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );

        formik.resetForm();
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
        /*
        onSubmit: (values) => {
            /*
            submit(url, values);
            onOpen(response.type, response.message);
            if(response.type === "success") formik.resetForm();
            
            
            emailjs.send("service_t2asevv", "template_v1v7sx8", values, "4Q08oH2T3dfteSf2A")
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });
        },
        */
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="black"
            py={16}
            spacing={8}    
        >
            <VStack 
                w={{lg: '1024px', md: '900px', sm: '390'}} 
                p={32} 
                alignItems="flex-start"
                >  
                <Heading as='h1' id="contact-section">
                    Contact me
                </Heading>
                <Box p={6} rounded='md'  w='100%'>
                    <form ref={form} onSubmit={sendEmail}>
                        <VStack spacing={4}>
                        <FormControl 
                            isInvalid={formik.touched.user_name && formik.errors.user_name} 
                            isRequired
                            >
                            <FormLabel htmlFor="user_name">Name</FormLabel>
                            <Input
                                id="user_name"
                                name="user_name"
                                {...formik.getFieldProps('user_name')}
                            />
                            <FormErrorMessage>{formik.errors.user_name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.user_email && formik.errors.user_email} isRequired>
                            <FormLabel htmlFor="user_email">Email Address</FormLabel>
                            <Input
                            id="user_email"
                            name="user_email"
                            type="user_email"
                            {...formik.getFieldProps('user_email')}
                            />
                            <FormErrorMessage>{formik.errors.user_email}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.message && formik.errors.message} isRequired>
                            <FormLabel htmlFor="message">Your message</FormLabel>
                            <Textarea
                            id="message"
                            name="message"
                            height={250}
                            {...formik.getFieldProps('message')}
                            />
                            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" colorScheme="white" variant='outline' width="full"> 
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