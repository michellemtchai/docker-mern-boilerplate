import React from 'react';
import { Switch, Route } from 'react-router-dom';

class NotFound extends React.Component {
    render() {
        return <p>Invalid Page: {this.props.location.pathname}</p>;
    }
}

export default NotFound;
