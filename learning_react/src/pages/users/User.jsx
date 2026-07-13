import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function User() {
    const urlData = useParams()
    const [user, setUser] = useState({})

    const { id } = urlData;



    async function getUser(id) {

        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!res) throw new Error("no user found!");

            // const data = await res.json();
            // if (!data) throw new Error("error conver to json!");
            
            setUser(res.data)

        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        
        getUser(id);

    }, [id]);

    return(
    <div>
        <h1>User Info</h1>
        <h1>username: {user.username}</h1>
        <h2>name: {user.name}</h2>
        <h3>email: {user.email}</h3>
    </div>
    )
}