import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/style.css';

const BookForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    date: Yup.date().required('Date is required'),
    comments: Yup.string(),
  });

  toastConfig({
    position: 'bottom-left',
    className: css.toast,
  });

  return (
    <div className={css.fromWrapper}>
      <Formik
        initialValues={{ name: '', email: '', date: '', comments: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          toast('✔ You successfully booked a camper!');
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <div className={css.inputWrapper}>
              <h2 className={css.formTitle}>Book your campervan now</h2>
              <p className={css.formText}>
                Stay connected! We are always ready to help you.
              </p>
              <div>
                <Field
                  className={css.formInput}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <ErrorMessage
                  className={css.errorMessage}
                  name="name"
                  component="div"
                />
              </div>
              <div>
                <Field
                  className={css.formInput}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <ErrorMessage
                  className={css.errorMessage}
                  name="email"
                  component="div"
                />
              </div>
              <div>
                <DatePicker
                  className={css.formInput}
                  selected={values.date}
                  onChange={date => setFieldValue('date', date)}
                  dateFormat="yyyy/MM/dd"
                  placeholderText="Select a date"
                />
                <ErrorMessage
                  className={css.errorMessage}
                  name="date"
                  component="div"
                />
              </div>
              <div>
                <Field
                  className={css.fromTextarea}
                  as="textarea"
                  name="comments"
                  placeholder="Comment"
                />
                <ErrorMessage
                  className={css.errorMessage}
                  name="comments"
                  component="div"
                />
              </div>
              <button
                className={css.fromSubmitBtn}
                type="submit"
                disabled={isSubmitting}
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
