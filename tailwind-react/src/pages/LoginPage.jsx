import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="p-5">
        <LoginForm />
      </div>
    </>
  );
}
