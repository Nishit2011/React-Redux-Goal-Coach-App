import {combineReducers} from 'redux';
import user from './reducer_users';
import goals from './reducer_goals';
import completeGoals  from './reducer_completeGoals';

export default combineReducers({
	user,
	goals,
	completeGoals
})