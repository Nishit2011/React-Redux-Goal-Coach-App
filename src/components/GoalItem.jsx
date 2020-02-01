import React, { Component } from "react";
import { completeGoalRef, goalRef } from "../firebase";
import { connect } from "react-redux";
class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    console.log("serverkey", serverKey);

    //reference the goal reference and remove a goal fro it by passing the server key
    goalRef.child(serverKey).remove();
    completeGoalRef.push({ email, title });
  }
  render() {
    const { email, title } = this.props.goal;

    return (
      <li className='goal-item-container'>
        <div className='goal-item-title'>{title}</div>
        <div className='goal-item-email'>{email}</div>
        <button
          className='goal-item-button'
          onClick={() => this.completeGoal()}
        >
          Completed
        </button>
      </li>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps, null)(GoalItem);
