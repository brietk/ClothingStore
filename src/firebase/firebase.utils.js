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

//put what we get from firebase - the userAuth into the async.
//if there is no userAuth, return. Else - save to database.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //if the user does not exist, than put him in the db
    if(!snapShot.exists) {
        //first, what data to store?
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        //now we do an async request to db to store the data. So
        //we use try catch block

        try {
            await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;