/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const SContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 720px;
    height: 66px;
`;

export const SViewTypeBtnListBoxs = css`
    justify-self: left;
    display: flex;
    overflow-x: hidden;
    
    & > ::-webkit-scrollbar{
        border: none;
        width: 1px;
        background-color: #dbdbdb40;
    }
    
    *::-webkit-scrollbar-thumb{
        border-radius: 1px;
        background-color: #99999970;
    }

`;


export const SViewTypeBtnListBox = css`
    padding: 0px 0px 0px 6px;
    height: 35.21px;
    &:first-of-type {
        padding: 0px 0px 0px 20px
    }
    &:last-child {
        padding: 0px 20px 0px 6px;
    }

`;

export const SViewTypeBtnList = (isSelected) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0px 13px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    background-color: ${isSelected ? "#424242" :"#ffffff"};
    color: ${isSelected? "white" : "#666666"};
    font-weight: ${isSelected? "600" : "500"};
    height: 35px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
`;