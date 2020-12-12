import React from 'react';

import { FormProvider } from './Form';

function AppProvider({ children }) {
  return <FormProvider>{children}</FormProvider>;
}

export default AppProvider;
