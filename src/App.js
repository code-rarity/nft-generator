// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import logo from './logo.svg';
import './App.css';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxy3HT2wf5l_6jYig3jWdWo-PetgSoM8w",
  authDomain: "nft-generator-8b49d.firebaseapp.com",
  projectId: "nft-generator-8b49d",
  storageBucket: "nft-generator-8b49d.appspot.com",
  messagingSenderId: "910203829001",
  appId: "1:910203829001:web:0461483c155a165e8871d8",
  measurementId: "G-WGPM4EPFHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
