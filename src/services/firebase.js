import * as firebase from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from  'firebase/database';

const config = {
  apiKey: "AIzaSyAoFn-ix8eTFTlbTfJX6zLmDbA_deQ9Li0",
  authDomain: "question-and-answer-df3c7.firebaseapp.com",
  projectId: "question-and-answer-df3c7",
  storageBucket: "question-and-answer-df3c7.appspot.com",
  messagingSenderId: "816410372904",
  appId: "1:816410372904:web:d5a93c84da39fa2d1f7e1d",
  databaseURL: "https://question-and-answer-df3c7-default-rtdb.firebaseio.com/" 
 };

firebase.initializeApp(config);
export const auth = getAuth();
export const db = getDatabase();
