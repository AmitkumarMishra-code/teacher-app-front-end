import { Box, Button, Link, Text } from "@chakra-ui/react";
import { Link as newUserLink, Link as adminLoginLink } from 'react-router-dom'

export default function Home() {
    return (
        <Box d = 'flex' flexDir='column' justifyContent = 'center' alignItems='center' minH = '100vh'>
            <Text fontSize="4xl" fontWeight = 'semibold' mb = '1rem'>
                Teacher Registration
            </Text>
            <Box d= 'flex' justifyContent='center' alignItems = 'center' >
                <Link as={newUserLink} to='/newUser' style = {{textDecoration:'none'}}><Button colorScheme = 'whatsapp' mr = '2rem'>Sign Up!</Button></Link>
                <Link as={adminLoginLink} to='/admin' style = {{textDecoration:'none'}}><Button colorScheme ='telegram'>Admin</Button></Link>
            </Box>
        </Box>
    )
}