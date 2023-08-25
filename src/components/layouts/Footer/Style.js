/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout =css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 42px 0px 36px 0px;
    height: 160px;

`;

export const SColumn1 = css`
    display: flex;
    justify-content: center;
    & > button {
        font-size: 14px;
        color: #8f8f8f;
        padding: 0px 0px 0px 0px;
        cursor: pointer;
    }
    `;

export const SColumn2 = css`
    margin-top: 14px;
    display: flex;
    justify-content: center;

    & > button {
        font-size: 12px;
        color: #666666;
        padding: 0px 0px;
        padding: 0px 0px 0px 0px;
        cursor: pointer;
    }
`;

export const SColumn3 = css`
    margin-top: 10px;
    display: flex;
    justify-content: center;

    & > button {
        font-size: 12px;
        color: #666666;
        cursor: pointer;
    }
    
`;

