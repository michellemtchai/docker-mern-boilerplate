import React from 'react';
import NavBar from '../components/navBar';
import Error from '../components/error';
import FetchIndicator from '../components/fetchIndicator';

import { Switch, Route } from 'react-router-dom';
import { routes } from '../config/routes';
import { fetchConfig, fetchData, baseUrl } from '../shared/network';

class App extends React.Component {
    componentDidMount(){
        let url = baseUrl+'/items';
        let formatData = (data)=>{
            return {
                items: data
            }
        }
        fetchData(url, fetchConfig(this.props, 'setData', {
            formatData: formatData,
        }));
    }
	render() {
		return(
            <div className='content'>
                <NavBar {...this.props}/>
                <Error {...this.props}/>
                <FetchIndicator {...this.props}/>
                <Switch>
                    {Object.keys(routes).map((key,i)=>
                        <Route key={'route-'+i}
                            exact={routes[key].exact? true: false}
                            path={key}
                            component={()=>
                                (new routes[key].component(this.props)).render()
                            }
                        />
                    )}
                </Switch>
            </div>
        );
  	}
}

export default App;
