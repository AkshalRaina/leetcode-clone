import { useState } from 'react'
import './App.css'
import { Landing } from './components/Landing'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWYujVA4O6sczk3FmNohuT5xC2nDtdlDE",
  authDomain: "leetcode-clone-64df6.firebaseapp.com",
  projectId: "leetcode-clone-64df6",
  storageBucket: "leetcode-clone-64df6.firebasestorage.app",
  messagingSenderId: "337390154646",
  appId: "1:337390154646:web:bfc5b11b16349769bea3b7",
  measurementId: "G-ZWN3X7EWQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Signin/>
      </div>
      <div className="card">
        
      </div>
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
      </p>
    </>
  )
}

export default App
