import Pet from "../models/Pet.ts";
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
    Image,
    Spacer,
    Spinner,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import useAdopt from "../hooks/useAdopt.ts";
import pb from "../lib/pocketbase.ts";
import AdoptedData from "../models/AdoptedData.ts";
import useUnAdopt from "../hooks/useUnAdopt.ts";

export default function PetComponent({ adoptedData }: { adoptedData: AdoptedData }) {

    const pet: Pet = adoptedData.pet;

    const {
        mutate: adopt,
        isLoading: isAdoptionProcessLoading,
        isError: isAdoptionError,
        error: adoptionError
    } = useAdopt();

    const {
        mutate: unAdopt,
        isLoading: isUnAdoptionProcessLoading,
        isError: isUnAdoptionError,
        error: unAdoptionError
    } = useUnAdopt();

    const { onClose } = useDisclosure({ defaultIsOpen: false });

    async function triggerAdopt() {
        await adopt({ pet: pet.id, user: pb.authStore.model?.id } as AdoptionData);
        pet.adopted = true;
    }

    async function triggerUnAdopt() {
        await unAdopt({ pet: pet.id, user: pb.authStore.model?.id });
        pet.adopted = false
    }

    if (isAdoptionProcessLoading || isUnAdoptionProcessLoading) return <Spinner/>;

    return (
        <>
            { isAdoptionError || isUnAdoptionError &&
                <Alert status='error'>
                    <AlertIcon/>
                    <Box>
                        <AlertTitle>Error in adoption process!</AlertTitle>
                        <AlertDescription>{ // @ts-ignore
                            adoptionError.message }
                            { // @ts-ignore
                                unAdoptionError.message }
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
            <Card direction="column" alignItems="center">
                <CardHeader>
                    { pet.name }
                </CardHeader>
                <CardBody>
                    <Image
                        src={ pb.files.getUrl(pet, pet.avatar) }
                        alt="Description of the image"
                        boxSize="200px"
                        objectFit="cover"
                    />
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
                        </Box>
                    </Flex>
                </CardBody>
                <CardFooter style={ { display: 'flex', gap: 50 } }>
                    { pet.adopted ? (
                        <Button onClick={ triggerAdopt } disabled={ true }>Adopted</Button>
                    ) : (
                        <Button onClick={ triggerAdopt }>Adopt</Button>
                    ) }
                    { (!adoptedData.verified && pet.adopted) &&
                        <Button onClick={ triggerUnAdopt }>Un Adopt</Button> }
                </CardFooter>
            </Card>

        </>
    )
}