import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { MdLocationOn } from "react-icons/md";

function ImgArea({ imgCount, imgLink, imgLink2, imgLink3, location }) {
	// **시 **구 **동을 띄어쓰기로 구분해서 **구 까지만 출력 //
	const splitlocation = [location.split(" ")[0], location.split(" ")[2]].join(
		" "
	);

	const renderImageLayout = () => {
		switch (imgCount) {
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
						<div css={S.SLocationContainer}>
							<div css={S.SLocationBox}>
								<MdLocationOn />
								<span>{splitlocation} 최신</span>
							</div>
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
				return null; // 혹시 모를 예외 처리
		}
	};

	return (
		<div css={S.SPhotoContainer}>
			<button css={S.SBtnBox}>
				{renderImageLayout()}
				<div css={S.SLocationContainer}>
					<div css={S.SLocationBox}>
						<MdLocationOn />
						<span>
							{splitlocation} 최신{imgCount}
						</span>
					</div>
				</div>
			</button>
		</div>
	);
}

export default ImgArea;
