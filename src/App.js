import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      items:[],
      currentItem:{
        text:"",
        key:""
      }

    }
  }
  handleInput = (event) =>{
    this.setState({
      currentItem:{
        text:event.target.value,
        key:Date.now()
      }
    })
  }
  handleClick = () =>{
   
    if(this.state.currentItem.text !== ""){
     
      let newItem = this.state.currentItem
      const total = this.state.items
     this.setState({
       items:[...total,newItem],
       currentItem:{
         text:"",
         key:""
       }
     })
  }
}
  deleteItem = (key) =>{
    const remind = this.state.items.filter(item => key !== item.key)
    this.setState({
      items:remind
    })
  }
  render(){
    return(
      <div className="App">
        <input type="text" 
        placeholder="Enter text"
        value={this.state.currentItem.text}
        onChange={this.handleInput}/> 
        <button onClick={this.handleClick}>Enter</button>
        <List items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}
export default App;
