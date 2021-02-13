import React from 'react';

class Error extends React.Component {
	render() {
		return this.props.app.error?
			<p className='error'>
                {this.props.app.error}
			</p>:
            '';
  	}
}

export default Error;
