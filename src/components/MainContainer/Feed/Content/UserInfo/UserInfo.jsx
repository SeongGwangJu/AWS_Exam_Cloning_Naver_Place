import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { FiMoreVertical } from 'react-icons/fi';

function UserInfo(props) {
  return (
    <div css={S.SContainer}>
    <div css={S.SHeaderContainer}>
      <button css={S.SUserInfoLeft}>
        <div css={S.SImgBoxMargin}>
          <div css={S.SImgBox}>
            <div css={S.SImgBorder}>
              <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png"
              css={S.SImg} />
            </div>
          </div>
        </div>
        <div css={S.SUserInfoTextBox}>
          <div css={S.SUsername}>임소은</div>
          <div css={S.SUserInfo}>
            <span css={S.SSpanMargin}> 사진리뷰
              <em> 49</em>
            </span>
            <span css={S.SSpanMargin}>팔로워
              <em> 0</em>
            </span>
          </div>
        </div>
      </button>
      <div css={S.SUserInfoRight}>
        <button css={S.SFollowBtn}> 팔로우
        </button>
        <div css={S.SMoreBox}>
            <button css={S.SEtcIconBox}>
              <FiMoreVertical css={S.SEtcIcon} color="#dbdbdb"/>
            </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default UserInfo;