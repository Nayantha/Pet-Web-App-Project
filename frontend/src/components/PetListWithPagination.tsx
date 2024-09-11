import React from 'react';
import { Link, SimpleGrid } from '@chakra-ui/react';
import Pagination from './Pagination';
import PetListItem from './PetListItem';
import Pet from "../models/Pet.ts";
import "assets/PetList.css";

interface PetListWithPaginationProps {
    title: string;
    data: {
        petList: Pet[];
        listMetadata: ListMetadata;
    };
}

const PetListWithPagination: React.FC<PetListWithPaginationProps> = ({ title, data }) => {
    return (
        <div className="pet-list">
            <h1 className="title">{ title }</h1>
            <SimpleGrid columns={ 2 } spacing={ 10 }>
                { data?.petList.map((pet) => (
                    // @ts-ignore
                    <Link to={ `/pets/${ pet.id }` } key={ pet.id }>
                        <PetListItem key={ pet.id } pet={ pet }/>
                    </Link>
                )) }
            </SimpleGrid>

            <Pagination
                metadata={ data?.listMetadata ?? {
                    totalItems: 0,
                    totalPages: 0,
                    perPage: 0,
                    page: 0,
                    baseURL: "/pets"
                } }
            />
        </div>
    );
};

export default PetListWithPagination;
