import React, { Component } from "react";
import { completeGoalRef } from "../firebase";
import { connect } from "react-redux";
import { setCompleted } from "../actions";

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on("value", snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      });
      this.props.setCompleted(completeGoals);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }
  render() {
    return (
      <ul class=''>
        {this.props.completeGoals.map((completeGoal, index) => {
          const { title, email } = completeGoal;
          return (
            <li className='complete-list' key={index}>
              <div className='complete-list-title'>{title}</div>
              <div className='complete-list-email'>
                <strong>By:&nbsp;&nbsp;</strong> {email}
              </div>
            </li>
          );
        })}
        <button
          className='complete-list-button'
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  };
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
