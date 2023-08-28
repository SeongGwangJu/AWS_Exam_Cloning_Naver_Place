/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SContainer = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 720px;
	height: 47.33px;
	margin: 0px -20px;
	padding: 10px 0px 2px;
`;

export const SCategoryBtnListBoxs = css`
	width: 720px;
	height: 35.33px;
	position: relative;
	overflow: hidden;
`;

export const SHiddenScrollBox = (scrollValue) => css`
	width: 720px;
	height: 35.33px;
	display: flex;
	justify-self: left;
	transform: translateX(-${scrollValue}px);
	transition: transform 0.4s ease;
	cursor: pointer;
`;

export const SCategoryBtnListBox = css`
	padding: 0px 0px 0px 6px;
	height: 35.33px;

	&:first-of-type {
		padding: 0px 0px 0px 20px;
	}
	&:last-child {
		padding: 0px 20px 0px 6px;
	}
`;

export const SCategoryBtnList = (isSelected) => css`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding: 0px 13px;
	border: 1px solid #eaeef2;
	border-radius: 19px;
	background-color: ${isSelected ? "#424242" : "#ffffff"};
	color: ${isSelected ? "white" : "#666666"};
	font-weight: ${isSelected ? "600" : "500"};
	height: 35px;
	font-size: 14px;
	white-space: nowrap;
	cursor: pointer;
`;

export const SPreviousBtn = (isVisible) => css`
	visibility: ${isVisible ? "visible" : "hidden"};
	position: absolute;
	top: 50%;
	left: -10px;
	z-index: 10;
	background-image: linear-gradient(
		270deg,
		rgba(248, 250, 251, 0),
		#f8fafb 28px
	);
	transform: translateY(-50%);
	border-radius: 50%;
	width: 46px;
	height: 35.33px;
	cursor: pointer;
	font-size: 12px;
`;

export const SNextBtn = (isVisible) => css`
	visibility: ${isVisible ? "visible" : "hidden"};
	position: absolute;
	top: 50%;
	right: -10px;
	z-index: 10;
	background-image: linear-gradient(
		90deg,
		rgba(248, 250, 251, 0),
		#f8fafb 28px
	);
	transform: translateY(-50%);
	border-radius: 50%;
	width: 46px;
	height: 35.33px;
	cursor: pointer;
	font-size: 12px;
`;
