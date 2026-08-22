import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
} from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore
} from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
    getStorage
} from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";


const firebaseConfig = {

    apiKey: "AIzaSyAJ-St2kLgCvjnjzikQNIekMDL-lNTXf5U",

    authDomain:
        "nanhi-pathsala.firebaseapp.com",

    projectId:
        "nanhi-pathsala",

    storageBucket:
        "nanhi-pathsala.firebasestorage.app",

    messagingSenderId:
        "238796166220",

    appId:
        "1:238796166220:web:c7fe0eff4978940aadd0e9",

    measurementId:
        "G-PVMEPD8MB3"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


export {
    app,
    auth,
    db,
    storage,
    onAuthStateChanged
};