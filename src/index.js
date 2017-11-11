import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter,Route, Router} from 'react-router-dom';
import {firebaseApp} from './firebase';
import reducer from './reducers';
import {logUser} from './actions';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import history from './history';


const store = createStore(reducer);
//authenticate firebaseApp
firebaseApp.auth().onAuthStateChanged(user => {

	if(user){
		
		////console.log('user is signed in', user);
		const {email} = user
		store.dispatch(logUser(email))
		history.push('/app');
	}else{
		console.log('user is suppose to sign in or is signed out');
		history.push('/signin')
	}
})

ReactDOM.render(
	<Provider store={store}>
<Router history={history}>
<div>
<Route path='/app' component ={App} />
<Route path ='/signIn' component = {SignIn} />
<Route path ='/signUp' component = {SignUp} />	
</div>	
</Router>
</Provider>

,document.getElementById('root')
	);