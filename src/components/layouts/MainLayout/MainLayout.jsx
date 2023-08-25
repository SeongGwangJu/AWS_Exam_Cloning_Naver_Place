import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Header from '../Header/Header';
import UserInfo from '../../UpperPart/UserInfo/UserInfo';
import ContentsType from '../../UpperPart/ContentType/ContentsType';
import Footer from '../Footer/Footer';

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <UserInfo />
            <ContentsType />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;