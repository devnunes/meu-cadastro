import React, { useState, useCallback, useRef } from 'react';

import { Container } from './styles'

export default function Input({defaultValue, ...rest}) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setplaceholder] = useState(defaultValue);
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
}