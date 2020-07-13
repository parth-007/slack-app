import firebase from 'firebase/app';
import 'firebase/auth'; // For user authentication
import 'firebase/database'; // For database purposes
import 'firebase/storage'; // For storing media files

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: '<API-key>',
  authDomain: '<Auth-domain>',
  databaseURL: '<Database-URL>',
  projectId: '<Project-ID>',
  storageBucket: '<storage-bucket-id>',
  messagingSenderId: '<Sender-ID>',
  appId: '<App-ID>',
  measurementId: '<m-ID>'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
