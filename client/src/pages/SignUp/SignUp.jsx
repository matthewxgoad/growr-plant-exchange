import NavBar from '../../components/NavBar';
import SignUpForm from '../../components/SignUpForm';
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <NavBar page="signup"/>
      <SignUpForm/>
    </>
  );
}
