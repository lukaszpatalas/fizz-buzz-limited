import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

const initializeApp = () => {
    firebase.initializeApp({
        apiKey: "my_api_key",
        authDomain: "my_auth_domain",
        databaseURL: "my_database_url",
        projectId: "my_project_id",
        storageBucket: "my_storage_bucket",
        messagingSenderId: "my_messaging_sender_id",
        appId: "my_app_id",
    });
};

const getFirestore = () => firestore;

const App = () => {
    const [text, setText] = useState("");

    const handleClick = () => {
        getFirestore()
            .collection("texts")
            .add({
                text,
            })
            .then(() => {
                setText("");
                console.log("Text saved successfully");
            })
            .catch((error) => {
                console.error("Error saving text: ", error);
            });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button onClick={handleClick}>Save</button>
            </div>
        </div>
    );
};

export default App;