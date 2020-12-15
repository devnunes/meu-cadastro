import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import * as BootstrapIcons from 'react-icons/bs';

import { useForm } from '../../hooks/Form';

import { cpfMask, birthMask } from '../../utils/mask';

import { Container, Content, Label } from './styles';

export default function Input({
  placeholderProps,
  label,
  icon,
  error = false,
  errorMessage,
  name,
  ...rest
}) {
  const { onChange } = useForm();

  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [formData, setFormData] = useState({
    value: '',
    key: '',
  });
  const [placeholder] = useState(placeholderProps);

  const InputIcon = BootstrapIcons[icon];

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChange = useCallback(
    (event) => {
      if (
        event.target.getAttribute('name') === 'document' ||
        event.target.getAttribute('name') === 'birth'
      ) {
        setFormData({
          key: event.target.getAttribute('name'),
          value:
            event.target.getAttribute('name') === 'document'
              ? cpfMask(event.target.value)
              : birthMask(event.target.value),
        });

        onChange({
          key: event.target.getAttribute('name'),
          value:
            event.target.getAttribute('name') === 'document'
              ? cpfMask(event.target.value)
              : birthMask(event.target.value),
        });
      } else {
        setFormData({
          key: event.target.getAttribute('name'),
          value: inputRef.current?.value,
        });

        onChange({
          key: event.target.getAttribute('name'),
          value: event.target.value,
        });
      }
    },
    [setFormData, onChange],
  );
  return (
    <Container>
      <Label>{label}</Label>
      <Content isFocused={isFocused} isErrored={error}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          onChange={handleChange}
          ref={inputRef}
          value={formData.value}
          name={name}
          {...rest}
        />
        {!!icon && <InputIcon size={20} />}
      </Content>
    </Container>
  );
}

Input.propTypes = {
  placeholderProps: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  placeholderProps: '',
  label: '',
  icon: '',
  error: false,
  errorMessage: '',
  name: '',
};
