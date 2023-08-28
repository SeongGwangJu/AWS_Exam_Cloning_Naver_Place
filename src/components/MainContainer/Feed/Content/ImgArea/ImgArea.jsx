import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { MdLocationOn } from "react-icons/md";
import * as F from '../../../../../images/KakaoTalk_20230712_021049278.jpg'

function ImgArea(props) {
  return (
    <div css={S.SPhotoContainer}>
      <button css={S.SBtnBox}>
        <div css={S.SPhotoBoxs}>
          <div css={S.SPhotoBox}>
            <img css={[S.SPhoto, S.SPhotoFirst]} src='../../../../../images/KakaoTalk_20230806_211510741_02.jpg' alt=""/>
          </div>
          <div css={S.SPhotoBox}>
            <img css={[S.SPhoto, S.SPhotoLast]} src='../../../../../images/KakaoTalk_20230809_221425569_02.jpg' alt=""/>
          </div>
          <div css={S.SLocationContainer}>
            <div css={S.SLocationBox}>
              <MdLocationOn />
              <span>부산시 금정구 최신 </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ImgArea;