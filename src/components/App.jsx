import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseApp } from "../firebase";
import AddGoal from "./AddGoal";
import GoalList from "./GoalList";
import CompleteGoalList from "./CompleteGoalList";

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div>
        <div className='sign-out-container'>
          <button className='sign-out' onClick={() => this.signOut()}>
            Sign Out
          </button>
        </div>

        <div>
          <div className='add-goal-container'>
            <h3>Add your tasks</h3>
            <AddGoal />
          </div>
          <div className='goal-list-container'>
            <h3>List of tasks</h3>
            <GoalList />
          </div>

          <div className='completed-goal-list-container'>
            <h3>Complete Goal List</h3>
            <CompleteGoalList />
          </div>
        </div>
      </div>
    );
  }
}

//this gets the state of the application
function mapStateToProps(state) {
  //console.log('state ', state);
  return {};
}

export default connect(mapStateToProps, null)(App);
