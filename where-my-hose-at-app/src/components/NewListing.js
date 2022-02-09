import "./NewListing.css";
import React from "react";
import { useState } from "react";

import { db, useAuth } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function NewListing () {
    const currentUser = useAuth();
    const collectionRef = collection(db, "listings");
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState('https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg');

    const [formFields, setFormFields] = useState ({
        title: '',
        description: '',
        image: ''
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

    const onFileChange = async (event) => {
        if(event.target.files[0]){
            setPhoto(event.target.files[0])
        }

        const file = event.target.files[0]
        const storage = getStorage()
        const fileRef = ref(storage, 'listings/listing_' + currentUser.uid)
        await uploadBytes(fileRef, file)
    
        setPhotoURL(await getDownloadURL(fileRef))
        console.log('Uploaded file!')
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        
        const payload = { title: formFields.title, description: formFields.description, host_id: currentUser.uid, image: photoURL };

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
                    <div>
                        <input type="file" onChange={onFileChange} />
                    </div>
                    <input
                        disabled={!photo}
                        type="submit"
                        value="Submit" />
                </form>
            </div>
        </div>
    );
};