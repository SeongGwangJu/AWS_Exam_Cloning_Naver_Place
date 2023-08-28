import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import UserInfo from './UserInfo/UserInfo';
import ImgArea from './ImgArea/ImgArea';
import ReviewTextArea from './ReviewTextArea/ReviewTextArea';
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { BiStar } from "react-icons/bi";

function Content(props) {
  return (
    <ul css={S.SLayout}>
      <li>
        <div css={S.SContainer}>
          <UserInfo />
          <ImgArea />
          <ReviewTextArea />
          {/* 스티커 */}
          <div css={S.SStickerContainer}>
            <span >
              <img src="https://ssl.pstatic.net/static/pup/emoji/face_savoring_food20220119222022.png"
                css={S.SEmoticon}/>
              음식이 맛있어요
            </span>
            <span >
              +
              4
              <span></span>
            </span>
          </div>
          {/* 반응남기기 */}
          <div css={S.SFeedBackAndReviewDateContainer}>
            <div css={S.SFeedBackBox}>
              <button css={S.SFeedBackBtn}>
                <span css={S.SSmileIconBox}>
                  <BsEmojiSmile css={S.SSmileIcon} />
                  반응 남기기
                </span>
              </button>
            </div>
            <div css={S.SReviewDateContainer}>
              <span css={S.SDateText}>
                <span>
                  8.28 월
                </span>
                방문
              </span>
            </div>
          </div>
          {/* 장소 */}
          <div css={S.SLocationContainer}>
            <div css={S.SLocationBorderBox}>
              <div css={S.SLocationContentsBox}>
                <div css={S.SLeft}>
                  <div css={S.SPlaceNameBox}>
                    <button css={S.SPlaceNameBtn}>
                      <span css={S.SPlaceNameTxt}>
                      어랏?커피
                      </span>
                      <AiOutlineRight css={S.SPlaceNameIcon} />
                    </button>
                  </div>
                  <div css={S.SCategoryAndCityBox}>
                    <span css={S.SCategory}>카페</span>
                    ·
                    <span css={S.SCity}>부산광역시 금정구 장전동</span>
                  </div>
                </div>
                <div css={S.SRight}>
                  <button css={S.SaveFavoriteBtn}>
                    <BiStar css={S.SStarIcon} fill="#b8b8b8"/>
                    <span css={S.SSaveTxt} > 저장 </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div css={S.SMarginEffect} />
    </ul>
  );
}

export default Content;