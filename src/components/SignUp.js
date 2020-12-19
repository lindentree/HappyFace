import React from "react";
import signUpImage from "../artificial-agave-silk-plant-nearly-natural-522425_500x.jpg";
import s from './SignUp.module.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSignUp(this.state);
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div className={s.Container}>
        <div className={s.Header}>Sign Up</div>
        <div className={s.Content}>
          <div className={s.Image}>
            <img src={signUpImage} alt="Silk Agave plant in a pot."/>
          </div>
          <div className={s.Form}>
            <div className={s.FormGroup}>
              <label htmlFor="username">Username</label>
              <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username"></input>
            </div>
            <div className={s.FormGroup}>
              <label htmlFor="email">Email</label>
              <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email"></input>
            </div>
            <div className={s.FormGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password"></input>
            </div>
          </div>
        </div>
        <div className={s.Footer}>
          <button className={s.Button} type="button" onClick={this.handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    )
  }
}

export default SignUp;