import Pet from "../models/Pet.ts";
import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Image, Text } from '@chakra-ui/react'

export default function PetListItem({ pet }: { pet: Pet }) {
    return (
        <>
            <Card>
                <CardHeader>
                    { pet.name }
                </CardHeader>
                <CardBody>
                    <Image
                        src={ pet.avatar }
                        alt="Description of the image"
                        boxSize="200px"
                        objectFit="cover"
                    />
                </CardBody>
                <CardFooter>
                    <Flex justify="center" align="stretch" direction="row">
                        <Box w="250px">
                            <Text>{ pet.breed }</Text>
                            <Text>{ pet.species }</Text>
                        </Box>
                    </Flex>
                </CardFooter>
            </Card>

        </>
    )
}