import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { MdLocationOn } from "react-icons/md";
function ImgArea( {imgLink, imgLink2, location}) {

	//**시 **구 **동을 띄어쓰기로 구분해서 **구 까지만 출력 //
	const splitlocation =[location.split(" ")[0],location.split(" ")[2]].join(" ")

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
							<span>{splitlocation} 최신</span>
						</div>
					</div>
				</div>
			</button>
		</div>
	);
}

export default ImgArea;
