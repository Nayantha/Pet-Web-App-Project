import {Pet as PetInterface} from "../models/Pet.ts";
import {Card, CardBody, CardFooter, CardHeader, Text} from '@chakra-ui/react'

export default function PetComponent({pet}: { pet: PetInterface }) {
    return (
        <>
            <Card>
                <CardHeader>
                    {pet.baseColor}
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>

        </>
    )
}