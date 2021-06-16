import React, {Component} from 'react';
import SCP from "./SCP.js";

class App extends Component
{
    render()
    {
      return(
               //display SCP components
        <SCP Bruce={this.state.Bruce} />

      );
    }

    state = {Bruce: []}

    componentDidMount()
    {
    // make request to rest api
    fetch('https://assignment-a76d.restdb.io/rest/bruce',
    {
      method: 'GET',
      headers: {
      "cache-control": "no-cache",
      "x-apikey": "60c9fce7e2c96c46a24635da",
      "content-type": "application/json"
    }
    })
    // parse output to JSON
    .then (result => result.json())
    //set the json data into our state
    .then((data) => {this.setState({Bruce: data})}) 
    //log any errors
    .catch(console.log);
  }
}

export default App;

