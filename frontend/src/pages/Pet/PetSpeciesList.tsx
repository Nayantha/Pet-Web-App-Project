import { useParams } from "react-router-dom";

export default function PetSpeciesList() {
    const { species } = useParams();

    const petSpecies = String(species);

    return (
        <div>
            <div className="title">Pet Species: { petSpecies }</div>
        </div>
    )
}