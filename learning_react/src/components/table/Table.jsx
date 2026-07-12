export default function Table ({tableStyle, students}){
    return (

        <table border='1' style={tableStyle}>
            <thead  style={{border: "1", color: "red" }} >
               
                    <td>First name </td>
                    <td>Last Name</td>
                    <td>Email </td>
                    <td>Password </td>
                    <td>Confirm Password </td>
                    <td>Action</td>
                
            </thead>

            <tbody>

            {students.map((student, index) => {
                return (
                    <tr key={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.password}</td>
                        <td>{student.confirmPassword}</td>
                        <td> <button>❌</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}