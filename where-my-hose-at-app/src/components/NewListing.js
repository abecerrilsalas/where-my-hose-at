import "./NewListing.css";
import React from "react";
import { useState } from "react";

import { db, useAuth } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function NewListing () {
    const currentUser = useAuth();
    const collectionRef = collection(db, "listings");

    const [formFields, setFormFields] = useState ({
        title: '',
        description: ''
    });

    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    };

    const onDescriptionChange = (event) => {
        setFormFields({
            ...formFields,
            description: event.target.value
        })
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        
        const payload = { title: formFields.title, description: formFields.description, host_id: currentUser.uid };

        const docRef = await addDoc(collectionRef, payload);
        console.log("The ID for new listing is: " + docRef.id);
    };
    
    return (
        <div>
            <h2>List your driveway:</h2>
            <h3>(Become everyone's favorite neighbor!)</h3>
            <div className="form__content">
                <form onSubmit={onFormSubmit}>
                    <div>
                        <label htmlFor="title"></label>
                        <input
                            className="title__input"
                            placeholder="TITLE: A driveway with everything you need…"
                            value={formFields.title}
                            onChange={onTitleChange} />
                    </div>
                    <div>
                        <label htmlFor="description"></label>
                        <textarea 
                            className="desc__input"
                            placeholder="DESCRIPTION: Trusty hose, well-loved tools, a flat surface. Come on over and cross something off your to-do list!"
                            value={formFields.description}
                            onChange={onDescriptionChange} />
                    </div>
                    <input
                        type="submit"
                        value="Submit" />
                </form>
            </div>
        </div>
    );
};