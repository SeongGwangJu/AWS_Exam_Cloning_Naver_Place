import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import UserInfo from "./UserInfo/UserInfo";
import ImgArea from "./ImgArea/ImgArea";
import ReviewTextArea from "./ReviewTextArea/ReviewTextArea";
import Sticker from "./Sticker/Sticker";
import FeedbackAndDate from "./FeedbackAndDate/FeedbackAndDate";
import Location from "./Location/Location";



function Content({ feed }) {
	return (
		<ul css={S.SLayout}>
			<li>
				<div css={S.SContainer}>
					<UserInfo />
					<ImgArea />
					<ReviewTextArea />
					<Sticker />
					<FeedbackAndDate />
					<Location />
				</div>
				<div css={S.SMarginBottom} />
			</li>
		</ul>
	);
}

export default Content;
