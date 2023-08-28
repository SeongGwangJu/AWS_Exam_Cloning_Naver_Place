import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function Sticker(props) {
	return (
		<div css={S.SStickerContainer}>
			<span>
				<img
					src="https://ssl.pstatic.net/static/pup/emoji/face_savoring_food20220119222022.png"
					css={S.SEmoticon}
				/>
				음식이 맛있어요
			</span>
			<span css={S.SMoreSticker}>+4</span>
		</div>
	);
}

export default Sticker;
