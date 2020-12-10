import React, { useState, useCallback, useRef } from 'react';
import * as BootstrapIcons from 'react-icons/bs';

import { Container, Content, Label } from './styles';

export default function Input({defaultValue,label, icon = '', ...rest}) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState(defaultValue);
  
  const InputIcon = BootstrapIcons[icon];

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <Content isFocused={isFocused} >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          ref={inputRef}
          {...rest}
        />
      {!!icon &&
        <InputIcon size={20}/>
      }
      </Content>
    </Container>
  );
}