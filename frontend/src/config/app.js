import React from 'react';
import { withRouter } from 'react-router';
import Template from '../components/template/template';

import { Switch, Route } from 'react-router-dom';
import { routes } from '../config';
import { fetchAll } from './api';

class App extends React.Component {
    route = (key, i) => {
        let Component = withRouter(
            this.props.routes[key].component
        );
        let pageTemplate = () => (
            <Template {...this.props}>
                <Component {...this.props} />
            </Template>
        );
        return (
            <Route
                key={'route-' + i}
                exact={
                    this.props.routes[key].exact ? true : false
                }
                path={key}
                component={pageTemplate}
            />
        );
    };

    componentDidMount() {
        console.log('data', routes(this.props));
        this.props.setRoutes(routes(this.props));
        fetchAll(this.props);
    }

    render() {
        let keys = Object.keys(this.props.routes);
        return keys.length > 0 ? (
            <div className="content">
                <Switch>
                    {keys.map((key, i) => this.route(key, i))}
                </Switch>
            </div>
        ) : (
            ''
        );
    }
}

export default withRouter(App);
