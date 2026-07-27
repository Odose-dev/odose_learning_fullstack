import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Link to="/login"> Login </Link>
    </div>
  );
}
