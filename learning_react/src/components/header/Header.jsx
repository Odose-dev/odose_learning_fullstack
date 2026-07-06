import {useState} from 'react';
import './header.css';

//components
import Login from '../Login.jsx';
import Logout from '../Logout.jsx';

export default function Header() {

    const [IsLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <header className='header'>
            <h1> My React Header</h1>
            {IsLoggedIn ? <Logout /> : <Login />}
        </header>
    );
}
