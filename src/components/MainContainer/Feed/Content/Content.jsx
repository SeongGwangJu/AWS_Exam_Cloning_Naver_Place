import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import UserInfo from "./UserInfo/UserInfo";
import ImgArea from "./ImgArea/ImgArea";
import ReviewTextArea from "./ReviewTextArea/ReviewTextArea";
import Sticker from "./Sticker/Sticker";
import FeedbackAndDate from "./FeedbackAndDate/FeedbackAndDate";
import Location from "./Location/Location";

function Content({
	profileImg,
	username,
	reviewCount,
	followerCount,
	imgCount,
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
	return (
		<ul css={S.SLayout}>
			<li>
				<div css={S.SContainer}>
					<UserInfo
						profileImg={profileImg}
						username={username}
						reviewCount={reviewCount}
						followerCount={followerCount}
					/>
					<ImgArea
						imgCount={imgCount}
						imgLink={imgLink}
						imgLink2={imgLink2}
						imgLink3={imgLink3}
						location={location}
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
