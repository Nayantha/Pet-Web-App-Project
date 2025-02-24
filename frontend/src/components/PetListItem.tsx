import Pet from "../models/Pet.ts";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image,
    Link,
    Text
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function PetListItem({pet}: { pet: Pet }) {
    return (
        <>
            <Card align="center" justify="center" size="sm" className="pet-list-item"
                  maxW={ { base: "100%", md: "300px", lg: "400px", xx: "500px" } }>
                <CardHeader>
                    <Heading size={ 'sm' }>{ pet.name }</Heading>
                </CardHeader>
                <CardBody>
                    <Image
                        src={ pet.avatar }
                        alt={ pet.name }
                        borderRadius='lg'
                    />
                </CardBody>
                <CardFooter>
                    <Flex justify="center" align="center" direction="row" gap="3">
                        <Box>
                            <Text>{ pet.species }</Text>
                            <Text>{ pet.breed }</Text>
                        </Box>
                        <Link as={ RouterLink } to={ `/pets/${ pet.id }` }>
                            <Button>View Pet</Button>
                        </Link>
                    </Flex>
                </CardFooter>
            </Card>
        </>
    )
}