import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SDividingLine = css`
    border: 1px solid #00000010;
    margin: 2px 9px 0px 9px ;
    width: 1px;
    height: 13px;
`;

function divideLine(props) {
    return (
        <span css={SDividingLine}/>
    );
}

export default divideLine;