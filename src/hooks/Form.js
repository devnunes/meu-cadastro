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

  function validateFields() {
    if (data.email) {
      setError({ ...error, emailIsErrored: !/\S+@\S+\.\S+/.test(data.email) });
    }

    if (data.document) {
      setError({
        ...error,
        documentIsErrored: !/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(
          data.document,
        ),
      });
    }
  }

  return (
    <FormContext.Provider
      value={{
        ...data,
        ...error,
        validateFields,
        onChange,
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
