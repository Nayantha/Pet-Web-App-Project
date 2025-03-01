import { Box, Card, CardBody, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from "react-router-dom";

export default function ShelterListItem({ shelter }: { shelter: Shelter }) {
    const sluggedShelterName = shelter.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return (
        <>
            <Card align="center" justify="center" size="sm" className="list-item"
                  maxW={ { base: "100%", md: "300px", lg: "400px", xx: "500px" } }>

                <CardBody>
                    <Flex justify="center" align="center" direction="row" gap="3">
                        <Box>
                            <ChakraLink as={ ReactRouterLink }
                                        to={ `/pet-shelters/${ sluggedShelterName }?id=${ shelter.id }` }
                                        state={ { id: shelter.id } }>
                                <Text fontWeight="bold" color="blue.500">{ shelter.name }</Text>
                            </ChakraLink>
                            <Text>{ shelter.location }</Text>
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </>
    )
}