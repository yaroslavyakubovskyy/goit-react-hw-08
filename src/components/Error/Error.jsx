import s from './Error.module.css';

export default function Error({ children }) {
  return (
    <p className={s.text}>
      <b>{children}</b>
    </p>
  );
}
