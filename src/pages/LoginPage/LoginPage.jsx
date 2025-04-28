import { LoginForm } from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <title className={s.title}>Login</title>
      <LoginForm />
    </>
  );
}
