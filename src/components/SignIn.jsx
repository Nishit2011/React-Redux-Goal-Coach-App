import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  signIn(e) {
    console.log("this.state", this.state);
    e.preventDefault();
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className='signin-container'>
        <h2>Sign In</h2>
        <div className='signin-form-group'>
          <div className='form-control'>
            <small>{this.state.error.message}</small>
            <input
              className='email'
              type='text'
              placeholder='Enter email'
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className='form-control'>
            <input
              className='password'
              type='password'
              placeholder='Enter password'
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          <div className='form-control'>
            <button
              className='signin-button'
              type='button'
              onClick={e => this.signIn(e)}
            >
              Sign In
            </button>
          </div>
        </div>

        <div className='signuplink'>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
