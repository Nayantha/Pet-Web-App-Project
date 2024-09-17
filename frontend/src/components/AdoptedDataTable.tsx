import { Avatar, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import Pagination from "./Pagination.tsx";
import ExpandedAdoptedData from "../models/ExpandedAdoptedData.ts";
import UnAdoptAlertDialog from "./UnAdoptAlertDialog.tsx";

const TableHeadings = () => {
    return (
        <>
            <Tr>
                <Th>ID</Th>
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
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Adopted Pets</TableCaption>
                    <Thead>
                        <TableHeadings/>
                    </Thead>
                    <Tbody>
                        { data.expandedAdoptedDataList.map((item) => (
                            <Tr key={ item.id }>
                                <Td>{ item.id }</Td>
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
                                    <UnAdoptAlertDialog unAdoptFunction={ () => {
                                    } }/>
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