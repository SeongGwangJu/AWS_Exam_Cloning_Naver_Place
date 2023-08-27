/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 51px;
    background-color: #06b495;
    padding: 5px 14px;
`;

export const ContentTypeBox =css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
`;

export const SContentTypelist = (isSelected) => css`
    border-bottom: ${isSelected? "3px solid white " : "none"};
    font-size: 17px;
    font-weight: ${isSelected ? "600" : "500"};;
    padding: ${isSelected ? "14px 5px 11px 5px" : "14px 5px"};
    color: ${isSelected ? "white" : "#ffffff80"};
    cursor: pointer;
`;