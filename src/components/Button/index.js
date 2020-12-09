import React from 'react';

import { Container } from './styles';


export default function Button({ children, ...rest }){ 
  return (<Container type="button" {...rest}>
    {children}
  </Container>
  )
};

