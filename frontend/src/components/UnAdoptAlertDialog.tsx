import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { FC, useRef } from "react";

interface UnAdoptAlertDialogProps {
    unAdoptFunction: () => void;  // Define the function prop type
}

const UnAdoptAlertDialog: FC<UnAdoptAlertDialogProps> = ({ unAdoptFunction }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    // @ts-ignore
    return (
        <>
            <Button onClick={ onOpen }>
                Un Adopt Pet
            </Button>
            <AlertDialog
                isOpen={ isOpen }
                leastDestructiveRef={ cancelRef }
                onClose={ onClose }>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Un Adopt Pet
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button colorScheme='red' onClick={ unAdoptFunction } ml={ 3 }>
                                Un Adopt Pet
                            </Button>
                            <Button onClick={ onClose }>
                                Cancel
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default UnAdoptAlertDialog;