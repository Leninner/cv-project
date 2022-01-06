import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { HeaderComponent } from '../components/Header';
import { FooterComponent } from '../components/Footer';
import { FormContainer } from '../container/FormContainer';
import { CvContainer } from '../container/CvContainer';
import { CvComponentContainer } from './styles';

export const CvApp = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderComponent />
      <CvComponentContainer>
        <FormContainer />
        <CvContainer />
      </CvComponentContainer>

      <FooterComponent />
    </>
  );
};
