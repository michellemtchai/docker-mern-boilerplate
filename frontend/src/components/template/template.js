import './index.css';
import React from 'react';
import NavBar from './navBar';
import Error from './error';
import FetchIndicator from './fetchIndicator';

import { withRouter } from 'react-router';
import { routeKey } from '../../config';
import { totalFetches } from '../../config/api';

class Template extends React.Component {
    render() {
        let location = routeKey(
            this.props,
            this.props.location.pathname
        );
        let route = this.props.routes[location];
        let data = this.props.state.data;
        return (
            <div>
                <NavBar {...this.props} />
                <Error {...this.props} />
                <FetchIndicator {...this.props} />
                <h1>{route.title}</h1>
                {Object.keys(data).length >= totalFetches
                    ? this.props.children
                    : ''}
            </div>
        );
    }
}

export default withRouter(Template);
