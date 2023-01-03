import { initializeApp } from "firebase/app" ;  
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 

const firebaseConfig = { 
  apiKey : "AIzaSyAT_sznwzunieatQIa-g5oInZEZgFGSwiE" , 
  authDomain : "chat-a20f6.firebaseapp.com" , 
  databaseURL : "https://chat-a20f6-default-rtdb.firebaseio.com" , 
  projectId : "cat-a20f6" , 
  storageBucket : "chat-a20f6.appspot.com" , 
  messagingSenderId : "561110898973" , 
  appId : "1:561110898973:web:2d9fce999e69a1f33829f4" 
};

 const app =  initializeApp ( firebaseConfig );

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider() 
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        window.location.href = "http://localhost:8800/home"

        console.log(result);
        
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        
    }).catch(err => console.log(err))
}


