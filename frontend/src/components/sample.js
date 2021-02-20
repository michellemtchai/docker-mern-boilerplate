import React from 'react';
import { fetch } from '../config/fetch';

class Sample extends React.Component {
    deleteItem = (item)=>{
        return ()=>fetch.removeItemById(this.props, item._id);
    }
	render() {
        let data = this.props.state.data;
		return (Object.keys(data).length > 0 ?
			<div>
                <p>
                    This is a sample component. It lists the items from route <b>GET &#47;items</b>
                </p>
                <ul>
                    {data.items.map((item, i)=>
                        <li key={'item-'+i}>
                            {item.name}
                            <button onClick={this.deleteItem(item)}>
                                Delete
                            </button>
                        </li>
                    )}
                </ul>
			</div> :
            null
        );
  	}
}

export default Sample;
