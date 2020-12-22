import logo from './logo.svg';
import './App.css';
// import App2 from './App2'
import React from "react"

class App extends React.Component{
  url = "http://www.google.com"
  constructor(){
    super()
      this.state ={
        userName: ""
      }
    }
    onClick=(event)=>{
      console.log("save button is clicke", event);
      window.open(this.url, "_blank");
    }
    onNameChange=(event)=>{
        console.log("Value is ",event.target.value);
        this.setState({userName: event.target.value})
    }
  render(){
      return (
        <div>
        <div><h1>Hi {this.state.userName} from Capgemini</h1>
        <img src = {logo} onClick={this.onClick} alt="Logo" width="50px"/>
        </div>
        <div className="text-box">
          <input onChange={this.onNameChange} />
        </div>
        </div>
      );
}
}
export default App;
