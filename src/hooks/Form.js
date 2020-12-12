import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext({});

function FormProvider({ children }) {
  const [data, setData] = useState({});

  function setEmail({ email }) {
    setData({ ...data, email });
  }

  function setDocument({ document }) {
    setData({ ...data, document });
  }

  function setBirth({ birth }) {
    setData({ ...data, birth });
  }

  function setPass({ password }) {
    setData({ ...data, password });
  }

  // function validateFields() {}

  return (
    <FormContext.Provider
      value={{ ...data, setEmail, setDocument, setBirth, setPass }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);

  return context;
}

export { FormProvider, useForm };
