import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { FaFlagCheckered } from "react-icons/fa";

function Timeline(props) {
    return (
        <div css={S.SBackground}>
            <div>
            <FaFlagCheckered css={S.SFlagIcon} fill="white"/>
            </div>
            <div >
                <strong css={S.STextStrong}>영수증/카드내역 인증, 예약,주문</strong>
                한
                <div css={S.SText}>장소가 나의 기록이 됩니다.</div>
                <div css={S.STextSmall}>방문했던 곳을 한눈에 모아보세요.</div>
                <div css={S.SImgBox}>
                    <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png" 
                    css={S.SImg} />
                </div>
                <div css={S.SBtnBox}>
                    <button css={S.SWriteReview}>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default Timeline;