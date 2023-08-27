import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import CustomViewType from './CustomViewType/CustomViewType';
import CategoryViewType from './CategoryViewType/CategoryViewType';
import MainContainer from '../MainContainer';
import Content from './Content/Content';


function Feed(props) {
    return (
        <MainContainer>
            <CustomViewType />
            <CategoryViewType />
            <Content />
        </MainContainer>

    );
}

export default Feed;