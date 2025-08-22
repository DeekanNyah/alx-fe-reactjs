import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";  // ✅ must match lowercase f

function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
      <div className="mt-10">
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
