import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, useDisclosure } from "@chakra-ui/react";

export enum AlertStatus {
    INFO = "info",
    WARNING = "warning",
    SUCCESS = "success",
    ERROR = "error",
    LOADING = "loading"
}

interface AlertDialog {
    alertStatus: AlertStatus;
    alertTitle: string;
    alertMessage: string;
}

export default function ({ alertStatus, alertTitle, alertMessage }: AlertDialog) {
    const { onClose } = useDisclosure({ defaultIsOpen: false });
    return (
        <Alert status={ alertStatus }>
            <AlertIcon/>
            <Box>
                <AlertTitle>{ alertTitle }</AlertTitle>
                <AlertDescription>
                    { alertMessage }
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
    )
}