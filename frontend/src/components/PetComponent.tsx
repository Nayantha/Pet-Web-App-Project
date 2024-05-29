import { Pet as PetInterface } from "../models/Pet.ts";
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CloseButton,
    Flex,
    Spacer,
    Spinner,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import useAdopt from "../hooks/useAdopt.ts";
import pb from "../lib/pocketbase.ts";

export default function PetComponent({ pet }: { pet: PetInterface }) {

    const { mutate: adopt, isLoading, isError, error } = useAdopt();
    const { onClose } = useDisclosure({ defaultIsOpen: false });

    function triggerAdopt() {
        adopt({ petId: pet.id, userId: pb.authStore.model?.id } as AdoptionData);
    }

    if (isLoading) return <Spinner/>;

    return (
        <>
            { isError &&
                <Alert status='error'>
                    <AlertIcon/>
                    <Box>
                        <AlertTitle>Error in adoption process!</AlertTitle>
                        <AlertDescription>{ // @ts-ignore
                            error.message }
                        </AlertDescription>
                    </Box>
                    <CloseButton
                        alignSelf='flex-start'
                        position='relative'
                        right={ -1 }
                        top={ -1 }
                        onClick={ onClose }
                    />
                </Alert>
            }
            <Card direction={ { base: 'column', sm: 'row' } }>
                <CardHeader>
                    { pet.name }
                </CardHeader>
                <CardBody>
                    <Flex justify="center" align="stretch" direction="row">
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
                            { !pet.adopted && <Button onClick={ triggerAdopt }>Adopt</Button> }
                        </Box>
                    </Flex>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>

        </>
    )
}