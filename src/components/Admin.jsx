import { Box, Button, Link, Progress, Text } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"
import { Link as homeLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getAffiliateData } from "../apiCalls/serverCalls";
const currentURL = window.location.href

export default function Admin() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const fetchData = async () => {
        try {
            let response = await getAffiliateData()
            setIsLoading(false)
            console.log(response)
            setData(response)
        }
        catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Box d='flex' flexDir='column' justifyContent='center' alignItems='center' minH='100vh'>
            {
                isLoading && <Progress size="xs" isIndeterminate width='60%' />
            }
            {
                data.length > 0 && !isLoading && !errorMessage ?
                    <Box minW='40%' borderWidth="1px" borderRadius="lg" boxShadow='md' p = '2rem'>
                        <Table variant="striped" borderWidth="1px" borderRadius='lg'>
                            <TableCaption>Detailed View of all Affiliates</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Owner</Th>
                                    <Th>Link</Th>
                                    <Th isNumeric >Total Clicks</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.length > 0 && data.map((user, idx) =>
                                        <Tr key={idx}>
                                            <Td>{user.username}</Td>
                                            <Td><Link to={currentURL.substring(0, currentURL.lastIndexOf('/')) + '/' + user.link}>{currentURL.substring(0, currentURL.lastIndexOf('/')) + '/' + user.link}</Link></Td>
                                            <Td textAlign='center'> {user.clicks}</Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>
                        <Box d='flex'  justifyContent='center' alignItems='center'>
                            <Link as={homeLink} to='/' style={{ textDecoration: 'none' }}><Button mt='1rem' colorScheme='whatsapp'>Home</Button></Link>
                        </Box>
                    </Box>
                    : errorMessage &&
                    <Box d='flex' flexDir='column' justifyContent='center' alignItems='center'>
                        <Text fontSize='3xl' mb='1rem'>{errorMessage}</Text>
                        <Link as={homeLink} to='/' style={{ textDecoration: 'none' }}><Button colorScheme='whatsapp'>Home</Button></Link>
                    </Box>
            }
        </Box>
    )
}