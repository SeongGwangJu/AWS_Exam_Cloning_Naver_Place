import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { FaFlagCheckered } from "react-icons/fa";

function Review(props) {
    return (
        <div css={S.SBackground}>
            <div>
            <FaFlagCheckered css={S.SFlagIcon} fill="white"/>
            </div>
            <div>
                <div css={S.SText}>
                    정성스레 작성한
                    <strong css={S.STextStrong}> 리뷰</strong>
                </div>
                <div css={S.SText}>
                    내 리뷰를 모아 만든
                    <strong css={S.STextStrong}> 테마리스트</strong>
                </div>
                <div css={S.STextSmall}>나의 발자취를 소중한 기록으로 남겨보세요.</div>
                <div css={S.SImgBox}>
                    <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_review_20221202.87ca2c0d90f42473c28ef6cff083836e.png" 
                    css={S.SImg} />
                </div>
                <div css={S.SBtnBox}>
                    <button css={S.SWriteReview}>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default Review;