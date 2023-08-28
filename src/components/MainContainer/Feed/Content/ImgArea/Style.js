/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SPhotoContainer = css`
	margin-top: 2px;
	border-radius: 8px;
`;

export const SBtnBox = css`
  position: relative;
	cursor: pointer;
`;

export const SPhotoBoxs = css`
	display: flex;
`;

export const SPhotoBox = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 50%;
`;

export const SPhoto = css`
	width: 339px;
	height: 360px;
  
`;

export const SPhotoFirst = css`
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
`;

export const SPhotoLast = css`
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	margin-left: 4px;
`;

export const SLocationContainer = css`
	position: absolute;
	right: 76px;
	bottom: 5px;
	left: 10px;
	text-align: left;
`;

export const SLocationBox = css`
	display: inline-flex;
	padding: 2px 6px;
	vertical-align: top;
	align-items: center;
	background-color: #00000080;
	border-radius: 4px;
	font-weight: 700;
	font-size: 12px;
	color: white;

	& > span {
		margin-left: 3px;
	}
`;
