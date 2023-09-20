import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCAbbnZFeUPrAHErzWHrpo4dcwmqPhYOrA",
    authDomain: "app-eab65.firebaseapp.com",
    projectId: "app-eab65",
    storageBucket: "app-eab65.appspot.com",
    messagingSenderId: "974671666054",
    appId: "1:974671666054:web:d4333bba7a1f5849e06a07",
    databaseURL: "https://app-eab65-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
