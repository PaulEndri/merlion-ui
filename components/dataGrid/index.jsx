import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const DataGrid = ({data, deleteRow}) => (
    <Table basic celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Participation</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {data.map((datum, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{datum.id}</Table.Cell>
                    <Table.Cell>{datum.firstName}</Table.Cell>
                    <Table.Cell>{datum.lastName}</Table.Cell>
                    <Table.Cell>{datum.participation}</Table.Cell>
                    <Table.Cell>Remove (WIP)</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
)

DataGrid.propTypes = {
    data: PropTypes.array.isRequired,
    deleteRow: PropTypes.func
}

export default DataGrid;