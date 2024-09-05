import Pet from "../models/Pet.ts";
import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Text } from '@chakra-ui/react'

export default function PetListItem({ pet }: { pet: Pet }) {
    return (
        <>
            <Card>
                <CardHeader>
                    { pet.name }
                </CardHeader>
                <CardBody>
                    <Flex justify="center" align="stretch" direction="row">
                        <Box w="250px">

                            <Text>{ pet.breed }</Text>

                            <Text>{ pet.species }</Text>
                        </Box>
                    </Flex>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>

        </>
    )
}