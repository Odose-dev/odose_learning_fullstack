export default function Form({ name, handleUpdate }) {

  
  return (
    <form>
      <label htmlFor="name">Update Name:</label>

      <input
        type="text"
        id="name"
        value={name}
        onChange={handleUpdate}
      />
    </form>
  );
}