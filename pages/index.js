import React from 'react'
import HeaderForm from '../components/headerForm';
import Layout from '../components/layout';
import { Container, Header, Segment, Grid, Loader, Dimmer } from 'semantic-ui-react';
import DataGraph from '../components/dataGraph';
import DataGrid from '../components/dataGrid';

const testData = [
  {firstName: 'test', lastName: 'no', id: 1, participation: 25},
  {firstName: 'sup', lastName: 'yoo', id: 2, participation: 75}
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: testData,
      errors: {},
      initialized: false,
      message: null
    }
  }

  componentDidMount() {
    fetch('/api/participation')
      .then((response) => response.json())
      .then((participations) => {
        this.setState({data: participations, initialized: true})
      })
  }

  formSubmission(data) {
    const {firstName, lastName, participation} = data;
    const errors = {};

    if (!firstName) {
      errors.firstName = true;
    }

    if (lastName) {
      errors.lastName = true;
    }

    if (participation) {
      errors.participation = true;
    }

    if (Object.keys(errors).length > 0) {
      this.setState({errors, message: "All fields are required"});

      setTimeout(() => {
        this.setState({message: null});
      }, 5 * 60 * 1000);

      return;
    }

    // TODO: Add error handling
    return fetch('/api/participation', {method: 'POST'})
      .then(res => res.json())
      .then((response) => {
        this.setState({data: this.state.data.concat([response])});
      })
  }

  render() {
    const {data, initialized} = this.state
    return (
      <Layout>
        <HeaderForm />

        <Container fluid>
          <Segment textAlign="center" basic>
            <Dimmer active={!initialized}>
              <Loader content="Loading" /> 
            </Dimmer>
            <Header style={{margin: '2rem'}} as="h1">DATA</Header>
            Totally Randomly Generated Lorem Ipsum Placeholder Text.

            <Grid columns={4}>
              <Grid.Row />
              <Grid.Column />
              <Grid.Column><DataGrid data={data} /></Grid.Column>
              <Grid.Column><DataGraph data={data} /></Grid.Column>

              <Grid.Column />
            </Grid>
          </Segment>
        </Container>
      </Layout>
    )
  }
}
export default Home
