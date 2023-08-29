import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { IoIosArrowDown } from "react-icons/io";

function ReviewTextArea( {reviewTxt}) {
	return (
		<div css={S.StextContainer}>
			<div css={S.StextContent}>
				{reviewTxt}
			</div>
			<button css={S.SMoreBtn}>
				<IoIosArrowDown css={S.SMoreIcon} />
			</button>
		</div>
	);
}

export default ReviewTextArea;
