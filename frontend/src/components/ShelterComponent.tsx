import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";

export default function ShelterComponent({ shelter }: { shelter: Shelter }) {
    return (
        <>
            <Card align="center" justify="center" size="sm" className="list-item"
                  maxW={ { base: "100%", md: "300px", lg: "400px", xx: "500px" } }>

                <CardBody>
                    <Flex justify="center" align="center" direction="row" gap="3">
                        <Box>
                            <Text fontWeight="bold" color="blue.500">{ shelter.name }</Text>
                            <Text>{ shelter.location }</Text>
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </>
    );
}