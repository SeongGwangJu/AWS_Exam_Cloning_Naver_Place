/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SHeaderBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 18px 8px 18px;
    border-bottom: 1px solid #00000010;
    width: 100%;
    height: 53px;
    background-color: #06b495;
    color: white;
`;

export const SHeaderLeft = css`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const SLogoBox = css`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: white;
    color: transparent;
    margin-right: 10px;
    padding: 6px 6px;
    font-size: 11px;

`;

export const SLogoText = css`
    color: white;
    font-size: 16px;
    cursor: pointer;

`;

export const SHeaderRight = css`
    display: flex;
    align-items: center;
`;

export const SCouponBox = css`
    display: flex;
    position: relative;
    background-color: transparent;
    align-items: center;
    border: none;
    margin: 0px 6px;
    padding-top: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

export const SCouponIcon = css`
    width: 40px;
    height: 40px;
    font-size: 300px;
    
`;
export const SCouponText = css`
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 900;
    color: white;
    top: 55%;
    left: 50%;
    font-size: 12px;
    white-space: nowrap;
    
`;

export const SMenuBtn = css`
    border: none;
    font-size: 28px;
    width: 40px;
    height: 40px;
    padding-top: 8px;
    cursor: pointer;
`;

