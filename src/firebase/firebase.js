import app from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import 'firebase/auth'
import 'firebase/firestore'





class Firebase {
    constructor() {
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore()

    }

    async register(name, email, password) {
       const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
       return await newUser.user.updateProfile({
        displayName:name
    })
    }

   async login(email, password) {
         return await this.auth.signInWithEmailAndPassword(email, password)
    }

    async logout() {
        await this.auth.signOut()
    }
}


const firebase = new Firebase()
export default firebase