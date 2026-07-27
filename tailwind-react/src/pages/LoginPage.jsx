import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";

const storage = localStorage.getItem("user");

export default function LoginPage() {
  const [islogin, setIslogin] = useState(!!storage);
  const navigate = useNavigate();

  console.log(islogin);

  useEffect(() => {
    if (islogin) navigate("/");
  });

  return (
    <>
      <Header />
      <div className="p-5">
        <LoginForm />
      </div>
    </>
  );
}
