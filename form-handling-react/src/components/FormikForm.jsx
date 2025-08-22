import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Register with Formik</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        })}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              alert("User registered successfully!");
              resetForm();
            }
          } catch (err) {
            console.error("Error registering user:", err);
          }
        }}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <Field
                name="username"
                type="text"
                placeholder="Username"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
