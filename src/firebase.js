import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
const config = {
    apiKey: "AIzaSyBDYRo2zdaH4CtY0jNqQxmDTCLMOuv5ZZg",
    authDomain: "teste-2dd86.firebaseapp.com",
    databaseURL: "https://teste-2dd86.firebaseio.com",
    projectId: "teste-2dd86",
    storageBucket: "teste-2dd86.appspot.com",
    messagingSenderId: "21109863080"
};

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    async register(nome,email,senha){
        await this.auth.createUserWithEmailAndPassword(email,senha);
        return this.auth.currentUser.updateProfile({
            displayName:nome
        })
    }
}
export default new Firebase()
