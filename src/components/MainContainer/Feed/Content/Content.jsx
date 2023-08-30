import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import UserInfo from "./UserInfo/UserInfo";
import ImgArea from "./ImgArea/ImgArea";
import ReviewTextArea from "./ReviewTextArea/ReviewTextArea";
import Sticker from "./Sticker/Sticker";
import FeedbackAndDate from "./FeedbackAndDate/FeedbackAndDate";
import Location from "./Location/Location";
import UserData from "../../../../constants/UserData";

function Content({
	userId,
	imgLink,
	imgLink2,
	imgLink3,
	location,
	reviewTxt,
	selectedStickerIds,
	date,
	placeName,
	category,
}) {

	const getUserDatabyId = UserData[userId-1];

	return (
		<ul css={S.SLayout}>
			<li>
				<div css={S.SContainer}>
					<UserInfo
						profileImg={getUserDatabyId.profileImg}
						username={getUserDatabyId.username}
						reviewCount={getUserDatabyId.reviewCount}
						followerCount={getUserDatabyId.followerCount}
					/>
					<ImgArea
						imgLink={imgLink}
						imgLink2={imgLink2}
						imgLink3={imgLink3}
						location={location}
						date={date}
					/>
					<ReviewTextArea reviewTxt={reviewTxt} />
					<Sticker selectedStickerIds={selectedStickerIds} />
					<FeedbackAndDate date={date} />
					<Location
						location={location}
						category={category}
						placeName={placeName}
					/>
				</div>
				<div css={S.SMarginBottom} />
			</li>
		</ul>
	);
}

export default Content;
