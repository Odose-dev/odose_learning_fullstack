import {useState} from "react";

export default function About() {

    const [name, setName] = useState('Ezekiel');

    function handleUpdate(e) {

        e.preventDefault();
        setName(e.target.value);
    }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our React application.</p>
      <p>Name: {name}</p>


        <br />
          <br />

      <form>
        <label htmlFor="name"> Update Name:</label>

        <input
          type="text"
          id="name"
          defaultValue={name}
          onChange={handleUpdate}
        />

        {/* <button onclick={handleUpdate} type="submit">Update</button>         */}

      </form>
    </div>
  );
}