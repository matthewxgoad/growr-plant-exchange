import NavBar from '../../components/NavBar';
import "./SignUp.css"
import SignUpForm from '../../components/SignUpForm';

export default function SignUp(props) {
  return (
    <>
      <NavBar page="signup"/>
      <SignUpForm/>
    </>
  );
}
