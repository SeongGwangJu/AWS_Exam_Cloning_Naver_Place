import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { IoIosArrowDown } from "react-icons/io";

function ReviewTextArea(props) {
    return (
        <div css={S.StextContainer}>
            <div css={S.StextContent}>
            다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
            다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
            다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
            다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
            다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
            다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
            </div>
            <button css={S.SMoreBtn} >
            <IoIosArrowDown css={S.SMoreIcon}/>
            </button>
        </div>
    );
}

export default ReviewTextArea;