/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SPhotoContainer = css`
	padding-top: 360px;
	overflow: hidden;
	position: relative;
	margin-top: 2px;
	display: block;
	border-radius: 8px;
`;

export const SBtnBox = css`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const SPhotoBoxs = css`
	display: flex;
	height: 100%;
`;

export const SPhotoBox = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	height: 100%;
	width: 50%;

	&:last-child {
		margin-left: 20px;
	}
`;

export const SPhoto = css`
	width: 100%;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: cover;
	height: 100%;

	/* &:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  };

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-left: 2px;
  }; */
`;

export const SPhotoFirst = css`
	${SPhoto};
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
`;

export const SPhotoLast = css`
	${SPhoto};
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
