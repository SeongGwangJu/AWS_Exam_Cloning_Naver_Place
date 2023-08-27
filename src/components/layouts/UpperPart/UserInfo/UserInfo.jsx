import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { AiOutlineRight, AiOutlineCheckCircle } from "react-icons/ai";
import { PiPencilSimpleLineFill } from "react-icons/pi";

function UserInfo(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SUpper}>
                <div css={S.SImgBox}>
                    <div css={S.SImgBorder}>
                        <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png"
                        css={S.SImg} />
                    </div>
                </div>
                <div css={S.SLoginBtnBox}>
                    <button css={S.SLoginBtn}>
                        로그인하기
                        <AiOutlineRight css={S.SRightArrowIcon}/>
                    </button>
                </div>
            </div>
            <div css={S.SLowerBtns}>
                    <button css={S.SWriteReviewBtn}>
                        <PiPencilSimpleLineFill  css={S.SWriteReviewIcon}/>
                        리뷰 쓰기
                    </button>
                    <button css={S.SMissionBtn}>
                        <AiOutlineCheckCircle  css={S.SMissionIcon}/>
                        미션
                    </button>
            </div>
        </div>
    );
}

export default UserInfo;