import React from 'react';
import axios from 'axios';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {
    axios.get('/pong')
    .then(res => {
      alert(res);
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.name}</h1>;
      </div>
    )

    
  }



}