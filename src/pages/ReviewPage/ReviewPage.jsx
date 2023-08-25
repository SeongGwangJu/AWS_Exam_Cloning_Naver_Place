import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Review from '../../components/MainContainer/Review/Review';
import MainContainer from '../../components/MainContainer/MainContainer';

function ReviewPage(props) {
    return (
        <>
            <MainContainer>
                <Review />
            </MainContainer>
        </>
    );
}

export default ReviewPage;