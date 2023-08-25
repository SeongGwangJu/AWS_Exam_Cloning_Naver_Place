import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import CustomViewType from './CustomViewType/CustomViewType';
import CategoryViewType from './CategoryViewType/CategoryViewType';


function Feed(props) {
    return (
        <div css={S.SLayout}>
            <CustomViewType />
            <CategoryViewType />
        </div>
    );
}

export default Feed;