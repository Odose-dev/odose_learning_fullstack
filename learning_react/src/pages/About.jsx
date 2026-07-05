import {useState} from "react";
import "../components/css/about.css";
import Form from "../components/form/Form.jsx"

export default function About() {

    const [name, setName] = useState('Ezekiel');

    function handleUpdate(e) {

        e.preventDefault();
        setName(e.target.value);
    }

    return (
        <div className="about">
            <h1>About Page</h1>
            <p>This is the about page of our React application.</p>
            <p>Name: {name}</p>

            <br />
            <br />

            <Form name={name} handleUpdate={handleUpdate} />

        </div>
    );
}