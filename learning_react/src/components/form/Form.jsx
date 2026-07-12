import { useState } from "react";


export default function Form({ addStudent }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 


  function handleSubmit(e){
    e.preventDefault();

    try{

      if(!firstName || !lastName || !email || !password || !confirmPassword) throw new Error("All fields are required");

      if(password !== confirmPassword) throw new Error("Password does not match");


      const newStudent={
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      };


      //add student to the table
      addStudent(newStudent);


    }catch(error){

      console.log(error.message);
    }
  }

 
  return (
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "300px", margin: "auto"}}>

      <label htmlFor="firstName"> Firstname </label> 
      <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName"/>  

      <label htmlFor="lastName"> LastName </label>
      <input onChange={(e) => setLastName(e.target.value)}  type="text" id="lastName"/>  

      <label htmlFor="email"> Email </label>
      <input onChange={(e) => setEmail(e.target.value)} type="email" id="email"/>  

      <label htmlFor="password"> Password </label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" id="password"/>  

      <label htmlFor="confirmPassword"> Confirm Password </label>
      <input onChange={(e) => setConfirmPassword(e.target.value)}  type="password" id="confirmPassword"/> 


      <button type="submit" style={{marginTop: "20px"}}> Submit </button>   

    </form>
  );
}