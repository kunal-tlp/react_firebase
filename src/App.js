import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import './App.css';
import SignupPage from './pages/Signup';
import Signin from './pages/Signin';
import { useEffect, useState } from 'react';

const auth = getAuth(app);

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Yes, you are logged in
                setUser(user);
            } else {
                // User logged out
                console.log("You are logged out");
                setUser(null);
            }
        });
    }, []);
    // const signupUser = () => {
    //     createUserWithEmailAndPassword(
    //         auth,
    //         'kunalgiri.dev@gmail.com',
    //         'Kunal@123'
    //     ).then((value => console.log(value)));
    // };
    if (user === null) {
        return (
            <div className="App">
                <SignupPage />
                <Signin />
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Hello {user.email}</h1>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    );
}

export default App;
