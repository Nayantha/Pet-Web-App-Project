import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Pagination({ metadata }: { metadata: ListMetadata }) {
    const pageNumbers = Array.from({ length: metadata.totalPages }, (_, index) => index + 1);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const buildPaginationUrl = (page: number) => {
        const newParams = new URLSearchParams(searchParams);
        page === 1 ? newParams.delete('p') : newParams.set('p', page.toString());
        return { pathname: location.pathname, search: newParams.toString() };
    };

    return (
        <>
            <Box m={ 10 }>
                <Flex gap={ 2 } justify="center">

                    { metadata.page > 1 && (
                        <Link to={ buildPaginationUrl(metadata.page - 1) }>
                            <IconButton aria-label="Previous Page" icon={ <ArrowBackIcon/> } mr={ 2 }/>
                        </Link>
                    ) }

                    { pageNumbers.map((no) => {
                            const isCurrentPage = no === metadata.page;
                            return (
                                <Link key={ no }
                                      to={ buildPaginationUrl(no) }
                                      className={ isCurrentPage ? "disabled" : "" }><Button>{ no }</Button></Link>
                            )
                        }
                    ) }

                    { metadata.page < metadata.totalPages && (
                        <Link to={ buildPaginationUrl(metadata.page + 1) }>
                            <IconButton aria-label="Next Page" icon={ <ArrowForwardIcon/> } ml={ 2 }/>
                        </Link>
                    ) }

                </Flex></Box>
        </>
    );
}

