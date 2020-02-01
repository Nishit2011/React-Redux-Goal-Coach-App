import React, { Component } from "react";
import { connect } from "react-redux";
import { goalRef } from "../firebase";
class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  addGoal() {
    const { email } = this.props.user;
    const { title } = this.state;
    goalRef.push({ email, title });
  }
  render() {
    return (
      <div className='addgoal-form'>
        <input
          type='text'
          placeholder='Write your task'
          className='form-control'
          onChange={event => this.setState({ title: event.target.value })}
        />
        <button
          className='btn btn-success'
          type='button'
          onClick={() => this.addGoal()}
        >
          Click to add
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;

  return {
    user
  };
}
export default connect(mapStateToProps, null)(AddGoal);
