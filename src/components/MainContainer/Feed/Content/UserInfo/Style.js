/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SContainer = css``;

export const SHeaderContainer = css`
	height: 65px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SUserInfoLeft = css`
	display: flex;
`;
export const SImgBoxMargin = css`
	margin-right: 8px;
`;

export const SImgBox = css`
	display: inline-block;
	vertical-align: top;
	position: relative;
	border-radius: 50%;
	width: 42px;
	height: 42px;
	box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
	cursor: pointer;
`;

export const SImgBorder = css`
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: white;
`;

export const SImg = css`
	position: relative;
	top: 2px;
	z-index: 10;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background-color: #fff;
	background-position: 50% 50%;
	vertical-align: top;
`;

export const SUserInfoTextBox = css`
	margin-top: 3px;
	text-align: left;
	cursor: pointer;
`;

export const SUsername = css`
	white-space: nowrap;
	font-weight: 700;
	font-size: 16px;
`;

export const SUserInfo = css`
	margin-top: 2px;
	color: #8f8f8f;
	font-size: 13px;
`;

export const SSpanMargin = css`
	margin-right: 8px;
	& > em {
		margin-left: 3px;
	}
`;

export const SUserInfoRight = css`
	display: flex;
`;
export const SFollowBtn = css`
	border-radius: 4px;
	background-color: #eff6fe;
	font-size: 13px;
	width: 70px;
	height: 30px;
	font-weight: 600;
	color: #287cff;
	cursor: pointer;
`;

export const SMoreBox = css`
	margin: 0px -12px 0px 4px;
`;

export const SEtcIconBox = css`
	position: relative;
	top: 3px;
	width: 26px;
	height: 30px;
	font-size: 16px;
`;

export const SEtcIcon = css`
	font-size: 18px;
	cursor: pointer;
`;
