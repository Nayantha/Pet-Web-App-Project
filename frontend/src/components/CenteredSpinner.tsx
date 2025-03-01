import { Center, Spinner, Text } from "@chakra-ui/react"

interface CenteredSpinnerProps {
    size?: string;
    text?: string;
}

export default function CenteredSpinner({ size = "lg", text = "" }: CenteredSpinnerProps) {
    return (
        <Center h="100vh">
            <Spinner size={ size }/>
            { text && <Text mt={ 2 }>Loading { text }...</Text> }
        </Center>
    )
}