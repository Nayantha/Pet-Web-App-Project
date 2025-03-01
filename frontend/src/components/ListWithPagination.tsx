import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Pagination from './Pagination';
import "assets/List.css";

interface ListWithPaginationProps<T> {
    title: string;
    data: {
        items: T[];
        listMetadata: ListMetadata;
    };
    renderItem: (item: T) => React.ReactNode;
}

const ListWithPagination = <T extends { id: string | number }>({
                                                                   title,
                                                                   data,
                                                                   renderItem
                                                               }: ListWithPaginationProps<T>) => {
    return (
        <div className="list">
            <h1 className="title">{ title }</h1>
            <SimpleGrid columns={ { base: 1, md: 2, lg: 3 } } spacing={ 5 } className="list">
                { data?.items.map((item) => (
                    <React.Fragment key={ item.id }>
                        { renderItem(item) }
                    </React.Fragment>
                )) }
            </SimpleGrid>

            <Pagination
                metadata={ data.listMetadata }
            />
        </div>
    );
};

export default ListWithPagination;
