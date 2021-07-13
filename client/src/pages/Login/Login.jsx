import LoginForm from '../../components/LoginForm';
import NavBar from '../../components/NavBar';
import "./Login.css"

export default function Login(props) {
  return (
    <>
      <NavBar page="login"/>
      <LoginForm/>
    </>
  );
}
