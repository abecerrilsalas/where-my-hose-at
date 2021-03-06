import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Landing from "./components/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import Form from "./components/common/Form";
import Home from "./components/Home";
import NewListing from "./components/NewListing";
import UpdateProfile from "./components/UpdateProfile";
import Driveways from "./components/Driveways"
import Presentation from "./components/Presentation"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    }
  };

  return (
    <div className="app">
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <Form
              title="Log in"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/driveways" element={<Driveways />} />
        <Route path="/newlisting" element={<NewListing />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Landing />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
