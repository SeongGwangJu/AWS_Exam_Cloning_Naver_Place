import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./styles/common"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Reset />
    <Global styles={S.SCommon} />
    // <Header />
    <MainLayout>
      <Routes>
        <Route path="/asd/" element={ <MyProject /> } />
      </Routes>
    </MainLayout>
    <Footer />
    </>

  );
}

export default App;
