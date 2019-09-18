import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import '../../styles/index.css';
import 'semantic-ui-css/semantic.min.css'

const Layout = ({children, title}) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
        </Head>
        
        <Container fluid>
            {children}
        </Container>
    </React.Fragment>
)

Layout.props = {
    children: PropTypes.node,
    title: PropTypes.string
}

export default Layout;