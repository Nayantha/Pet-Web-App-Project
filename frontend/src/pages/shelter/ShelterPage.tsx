import { useLocation } from "react-router-dom";
import useShelter from "hooks/useShelter.ts";
import ShelterComponent from "components/ShelterComponent.tsx";
import CenteredSpinner from "components/CenteredSpinner.tsx";

export default function ShelterPage() {
    const location = useLocation();
    const shelterId = location.state?.id;

    const { data, isError, isLoading, error } = useShelter(shelterId);

    if (isLoading) return <CenteredSpinner/>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }


    return (
        <>
            <ShelterComponent shelter={ data ?? {} as Shelter }/>
        </>
    )
}