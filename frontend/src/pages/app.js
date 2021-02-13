import React from 'react';
import Error from '../components/error';
import Sample from '../components/sample';

class App extends React.Component {
	render() {
        return (
            <div className='content'>
                <Error {...this.props}/>
                <Sample {...this.props}/>
            </div>
        );
  	}
}

export default App;
