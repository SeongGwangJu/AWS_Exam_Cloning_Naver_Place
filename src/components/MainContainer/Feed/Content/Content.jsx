import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import UserInfo from "./UserInfo/UserInfo";
import ImgArea from "./ImgArea/ImgArea";
import ReviewTextArea from "./ReviewTextArea/ReviewTextArea";
import Sticker from "./Sticker/Sticker";
import FeedbackAndDate from "./FeedbackAndDate/FeedbackAndDate";
import Location from "./Location/Location";

function Content(props) {
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
			</li>
			<div css={S.SMarginEffect} />
		</ul>
	);
}

export default Content;
