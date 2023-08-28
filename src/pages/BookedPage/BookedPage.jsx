import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Container = css`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
font-size: 24px;
width: 720px;
height: 360px;

text-align: center;
`;
function BookedPage(props) {
    return (
        <div css={Container}>
            아직 제작하지 않았습니다.
        </div>
    );
}

export default BookedPage;