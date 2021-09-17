import { Box, Button, FormControl, Input, Link, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { registerUser } from "../apiCalls/serverCalls";
import { Link as homeLink } from 'react-router-dom'


export default function SignUp() {
    const nameRef = useRef()
    const usernameRef = useRef()
    const subjectRef = useRef()
    const [buttonLoading, setButtonLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [link, setLink] = useState('')

    const submitHandler = async () => {
        setButtonLoading(true)
        if (!usernameRef.current.value.trim().length) {
            alert('Teacher ID field cannot be empty!')
            return
        }
        if (!nameRef.current.value.trim().length) {
            alert('Teacher Name field cannot be empty!')
            return
        }
        if (!subjectRef.current.value.trim().length) {
            alert('Subject field cannot be empty!')
            return
        }
        try {
            let response = await registerUser(usernameRef.current.value.trim(), nameRef.current.value.trim(), subjectRef.current.value.trim())
            setButtonLoading(false)
            setSuccess(true)
            setLink(response)
        }
        catch (error) {
            setErrorMessage(error.message)
            setButtonLoading(false)
        }
    }

    return (
        <Box d='flex' flexDir='column' minH='100vh' justifyContent='center' alignItems='center'>
            {
                !success ?
                <Box d="flex" p="2rem" paddingTop='0' borderWidth="1px" borderRadius="lg" minWidth='30%' boxShadow='md'>
                    <VStack p='2rem'>
                        <FormControl>
                            <Text fontSize='5xl' mb='1rem'>Sign Up</Text>
                            <Input
                                id='full-name'
                                variant='outline'
                                placeholder="Full Name"
                                type='text'
                                mb='1rem'
                                ref={nameRef}
                            />
                            <Input
                                id='username'
                                variant='outline'
                                placeholder="Unique Teacher Id"
                                isRequired
                                type='text'
                                mb='1rem'
                                ref={usernameRef}
                            />
                            <Input
                                id='subject'
                                variant='outline'
                                placeholder="Enter Subject Name"
                                isRequired
                                type='text'
                                mb='1rem'
                                ref={subjectRef}
                            />
                        </FormControl>
                        <Button
                            colorScheme='blue'
                            onClick={submitHandler}
                            isLoading={buttonLoading}
                            loadingText='Submitting'
                            mb='1rem'
                        >
                            Submit
                        </Button>
                        <Text fontSize='xs' py='1rem' color='red'>{errorMessage}</Text>
                    </VStack>
                </Box>
                :
                <Box d='flex' flexDir='column' justifyContent = 'center' alignItems='center'>
                    <Text fontSize = 'xl' mb = '1rem' textDecoration = 'underline'></Text>
                <Text fontSize = '3xl' mb = '1rem'>{window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/' + link}</Text>
                <Link as={homeLink} to='/' style = {{textDecoration:'none'}}><Button colorScheme = 'whatsapp'>Home</Button></Link>
                </Box>
            }
        </Box>
    )
}