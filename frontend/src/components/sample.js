import React from 'react';

class Sample extends React.Component {
	render() {
        let items = this.props.sample.data.items;
		return items ?
			<div>
                <p>
                    This is a sample component.
                    It lists the items from route <b>GET &#47;items</b>
                </p>
                <ul>
                    {items.map((item, i)=>
                        <li key={'item-'+i}>{item.name}</li>
                    )}
                </ul>
			</div> :
            '';
  	}
}

export default Sample;
