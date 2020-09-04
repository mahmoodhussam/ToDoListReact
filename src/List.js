import React from 'react' 
import './List.css'
import trash from "./trash.png"
function List(props){
    const {items,deleteItem} = props
    const listItems = items.map((item)=>{
    return<div className="item" key={item.key}>
        <p id="item-p">{item.text}
        <img src={trash} alt="trash" id="trach" onClick={() => deleteItem(item.key)}/>
        </p>
        
        </div>
    })
   
    return <div>{listItems}</div>
}
export default List 