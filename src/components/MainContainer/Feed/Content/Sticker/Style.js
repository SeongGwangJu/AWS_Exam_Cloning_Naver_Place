/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

export const SMoreSticker = css`
	cursor: default;
	font-weight: 600;
`;
