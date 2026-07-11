export default function Form({ name, handleUpdate }) {

  
  return (
    <form>


      
    <label htmlFor="firstName"> Firstname </label> 
    <input type="text" id="firstName"/>  

    <label htmlFor="lastName"> LastName </label>
    <input type="text" id="lastName"/>  

    <label htmlFor="email"> Email </label>
    <input type="email" id="email"/>  

    <label htmlFor="password"> Password </label>
    <input type="password" id="password"/>  

    <label htmlFor="confirmPassword"> Confirm Password </label>
    <input type="password" id="confirmPassword"/>  

    </form>
  );
}