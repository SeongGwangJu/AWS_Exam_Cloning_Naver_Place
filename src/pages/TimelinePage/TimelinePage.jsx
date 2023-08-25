import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import MainContainer from '../../components/MainContainer/MainContainer';
import Timeline from '../../components/MainContainer/Timeline/Timeline';

function TimelinePage(props) {
    return (
        <>
            <MainContainer>
                <Timeline />
            </MainContainer>
        </>
    );
}

export default TimelinePage;