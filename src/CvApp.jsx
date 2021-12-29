import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { HeaderComponent } from './components/Header';
import { FormComponent } from './components/Form';
import { FormContext } from './context/FormContext';
import { useFormValues } from './hooks/useFormValues';

export const CvApp = () => {
  const initialState = useFormValues();

  return (
    <FormContext.Provider value={initialState}>
      <GlobalStyles />
      <HeaderComponent />
      <FormComponent />
    </FormContext.Provider>
  );
};
