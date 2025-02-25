import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import React, { useState } from "react";
import { CreatePost } from "../Interfaces";



const Form = ({create, posts}:CreatePost) => {

    const [formData, setFormData] = useState({title: "", body: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value, // Dynamically update the field based on the name
        });
    };

    const addNewPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.title && formData.body) {
            const newPost = {
                ...formData, id: posts.length+1 
            }
            create(newPost); 
            setFormData({ title: "", body: "" }); // Reset form
        } else {
            alert("Please fill all the fields");
            }
    };

    return (
        <form action="" onSubmit={addNewPost}>
            <MyInput name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>
            <MyInput name="body" placeholder="Description" value={formData.body} onChange={handleChange}/>
            <MyButton type="submit">Add Post</MyButton>
        </form>
    );
};

export default Form;

