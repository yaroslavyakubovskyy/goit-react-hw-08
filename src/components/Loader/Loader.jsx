import { DotLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <DotLoader size={50} color="#4d5ae5" />
    </div>
  );
};

export default Loader;
