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
	justify-content: center;
`;

export const SPhotoBox = css`
	display: flex;
	align-items: center;
	position: relative;
`;

export const SPhotoOfOne = css`
	width: 700px;
	height: 360px;
	border-radius: 8px;
`;

export const SPhotoOfTwo = css`
	margin-left: 2px;

	:first-of-type {
		width: 406.8px;
		height: 360px;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	:nth-of-type(2) {
		width: 291.2px;
		height: 360px;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}
`;

export const SPhotoBox2 = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

export const SPhotoOfThree = css`
	width: 291.2px;
	height: 179px;
	margin-left: 2px;

	:first-child {
		border-top-right-radius: 8px;
		margin-bottom: 2px;
	}

	:nth-child(2) {
		border-bottom-right-radius: 8px;

	}
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
