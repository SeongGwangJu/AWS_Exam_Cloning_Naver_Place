import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { MdLocationOn } from "react-icons/md";
function ImgArea( {imgLink, imgLink2, location}) {
	return (
		<div css={S.SPhotoContainer}>
			<button css={S.SBtnBox}>
				<div css={S.SPhotoBoxs}>
					<div css={S.SPhotoBox}>
						<img
							css={[S.SPhoto, S.SPhotoFirst]} src={imgLink} />
					</div>
					<div css={S.SPhotoBox}>
						<img css={[S.SPhoto, S.SPhotoLast]} src={imgLink2} />
					</div>
					<div css={S.SLocationContainer}>
						<div css={S.SLocationBox}>
							<MdLocationOn />
							<span>{location}</span>
						</div>
					</div>
				</div>
			</button>
		</div>
	);
}

export default ImgArea;
