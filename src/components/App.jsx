import React,{Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
class App extends  Component{
signOut(){
	firebaseApp.auth().signOut();
}
	render(){
		return(
		<div style ={{margin:'5%'}}>
		<h3>Goal Coach</h3>
		<AddGoal />
		<hr />
		<h4>Goals</h4>
		<GoalList />

		<hr/>
		<h4>Complete Goal List</h4>
		<CompleteGoalList />
		<hr/>
		<button 
		className="btn btn-danger"
		onClick={()=>this.signOut()}>
		Sign Out
		</button>
		</div>

		)
	}
}

//this gets the state of the application
function mapStateToProps(state){
//console.log('state ', state);
return {

}
}

export default connect(mapStateToProps, null)(App);

