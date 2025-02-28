export default interface Pet {
    id: string;
    avatar: string[];
    breed: string;
    baseColor: string;
    species: string;
    gender: string;
    name: string;
    adopted: boolean;
    age: number;
    shelter_id: string;
    shelter: object;
}