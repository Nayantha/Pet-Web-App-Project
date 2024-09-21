import {
    Avatar,
    Spinner,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import Pagination from "./Pagination.tsx";
import ExpandedAdoptedData from "../models/ExpandedAdoptedData.ts";
import UnAdoptAlertDialog from "./UnAdoptAlertDialog.tsx";
import useUnAdopt from "../hooks/useUnAdopt.ts";
import AlertDialog, { AlertStatus } from "./AlertDialog.tsx";
import AdoptedData from "../models/AdoptedData.ts";

const TableHeadings = () => {
    return (
        <>
            <Tr>
                <Th>Name</Th>
                <Th>Avatar</Th>
                <Th>Adopted At</Th>
                <Th>Adoption Approval</Th>
                <Th>Adoption Remove / Un Adopt</Th>
            </Tr>
        </>
    )
}

export default function ({ data }: {
    data: { expandedAdoptedDataList: ExpandedAdoptedData[], listMetadata: ListMetadata }
}) {

    const {
        mutate: unAdopt,
        isLoading,
        isError,
        error
    } = useUnAdopt();

    if (isLoading) return <Spinner/>;

    async function triggerUnAdopt(expandedAdoptedData: ExpandedAdoptedData) {
        data.expandedAdoptedDataList = data.expandedAdoptedDataList.filter((item) => item !== expandedAdoptedData);
        await unAdopt({ id: expandedAdoptedData.id, user: expandedAdoptedData.user } as AdoptedData);
    }

    return (
        <>
            { isError &&
                <AlertDialog alertStatus={ AlertStatus.ERROR } alertTitle="Error in un adoption process!"
                             alertMessage={ // @ts-ignore
                                 error.message ?? "Error in un adoption process!" }/>
            }

            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Adopted Pets</TableCaption>
                    <Thead>
                        <TableHeadings/>
                    </Thead>
                    <Tbody>
                        { data.expandedAdoptedDataList.map((item) => (
                            <Tr key={ item.id }>
                                <Td>{ item.pet.name }</Td>
                                <Td>
                                    <Avatar src={ item.pet.avatar } name={ item.pet.name }/>
                                </Td>
                                <Td>
                                    { new Date(item.created).toLocaleDateString() }
                                </Td>
                                <Td>
                                    { item.verified ? "Approved" : "Pending" }
                                </Td>
                                <Td>
                                    <UnAdoptAlertDialog unAdoptFunction={ () => triggerUnAdopt(item) }/>
                                </Td>
                            </Tr>
                        )) }
                    </Tbody>
                    <Tfoot>
                        <TableHeadings/>
                    </Tfoot>
                </Table>
            </TableContainer>
            <Pagination
                metadata={ data.listMetadata }
            />
        </>
    )
}