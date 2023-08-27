import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { MdMyLocation } from "react-icons/md";

function ImgArea(props) {
  return (
    <div css={S.SPhotoContainer}>
      <button css={S.SBtnBox}>
        <div css={S.SPhotoBoxs}>
          <div css={S.SPhotoBox1}>
            <div css={S.SPhoto1}></div>
          </div>
          <div css={S.SPhotoBox2}>
            <div css={S.SPhoto2}>
            </div>
          </div>
          <div css={S.SLocationContainer}>
            <div css={S.SLocationBox}>
              <MdMyLocation />
              <span>부산시 금정구 최신 </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ImgArea;