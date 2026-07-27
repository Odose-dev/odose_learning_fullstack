import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { EMAIL, PASSWORD } from "../lib/data";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      if (!email) throw new Error("Invalid Email");
      if (!password) throw new Error("Invalid password");

      //fetch and validate user from db
      if (email != EMAIL) throw new Error("Invalid details");
      if (password != PASSWORD) throw new Error("Invalid details");

      // auth user info
      const loginDate = {
        email: email,
      };

      //store to localstorage
      localStorage.setItem("user", JSON.stringify(loginDate));

      setLoading(false);
      navigate("/");

      //
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  return (
    <div className="flex p-5 w-full juSstify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border border-1 border-gray-300 p-3 w-3xl"
      >
        <h2 className="text-center w-full font-bold text-2xl">Login Form</h2>

        <p className="text-sm text-red-500">{error}</p>
        <div className="my-5">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            name=""
            value={email}
            id="email"
            className="block border border-1 border-gray-400 w-full p-5"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            id="pass"
            className="block border border-1 border-gray-400 w-full p-5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link className="text-xs font-bold float-end" to="/">
          Forget Password{" "}
        </Link>

        <button
          type="Submit"
          className="bg-gray-500 p-5 my-5 w-full rounded-sm hover:bg-blue-200"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
