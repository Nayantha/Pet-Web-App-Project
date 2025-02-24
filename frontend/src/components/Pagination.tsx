import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Pagination({ metadata }: { metadata: ListMetadata }) {
    const pageNumbers = Array.from({ length: metadata.totalPages }, (_, index) => index + 1);
    return (
        <>
            <Box m={ 10 }>
                <Flex gap={ 2 } justify="center">

                    { metadata.page > 1 && (
                        <Link to={ `${ metadata.baseURL }/?p=${ metadata.page - 1 }` }>
                            <IconButton aria-label="Previous Page" icon={ <ArrowBackIcon/> } mr={ 2 }/>
                        </Link>
                    ) }

                    { pageNumbers.map((no) => {
                            const isFirstPage = no === 1;
                            const isCurrentPage = no === metadata.page;
                            return (
                                <Link key={ no }
                                      to={ isFirstPage ? `${ metadata.baseURL }` : `${ metadata.baseURL }/?p=${ no }` }
                                      className={ isCurrentPage ? "disabled" : "" }><Button>{ no }</Button></Link>
                            )
                        }
                    ) }

                    { metadata.page < metadata.totalPages && (
                        <Link to={ `/pets/?p=${ metadata.page + 1 }` }>
                            <IconButton aria-label="Next Page" icon={ <ArrowForwardIcon/> } ml={ 2 }/>
                        </Link>
                    ) }

                </Flex></Box>
        </>
    );
}

