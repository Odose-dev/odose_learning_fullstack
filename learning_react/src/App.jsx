import {useState} from "react"

//components
import Main from './components/main/Main.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Form from "./components/form/Form.jsx";
import Table from "./components/table/Table.jsx";

const tableStyle = {marginBottom: "100px", border:"1px"}

const studentsInfo = [
    {
        firstName: "Odose",
        lastName: "Esese",
        email: "great@gmail.com",
        password: "1234",
        confirmPassword: "1234"
    },
    {
        firstName: "Ezekiel",
        lastName: "Ayebidun",
        email: "ayebidunezekiel@gmail.com",
        password: "123456",
        confirmPassword: "123456"
    }

]

export default function App() {

    const [students, setStudents] = useState(studentsInfo);

    function addStudent(newStudent){
        setStudents([...students, newStudent])
    }   


    return (
        <>
            <Header />
            <div style={{marginTop: "100px", marginBottom: "100px"}}>
            <Table tableStyle={tableStyle} students={students} />
            <Form addStudent={addStudent} />
            </div>
            <Footer />
        </>
    );
}


