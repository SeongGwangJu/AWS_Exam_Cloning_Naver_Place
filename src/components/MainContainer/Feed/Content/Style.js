/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
  display: block;
  width: 720px;
`;

export const SContainer = css`
  padding: 16px 20px 28px 0px;
  margin: 0 auto;
`;

export const SStickerContainer = css`
  margin-top: 13px;

  & > span {
    display: inline-flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    vertical-align: top;
    margin: 0 4px 7px 0;
    padding: 4px 7px;
    border-radius: 4px;
    font-size: 13px;
    color: #666;
    background-color: #f5f7f8;
    height: 26px;
  }
`;

export const SEmoticon = css`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

////////////////////////////
export const SFeedBackAndReviewDateContainer = css`
  display: flex;
  position: relative;
  margin-top: 17px;
  justify-content: space-between;
`;

export const SFeedBackBox = css`
  display: flex;

`;

export const SFeedBackBtn = css`
  cursor: pointer;
`;

export const SSmileIconBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 24px;
  font-size: 14px;
  color: #424242;
`;

export const SSmileIcon = css`
  font-size: 22px;
  margin-right: 6px;
`;

export const SReviewDateContainer = css`
  height: 24px;
`;

export const SDateText = css`
  font-size: 13px;
  color: #9a9a9a;

  & > span {
    margin-right: 3px;
  }
`;

//////////////////////////

export const SLocationContainer = css`
  margin-top: 15px;
`;

export const SLocationBorderBox = css`
  border: 1px solid #ecf0f2;
  border-radius: 8px;
`;

export const SLocationContentsBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 13px 16px 12px 15px;


`;

export const SLeft = css`
  display: block;
`;

export const SPlaceNameBox = css`
  display: flex;
`;

export const SPlaceNameBtn = css`
  display: inline-flex;
  vertical-align: top;
  max-width: 100%;
  padding: 0 0 0 0;
  cursor: pointer;
`;

export const SPlaceNameTxt = css`
  font-size: 16px;
  color: #242424;
  font-weight: 700;

`;

export const SPlaceNameIcon = css`
  margin: 4px 0px 0px 5px;
  /* font-size: 16px; */
`;

export const SCategoryAndCityBox = css`
  margin-top: 4px;
  font-size: 13px;
  color: #8f8f8f;
`;

export const SCategory = css`
  margin-right: 4px;
`;

export const SCity = css`
  margin-left: 4px;
`;

export const SRight = css`
  margin: 2px 0 0 28px;
`;

export const SaveFavoriteBtn = css`
  width: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const SStarIcon = css`
  font-size: 18px;
`;

export const SSaveTxt = css`
  margin-top: 6px;
  font-size: 11px;
  white-space: nowrap;
  color: #8f8f8f;
  text-align: center;
`;



export const SMarginEffect = css`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 10px;
  background-color: #f9f9f9;

`;
