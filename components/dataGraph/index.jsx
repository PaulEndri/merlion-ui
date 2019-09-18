import React from 'react';
import {Grid, List} from 'semantic-ui-react';
import DonutChart from "react-svg-donut-chart";
import PropTypes from 'prop-types';

const SEMANTIC_COLORS = [
    'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'
];

const DataGraph = ({data}) => {
    return (
        <Grid columns={2}>
            <Grid.Column>
                <DonutChart
                    spacing={0}
                    data={data.map((datum, index) => ({
                        value: datum.participation,
                        stroke: SEMANTIC_COLORS[(index + 1) % SEMANTIC_COLORS.length]
                    }))}
                />
            </Grid.Column>
            <Grid.Column>
                <List>
                    {data.map((datum, index) => (
                        <List.Item key={index}>
                            <List.Icon name="stop" color={SEMANTIC_COLORS[(index + 1) % SEMANTIC_COLORS.length]}></List.Icon>
                            <List.Content>{datum.firstName} {datum.lastName}</List.Content>
                        </List.Item>
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
} 

DataGraph.propTypes = {
    data: PropTypes.array.isRequired
}

export default DataGraph;