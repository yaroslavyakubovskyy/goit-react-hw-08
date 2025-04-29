import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short Name')
      .max(50, 'Too long Name')
      .required('This field is required'),
    number: Yup.string()
      .matches(/^\d{2}-\d{3}-\d{3}$/, 'The number format must be xx-xxx-xxx')
      .required('This field is required'),
  });

  const handleSubmit = (value, action) => {
    dispatch(addContact(value));
    action.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div>
            <label>
              Name
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="p" />
            </label>
          </div>
          <div>
            <label>
              Number
              <Field type="tel" name="number" />
              <ErrorMessage name="number" component="p" />
            </label>
          </div>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
