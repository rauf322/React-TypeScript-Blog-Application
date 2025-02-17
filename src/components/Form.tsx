import Button from "./UI/Button/Button";
import MyInput from "./UI/Input/MyInput";
import React, { useState } from "react";

interface FormProps {
    create: (post: { id:number; title: string; description: string }) => void;
    posts: { id:number; title: string; description: string }[];
}

const Form = ({create, posts}:FormProps) => {

    const [formData, setFormData] = useState({title: "", description: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value, // Dynamically update the field based on the name
        });
    };

    const addNewPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.title || formData.description) {
            const newPost = {
                ...formData, id: posts.length+1 
            }
            create(newPost); 
            setFormData({ title: "", description: "" }); // Reset form
            } else {
            alert("Please fill all the fields");
            }
    };

    return (
        <form action="" onSubmit={addNewPost}>
            <MyInput name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>
            <MyInput name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
            <Button type="submit">Add Post</Button>
        </form>
    );
};

export default Form;

