import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import StickerList from "../../../../../constants/StickerList";

function Sticker({ selectedStickerIds }) {
	return (
		<div css={S.SStickerContainer}>
			<span>
				<img
					src={StickerList[selectedStickerIds - 1].icon}
					css={S.SEmoticon}
				/>
				{StickerList[selectedStickerIds - 1].content}
			</span>
			<span css={S.SMoreSticker}>+1</span>
		</div>
	);
}

export default Sticker;
