import { useLocation } from "react-router-dom";

export default function ShelterPage() {
    const location = useLocation();
    const shelterId = location.state?.id;

    return (
        <>
            <div>{ shelterId }</div>
        </>
    )
}