import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext({});

function FormProvider({ children }) {
  const [data, setData] = useState({
    email: '',
    document: '',
    birth: '',
    password: '',
  });
  const [error, setError] = useState({});

  function onChange({ key, value }) {
    setData({ ...data, [key]: value });
  }

  return (
    <FormContext.Provider
      value={{
        ...data,
        ...error,
        onChange,
        setError,
      }}
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
