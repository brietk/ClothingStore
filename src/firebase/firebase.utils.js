import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAKF50wkZa9z7kGJoRdc3CJND4bLCVzc2A",
        authDomain: "crown-db-bdff1.firebaseapp.com",
        projectId: "crown-db-bdff1",
        storageBucket: "crown-db-bdff1.appspot.com",
        messagingSenderId: "70346755105",
        appId: "1:70346755105:web:ba36835cac67a9177ae760",
        measurementId: "G-9M9ZQ78TDY"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;