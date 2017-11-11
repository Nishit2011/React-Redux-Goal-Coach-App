
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDd4dWG_mXIIKfrz_Uc8402PUxqsqcE-d8",
    authDomain: "goal-coach-bd29d.firebaseapp.com",
    databaseURL: "https://goal-coach-bd29d.firebaseio.com",
    projectId: "goal-coach-bd29d",
    storageBucket: "",
    messagingSenderId: "31217790443"
  };

//the method is added to initialize firebaseApp
  export const firebaseApp = firebase.initializeApp(config)

//referencing goal database of firebase
  export const goalRef = firebase.database().ref('goals');
   export const completeGoalRef = firebase.database().ref('completeGoals')