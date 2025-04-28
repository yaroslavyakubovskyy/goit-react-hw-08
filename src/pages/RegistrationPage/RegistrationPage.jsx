import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <>
      <title className={s.title}> Register your account</title>
      <RegistrationForm />
    </>
  );
}
