import { Pet as PetInterface } from "../models/Pet.ts";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Spacer, Text } from '@chakra-ui/react'

export default function PetComponent({pet}: { pet: PetInterface }) {
    return (
        <>
            <Card>
                <CardHeader>
                    { pet.name }
                </CardHeader>
                <CardBody>
                    <Flex justify="center" align="stretch">
                        <Box w="250px">
                            <Flex>
                                <Text>intake reason : </Text>
                                <Spacer/>
                                <Text>{ pet.intakeReason }</Text>
                            </Flex>
                            <Flex>
                                <Text>breed : </Text>
                                <Spacer/>
                                <Text>{ pet.breed }</Text>
                            </Flex>
                            <Flex>
                                <Text>species : </Text>
                                <Spacer/>
                                <Text>{ pet.species }</Text>
                            </Flex>
                            <Flex>
                                <Text>gender : </Text>
                                <Spacer/>
                                <Text>{ pet.gender }</Text>
                            </Flex>
                            <Flex>
                                <Text>base color : </Text>
                                <Spacer/>
                                <Text>{ pet.baseColor }</Text>
                            </Flex>
                            { !pet.adopted && <Button>Adopt</Button> }
                        </Box>
                    </Flex>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>

        </>
    )
}