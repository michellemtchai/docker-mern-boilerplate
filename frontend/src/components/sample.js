import React from 'react';
import { fetch } from '../config/fetch';

class Sample extends React.Component {
    input = React.createRef();
    edit = React.createRef();
    state = {
        index: -1
    }

    editItem = (index)=>{
        this.setState({
            index: index,
        })
    }
    cancelEdit = ()=>{
        this.setState({
            index: -1,
        })
    }
    createItem = ()=>{
        fetch.createItem(this.props, {
            name: this.input.current.value,
        })
    }
    updateItem = (item)=>{
        fetch.updateItem(this.props, item._id, {
            name: this.edit.current.value,
        });
        this.setState({
            index: -1
        });
    }
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
                            {this.state.index != i?
                                Item(this, item, i):
                                ItemEditor(this, item)
                            }
                        </li>
                    )}
                </ul>
                {ItemCreator(this)}
			</div> :
            null
        );
  	}
}


const Item = (self, item, i)=>(
    <span>
        {item.name}
        <button onClick={()=>self.editItem(i)}>
            Edit Item
        </button>
        {DeleteButton(self, item)}
    </span>
);

const ItemCreator = (self)=>(
    <div>
        <input ref={self.input} type='text'/>
        <button onClick={self.createItem}>
            Create New Item
        </button>
    </div>
);

const ItemEditor = (self, item)=>(
    <span>
        <input ref={self.edit}
            defaultValue={item.name}
            type='text'/>
        <button onClick={()=>self.updateItem(item)}>
            Save Changes
        </button>
        <button onClick={self.cancelEdit}>
            Cancel
        </button>
    </span>
)

const DeleteButton = (self, item)=>(
    <button onClick={self.deleteItem(item)}>
        Delete
    </button>
)

export default Sample;
