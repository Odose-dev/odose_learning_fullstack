import './main.css';


//components
import Card from '../Card.jsx';
import Login from '../Login.jsx';

import {useState, useEffect } from 'react';


let names = ["John", "Jane", "Bob", "Alice", "Charlie", "David" ];

export default function Main() {
    const [count, setCount] = useState(0);


    // useEffect(() => console.log("fired"));


    function handleIncrease() {
        setCount(count + 1);
    }   


    function handleDecrease() {
        if (count < 1) {
            setCount(0);
        }
        else {
            
            setCount(count - 1);
        }
    }

    return (
        <main className='main'>


           { names.map((name, index) => {
            return (
                <Card key={index} >
                    <h1>{name}</h1> <Login />
                </Card>
            );
           })}



            <button className="btn btn-primary next" onClick={handleIncrease}>
                Increase
            </button>
            <button className="btn btn-secondary prev" onClick={handleDecrease}>
                Decrease
            </button>

        </main>
    );
}