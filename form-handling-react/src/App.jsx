import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Controlled Components version */}
      <RegistrationForm />

      {/* Formik version */}
      <FormikForm />
    </div>
  );
}

export default App;
