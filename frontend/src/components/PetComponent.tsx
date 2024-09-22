import Pet from "models/Pet.ts";
import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, Spacer, Spinner, Text } from '@chakra-ui/react';
import useAdopt from "hooks/useAdopt.ts";
import AdoptedData from "models/AdoptedData.ts";
import useUnAdopt from "hooks/useUnAdopt.ts";
import UnAdoptAlertDialog from "./UnAdoptAlertDialog.tsx";
import AlertDialog, { AlertStatus } from "./AlertDialog.tsx";
import { useState } from "react";
import AuthenticatedUser from "../lib/userStore.ts";

export default function PetComponent({ adoptedData }: { adoptedData: AdoptedData }) {

    const pet: Pet = adoptedData.pet;
    const userID = AuthenticatedUser.id;

    const [adoptedPetData, setAdoptedPetData] = useState(adoptedData);

    const {
        mutateAsync: adopt,
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

    async function triggerAdopt() {
        setAdoptedPetData(await adopt({ pet: pet.id, user: AuthenticatedUser?.id } as AdoptionData) as AdoptedData);
        pet.adopted = true;
    }

    async function triggerUnAdopt() {
        await unAdopt(adoptedPetData);
        pet.adopted = false;
    }

    if (isAdoptionProcessLoading || isUnAdoptionProcessLoading) return <Spinner/>;

    return (
        <>
            { isAdoptionError &&
                <AlertDialog alertStatus={ AlertStatus.ERROR } alertTitle="Error in adoption process!"
                             alertMessage={ // @ts-ignore
                                 adoptionError.message ?? "Error in adoption process!" }/>
            }
            { isUnAdoptionError &&
                <AlertDialog alertStatus={ AlertStatus.ERROR } alertTitle="Error in un adoption process!"
                             alertMessage={ // @ts-ignore
                                 unAdoptionError.message ?? "Error in un adoption process!" }/>
            }
            <Card direction="column" alignItems="center" align="center" justify="center" size="sm">
                <CardHeader>
                    <Heading size={ 'lg' } className="pet-name">{ pet.name }</Heading>
                </CardHeader>
                <CardBody>
                    <Flex justify="center" align="center" gap={ 10 }>
                        <Image
                            src={ pet.avatar }
                            alt={ `${ pet.name }` }
                            boxSize="300px"
                            objectFit="cover"
                            className="pet-avatar"
                        />
                        <Flex align="center" direction="column" gap="5">
                            <Box w="250px">
                                <Flex>
                                    <Text>intake reason : </Text>
                                    <Spacer/>
                                    <Text className="pet-intake-reason">{ pet.intakeReason }</Text>
                                </Flex>
                                <Flex>
                                    <Text>breed : </Text>
                                    <Spacer/>
                                    <Text className="pet-breed">{ pet.breed }</Text>
                                </Flex>
                                <Flex>
                                    <Text>species : </Text>
                                    <Spacer/>
                                    <Text className="pet-species">{ pet.species }</Text>
                                </Flex>
                                <Flex>
                                    <Text>gender : </Text>
                                    <Spacer/>
                                    <Text className="pet-gender">{ pet.gender }</Text>
                                </Flex>
                                <Flex>
                                    <Text>base color : </Text>
                                    <Spacer/>
                                    <Text className="pet-base-color">{ pet.baseColor }</Text>
                                </Flex>
                            </Box>
                            <Flex align="center" direction="row" gap="5">
                                { pet.adopted ? (
                                    <Button isDisabled>Adopted</Button>
                                ) : (
                                    <Button onClick={ triggerAdopt }>Adopt</Button>
                                ) }
                                { (!adoptedPetData.verified && pet.adopted &&
                                        // @ts-ignore : adoptedPetData.user can be a string when its not exanpaded
                                        adoptedPetData.user == userID) &&
                                    <UnAdoptAlertDialog unAdoptFunction={ triggerUnAdopt }/> }
                            </Flex>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>

        </>
    )
}