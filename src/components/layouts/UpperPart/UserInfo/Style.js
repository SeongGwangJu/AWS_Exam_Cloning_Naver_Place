/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 151px;
    background-color: #06b495;
    padding: 20px 0px 11px 0px;
    
`;

export const SUpper = css`
    display: flex;
    align-items: center;
    justify-content: left;
    position: relative;
    
    width: 375px;
    height: 120px;
    padding: 0px 20px;
`;

export const SImgBox = css`
    width: 64px;
    height: 64px;
    margin-right: 29px;
    cursor: pointer;
`;

export const SImgBorder =css`
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: white;
`;
export const SImg = css`
    position: relative;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    border: 1px solid #06b495;
    width: 60px;
    height: 60px;
    
`;
export const SLoginBtnBox = css`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    cursor: pointer;
`;

export const SLoginBtn = css`
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

export const SRightArrowIcon = css`
    margin-left: 10px;
    font-size: 12px;
`;

export const SLowerBtns = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    width: 375px;
    height: 51px;
    
`;

export const SWriteReviewBtn = css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0cc5a4;
    box-shadow: 0px 2px 5px 0 #00000010;
    width: 226px;
    height: 38px;
    color: white;
    border-radius: 10px;
    margin-right: 8px;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
`;

export const SWriteReviewIcon = css`
    margin-right: 5px;
    font-size: 18px;
`;


export const SMissionBtn = css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0cc5a4;
    box-shadow: 0px 2px 5px 0 #00000010;
    width: 102px;
    height: 38px;
    color: white;
    border-radius: 10px;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
`;

export const SMissionIcon = css`
    margin-right: 5px;
    font-size: 18px;
`;
