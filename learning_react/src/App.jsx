// import {useState} from "react"
import { Routes, Route } from "react-router-dom";


//pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import User from "./pages/users/user.jsx";
import Alluser from "./pages/users/Alluser.jsx";
import Contact from "./pages/Contact.jsx"

//components
// import Main from './components/main/Main.jsx';
// import Header from './components/header/Header.jsx';
// import Footer from './components/footer/Footer.jsx';
// import Form from "./components/form/Form.jsx";
// import Table from "./components/table/Table.jsx";

// const tableStyle = {marginBottom: "100px", border:"1px"}

// const studentsInfo = [
//     {
//         firstName: "Odose",
//         lastName: "Esese",
//         email: "great@gmail.com",
//         password: "1234",
//         confirmPassword: "1234"
//     },
//     {
//         firstName: "Ezekiel",
//         lastName: "Ayebidun",
//         email: "ayebidunezekiel@gmail.com",
//         password: "123456",
//         confirmPassword: "123456"
//     }

// ]

export default function App() {

    // const [students, setStudents] = useState(studentsInfo);

    // function addStudent(newStudent){
    //     setStudents([...students, newStudent])
    // }   


    return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Alluser />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
    );
}



            // <Header />
            // <div style={{marginTop: "100px", marginBottom: "100px"}}>
            // <Table tableStyle={tableStyle} students={students} />
            // <Form addStudent={addStudent} />
            // </div>
            // <Footer />
