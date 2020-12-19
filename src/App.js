import React from "react";
// import "./App.css";
import SignUp from "./components/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    }

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(userInfo) {
    this.setState({
      userInfo
    });
  }
  
  render() {
    return (
      <div className="App">
        <SignUp
          handleSignUp={this.handleSignUp}
        />
      </div>
    );
  }
}

export default App;
