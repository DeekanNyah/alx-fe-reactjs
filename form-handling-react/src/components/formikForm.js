import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const formikForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Register (Formik)</h2>
      
      {/* ✅ Formik integration */}
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block font-medium">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default formikForm;
