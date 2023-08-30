import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { MdLocationOn } from "react-icons/md";

function ImgArea({ imgLink, imgLink2, imgLink3, location, date }) {
	// **시 **구 **동을 띄어쓰기로 구분해서 **구 까지만 출력 //
	const splitlocation = [location.split(" ")[0], location.split(" ")[2]].join(
		" "
	);

	// 유효한 사진이 1개인지 2개인지 3개인지 판별
	const validImgLinks = [imgLink, imgLink2, imgLink3, ];
	const validImgLinkCount = validImgLinks.filter(
		(link) => link && link !== ""
	).length;

	// 사진의 갯수에 따라 다른 Layout으로 출력
	const renderImageLayout = () => {
		switch (validImgLinkCount) {
			case 1:
				return (
					<div css={S.SPhotoBox}>
						<img css={S.SPhotoOfOne} src={imgLink} alt="" />
					</div>
				);
			case 2:
				return (
					<div css={S.SPhotoBoxs}>
						<div css={S.SPhotoBox}>
							<img css={S.SPhotoOfTwo} src={imgLink} alt="" />
							<img css={S.SPhotoOfTwo} src={imgLink2} alt="" />
						</div>
					</div>
				);
			case 3:
				return (
					<div css={S.SPhotoBoxs}>
						<div css={S.SPhotoBox}>
							<img css={S.SPhotoOfTwo} src={imgLink} alt="" />
						</div>
						<div css={S.SPhotoBox2}>
							<img css={S.SPhotoOfThree} src={imgLink2} alt="" />
							<img css={S.SPhotoOfThree} src={imgLink3} alt="" />
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	const DateComparisonComponent = (date) => {
		const currentDate = new Date();

		const DateParts = date.split(".");

		const targetDateTime = new Date(parseInt(DateParts[0]), (parseInt(DateParts[1]) - 1), parseInt(DateParts[2]));
		const timeDifference = currentDate - targetDateTime;
		const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

		let output = "";

		if (daysAgo >= 365) {
			const yearsAgo = Math.floor(daysAgo / 365);
			output = `${yearsAgo}년 전`;
		} else if (daysAgo >= 30) {
			const monthsAgo = Math.floor(daysAgo / 30);
			output = `${monthsAgo}개월 전`;
		} else if (daysAgo > 0) {
			output = `${daysAgo}일 전`;
		} else {
			output = "최신";
		}

		return output;
	};

	return (
		<div css={S.SPhotoContainer}>
			<button css={S.SBtnBox}>
				{renderImageLayout()}
				<div css={S.SLocationContainer}>
					<div css={S.SLocationBox}>
						<MdLocationOn />
						<span>{splitlocation} {DateComparisonComponent(date)}</span>
					</div>
				</div>
			</button>
		</div>
	);
}

export default ImgArea;
