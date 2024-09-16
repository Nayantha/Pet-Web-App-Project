import Pet from "../models/Pet.ts";
import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function PetListItem({ pet }: { pet: Pet }) {
    return (
        <>
            <Card align="center" justify="center" size="sm">
                <CardHeader>
                    <Link as={ RouterLink } to={ `/pets/${ pet.id }` }>
                        <Heading size={ 'sm' }>{ pet.name }</Heading>
                    </Link>
                </CardHeader>
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