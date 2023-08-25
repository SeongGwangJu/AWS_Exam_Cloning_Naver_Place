/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    width: 720px;
`;

export const SViewTypeBtnListBox = css`
    margin-left: 20px;
    margin-right: 20px;
`;

export const SViewTypeBtnList = (isSelected) => css`
    border: 1px solid red;
    margin: 0 auto;
    height: 42px;
    padding: 0px 13px;
`;