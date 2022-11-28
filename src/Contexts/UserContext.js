import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import toast from "react-hot-toast";



export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const creteUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    return signOut(auth);
  };



  const googleProvider = new GoogleAuthProvider();
  const saveUserMongo = (name, email, role) => {
    const user = { name, email, role }
    fetch("https://assainment-12.vercel.app/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        const currentUser = { email: email }
        // jwt token
        fetch("https://assainment-12.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then(res => res.json())
          .then(data => {
            //set jwt to local storage 
            localStorage.setItem("token", data.token)
          })
        toast.success("Logged in successfully")
      })
  }

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user.displayName)
        const name = result.user.displayName;
        const email = result.user.email;
        const role = "buyer"
        saveUserMongo(name, email, role);
      })
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);


  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };


  // const dbUserName = mongoUser?.name;
  // const dbUserEmail = mongoUser?.email;
  // const dbUserRole = mongoUser?.role;


  const authInfo = {
    user,
    creteUser,
    LogInUser,
    LogOut,
    updateUser,
    googleLogin,
    // dbUserRole,
    // dbUserEmail,
    // dbUserName,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
