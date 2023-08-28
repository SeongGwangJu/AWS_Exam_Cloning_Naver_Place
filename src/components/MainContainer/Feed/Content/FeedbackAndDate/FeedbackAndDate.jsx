import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { BsEmojiSmile } from "react-icons/bs";

function FeedbackAndDate(props) {
	return (
		<div css={S.SFeedBackAndReviewDateContainer}>
			<div css={S.SFeedBackBox}>
				<button css={S.SFeedBackBtn}>
					<span css={S.SSmileIconBox}>
						<BsEmojiSmile css={S.SSmileIcon} />
						반응 남기기
					</span>
				</button>
			</div>
			<div css={S.SReviewDateContainer}>
				<span css={S.SDateText}>
					<span>8.28 월</span>
					방문
				</span>
			</div>
		</div>
	);
}

export default FeedbackAndDate;
