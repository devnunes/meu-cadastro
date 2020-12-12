import React, { useState, useCallback, useRef } from 'react';
import * as BootstrapIcons from 'react-icons/bs';

import { useForm } from '../../hooks/Form';

import { Container, Content, Label } from './styles';

export default function Input({ defaultValue, label, icon = '', ...rest }) {
  const { setEmail, setDocument, setBirth, setPass } = useForm();

  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [placeholder] = useState(defaultValue);

  const InputIcon = BootstrapIcons[icon];

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    // eslint-disable-next-line no-console
    console.log(isFocused);
  }, []);

  const handleChange = useCallback(
    (event) => {
      const functions = {
        email: () => setEmail({ email: event.target.value }),
        cpf: () => setDocument({ document: event.target.value }),
        birth: () => setBirth({ birth: event.target.value }),
        password: () => setPass({ password: event.target.value }),
      };
      functions[event.target.getAttribute('name')]();
    },
    [setEmail, setDocument, setBirth, setPass],
  );
  return (
    <Container>
      <Label>{label}</Label>
      <Content isFocused={isFocused}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          onChange={handleChange}
          ref={inputRef}
          {...rest}
        />
        {!!icon && <InputIcon size={20} />}
      </Content>
    </Container>
  );
}
