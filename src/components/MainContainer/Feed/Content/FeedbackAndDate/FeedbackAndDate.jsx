import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { BsEmojiSmile } from "react-icons/bs";

function FeedbackAndDate({ date }) {
	const formatDate = (date) => {
		const currentDate = new Date();

		const days = ['일', '월', '화', '수', '목', '금', '토'];
		const dayOfWeek = days[new Date(date).getDay()];
		//현재와 연도가 같지 않으면 22.06.12로 출력
		if (date.split(".")[0] !== currentDate.getFullYear().toString()) {
			return `${date.split(".")[0].slice(-2)}.${date
				.split(".")[1]
				.padStart(2, "0")}.${date.split(".")[2].padStart(2, "0")}`;
		} else {
			//연도가 같으면 08.30 형식으로 출력
			return `${date.split(".")[1]}.${date.split(".")[2]} ${dayOfWeek}`;
		}
	};
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
					<span>{formatDate(date)}</span>
					방문
				</span>
			</div>
		</div>
	);
}

export default FeedbackAndDate;
