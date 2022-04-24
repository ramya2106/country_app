import React, { Component } from 'react';
import Result from './Result';
class Dropdown extends Component {
   
   constructor(){
       super();
       this.state = {
           data: [],
       };
   } //end constructor

    componentDidMount() {
        fetch('https://restcountries.com/v2/all')
        .then(results => results.json())
        .then(data => this.setState({ data: data }))
    }
    
   
    render() {
  
    function handleChange(event) {
        const value = event.target.value;
        alert(value);
      }
    return (
    <div>
        <div className="container">
            <form>
            <h2>Name Selection:</h2>
            <div>
                <select className="custom-select" id="username" onChange={handleChange}>
                    { this.state.data.map(item =>(
                    <option key={item.name}>{item.name}</option>
                    )) }
                </select>
                </div>
            
            </form>
            
        </div> 
    </div>
        );
      }
}

export default Dropdown