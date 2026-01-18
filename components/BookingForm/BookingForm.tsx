import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import css from "./BookingForm.module.css";
import { enGB } from "date-fns/locale";

interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: {
    startDate: Date | null;
    endDate: Date | null;
  };
  comment: string;
}

export default function BookingFormFormik() {
  const initialValues: BookingFormValues = {
    name: "",
    email: "",
    bookingDate: {
      startDate: null,
      endDate: null,
    },
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    bookingDate: Yup.object({
      startDate: Yup.date().nullable().required("Start date is required"),
    }),
  });

  const handleSubmit = (values: BookingFormValues, { resetForm }: FormikHelpers<BookingFormValues>) => {
    console.log(values.bookingDate.startDate, values.bookingDate.endDate);
    toast.success("Booking successful! We'll contact you soon.");
    resetForm();
  };

  return (
    <div className={css.bookingFormWrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
          <Form className={css.form} noValidate>
            <div className={css.inputWrapper}>
              <Field
                name="name"
                type="text"
                placeholder="Name*"
                className={`${css.input} ${errors.name && touched.name ? css.errorInput : ""}`}
              />
              <ErrorMessage name="name" component="div" className={css.errorMessage} />
            </div>

            <div className={css.inputWrapper}>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={`${css.input} ${errors.email && touched.email ? css.errorInput : ""}`}
              />
              <ErrorMessage name="email" component="div" className={css.errorMessage} />
            </div>

            <div className={css.datePickerWrapper}>
              <DatePicker
                selectsRange
                startDate={values.bookingDate.startDate}
                endDate={values.bookingDate.endDate}
                minDate={new Date()}
                placeholderText="Booking date*"
                dateFormat="dd/MM/yyyy"
                locale={enGB}
                calendarStartDay={1}
                formatWeekDay={name => name.slice(0, 3)}
                className={`${css.datePicker} ${
                  errors.bookingDate?.startDate && touched.bookingDate?.startDate ? css.errorInput : ""
                }`}
                onChange={(dates: [Date | null, Date | null]) => {
                  const [start, end] = dates;
                  setFieldValue("bookingDate.startDate", start);
                  setFieldValue("bookingDate.endDate", end);
                }}
                onBlur={() => setFieldTouched("bookingDate.startDate", true, true)}
              />

              {touched.bookingDate?.startDate && errors.bookingDate?.startDate && (
                <div className={css.errorMessage}>{errors.bookingDate.startDate}</div>
              )}
            </div>

            <div className={css.inputWrapper}>
              <Field as="textarea" name="comment" placeholder="Comment" className={css.textarea} />
            </div>

            <button type="submit" className={css.submitButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
