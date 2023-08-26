/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SBackgroundColor = css`
    width: 100%;
    background-color: #F8FaFB;
    display: flex;
    justify-content: center;
`;
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
`;

export const SViewTypeBtnListBox = css`
    padding: 6px 0px 6px 8px;
    height: 54px;

    &:first-of-type {
        padding: 6px 0px 6px 20px
    }
    &:last-child {
        padding: 6px 20px 6px 8px;
    }
`;

export const SViewTypeBtnList = (isSelected) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0px 13px;
    border-radius: 5px;
    box-shadow: ${isSelected? " 0 2px 6px 0 rgba(37,146,255,.35)"
    : "0 2px 6px rgba(0,0,0,.06)"};

    ${isSelected ? /*true면 image, false면 color */
        "background-image: linear-gradient(90deg,#2d8dee,#2da1ee);"
        : "background-color: #ffffff"};
    color: ${isSelected? "white" : "#424242"};
    font-weight: ${isSelected? "600" : "500"};
    height: 42px;
    cursor: pointer;
    font-size: 15px;
`;

export const SPlusIcon = css`
    margin-right: 1.5px;
    font-size: 18px;
`;

export const SCurrenLocationBox = css`
    display: flex;
    justify-self: right;
    padding: 12px 16px 12px 20px;
    
`;

export const SDivisionLine = css`
    align-self: center;
    width: 2px;
    height: 24px;
    background-color: #e2e5e8;
    
`;
export const SCurrenLocationBtn = css`
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #7f8daa;
    font-weight: 600;
    padding: none;
    align-self: center;
`;

export const SCurrenLocationIcon = css`
    margin-right: 3px;
    font-size: 18px;
    font-weight: bold;
`;