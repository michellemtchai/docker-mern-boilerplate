import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sample from '../components/sample';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Sample {...this.props} />
            </div>
        );
    }
}

export default Home;
