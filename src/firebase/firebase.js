import app from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import 'firebase/auth'



  // Initialize Firebase
  app.initializeApp(firebaseConfig);
  app.analytics();