export default function Table ({tableStyle}){
    return (

        <table border='1' style={tableStyle}>
            <thead  style={{border: "1", color: "red" }} >
               
                    <td>First name </td>
                    <td>Last Name</td>
                    <td>Email </td>
                
            </thead>

            <tbody>
            <tr>
                    <td>Odose</td>
                    <td>Esese </td>
                    <td>great@example.com </td>
                </tr>
            </tbody>
        </table>
    )
}