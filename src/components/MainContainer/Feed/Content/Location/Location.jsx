import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { AiOutlineRight } from "react-icons/ai";
import { BiStar } from "react-icons/bi";

function Location({ location, placeName, category }) {
	return (
		<div css={S.SLocationContainer}>
			<div css={S.SLocationBorderBox}>
				<div css={S.SLocationContentsBox}>
					<div css={S.SLeft}>
						<div css={S.SPlaceNameBox}>
							<button css={S.SPlaceNameBtn}>
								<span css={S.SPlaceNameTxt}>{placeName}</span>
								<AiOutlineRight css={S.SPlaceNameIcon} />
							</button>
						</div>
						<div css={S.SCategoryAndCityBox}>
							<span css={S.SCategory}>{category}</span>·
							<span css={S.SCity}>{location}</span>
						</div>
					</div>
					<div css={S.SRight}>
						<button css={S.SaveFavoriteBtn}>
							<BiStar css={S.SStarIcon} fill="#b8b8b8" />
							<span css={S.SSaveTxt}> 저장 </span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Location;
