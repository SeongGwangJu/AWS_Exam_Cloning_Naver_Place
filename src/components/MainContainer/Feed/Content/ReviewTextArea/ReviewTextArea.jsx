import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { IoIosArrowDown } from "react-icons/io";

function ReviewTextArea(props) {
	return (
		<div css={S.StextContainer}>
			<div css={S.StextContent}>
				냠냠 너무맛있다 아이 행복해 빨리 더 내놓지 못할까
			</div>
			<button css={S.SMoreBtn}>
				<IoIosArrowDown css={S.SMoreIcon} />
			</button>
		</div>
	);
}

export default ReviewTextArea;
