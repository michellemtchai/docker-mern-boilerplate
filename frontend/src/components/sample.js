import React from 'react';

class Sample extends React.Component {
	render() {
        let data = this.props.state.data;
		return Object.keys(data).length > 0 ?
			<div>
                <p>
                    This is a sample component.
                    It lists the items from route <b>GET &#47;items</b>
                </p>
                <ul>
                    {data.items.map((item, i)=>
                        <li key={'item-'+i}>{item.name}</li>
                    )}
                </ul>
			</div> :
            '';
  	}
}

export default Sample;
