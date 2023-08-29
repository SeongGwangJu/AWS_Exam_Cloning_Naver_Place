import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FiMoreVertical } from "react-icons/fi";

function UserInfo( {profileImg, username, reviewCount, followerCount,
	} ) {
	return (
		<div css={S.SContainer}>
			<div css={S.SHeaderContainer}>
				<button css={S.SUserInfoLeft}>
					<div css={S.SImgBoxMargin}>
						<div css={S.SImgBox}>
							<div css={S.SImgBorder}>
								<img
									src={profileImg}
									css={S.SImg}
								/>
							</div>
						</div>
					</div>
					<div css={S.SUserInfoTextBox}>
						<div css={S.SUsername}>{username}</div>
						<div css={S.SUserInfo}>
							<span css={S.SSpanMargin}>
								사진리뷰
								<em>{reviewCount}</em>
							</span>
							<span css={S.SSpanMargin}>
								팔로워
								<em>{followerCount}</em>
							</span>
						</div>
					</div>
				</button>
				<div css={S.SUserInfoRight}>
					<button css={S.SFollowBtn}> 팔로우</button>
					<div css={S.SMoreBox}>
						<button css={S.SEtcIconBox}>
							<FiMoreVertical css={S.SEtcIcon} color="#dbdbdb" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserInfo;
