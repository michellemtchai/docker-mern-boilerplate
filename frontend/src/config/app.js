import React from 'react';
import NavBar from '../components/navBar';
import Error from '../components/error';
import FetchIndicator from '../components/fetchIndicator';

import { Switch, Route } from 'react-router-dom';
import { routes } from '../config/routes';
import { getAllItems } from './fetch';

class App extends React.Component {
    route = (key, i)=>{
        let Component = routes[key].component;
        return (<Route key={'route-'+i}
            exact={routes[key].exact? true: false}
            path={key}
            component={()=><Component {...this.props}/>}
        />);
    }
    componentDidMount(){
        getAllItems(this.props);
    }
	render() {
		return(
            <div className='content'>
                <NavBar {...this.props}/>
                <Error {...this.props}/>
                <FetchIndicator {...this.props}/>
                <Switch>
                    {Object.keys(routes).map((key,i)=>
                        this.route(key,i)
                    )}
                </Switch>
            </div>
        );
  	}
}

export default App;
