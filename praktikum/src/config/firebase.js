import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBin5s4TX9AJoJVST60WrXRJBGsArtj40I",
    authDomain: "to-do-list-new-e40cc.firebaseapp.com",
    projectId: "to-do-list-new-e40cc",
    storageBucket: "to-do-list-new-e40cc.firebasestorage.app",
    messagingSenderId: "409980463635",
    appId: "1:409980463635:web:a5f57ded9af2d44423ede6",
    measurementId: "G-TQ656T0L3N"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const db = getFirestore(app);