import Pet from "../models/Pet.ts";
import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function PetListItem({ pet }: { pet: Pet }) {
    return (
        <>
            <Card align="center" justify="center" size="sm">
                <CardHeader><Heading size={ 'sm' }>{ pet.name }</Heading></CardHeader>
                <CardBody>
                    <Image
                        src={ pet.avatar }
                        alt={ pet.name }
                        borderRadius='lg'
                    />
                </CardBody>
                <CardFooter>
                    <Flex justify="center" align="center" direction="column">
                        <Text>{ pet.species }</Text>
                        <Text>{ pet.breed }</Text>
                    </Flex>
                </CardFooter>
            </Card>

        </>
    )
}