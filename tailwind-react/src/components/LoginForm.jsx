export default function LoginForm() {
  return (
    <div className="flex p-5 w-full justify-center items-center">
      <form action="" className="border border-1 border-gray-300 p-3 w-3xl">
        <h2 className="text-center w-full font-bold text-2xl">Login Form</h2>
        <div className="my-5">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="block border border-1 border-gray-400 w-full p-5"
          />
        </div>

        <div className="my-5">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="block border border-1 border-gray-400 w-full p-5"
          />
        </div>

        <button
          type="Submit"
          className="bg-blue-500 p-5 my-5 w-full rounded-sm"
        >
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
}
