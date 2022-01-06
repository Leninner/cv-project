import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { HeaderComponent } from '../components/Header';
import { FooterComponent } from '../components/Footer';
import { FormContainer } from '../container/FormContainer';
import { CvContainer } from '../container/CvContainer';
import { CvComponentContainer } from './styles';
import { FormContext } from '../context/FormContext';
import { useGeneralState } from '../hooks/useGeneralState';

export const CvApp = () => {
  const initialState = useGeneralState();

  return (
    <>
      <FormContext.Provider value={initialState}>
        <GlobalStyles />
        <HeaderComponent />
        <CvComponentContainer>
          <FormContainer />
          <CvContainer />
        </CvComponentContainer>

        <FooterComponent />
      </FormContext.Provider>
    </>
  );
};
