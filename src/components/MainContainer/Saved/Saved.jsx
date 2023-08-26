import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { FaFlagCheckered } from "react-icons/fa";

function Saved(props) {
    return (
        <div css={S.SContainer} >
            <div css={S.SBackground}>
                <div>
                <FaFlagCheckered css={S.SFlagIcon} fill="#fffda6"/>
                </div>
                <div>
                    <div css={S.SText}>
                        가고싶은 맛집, 카페 저장하고
                    </div>
                    <div css={S.SText}>
                        나의
                        <strong css={S.STextStrong}> 리스트</strong>
                        를 만들어 보세요
                    </div>
                    <div css={S.STextSmall}>여행 코스도 계획하기도 굳~</div>
                    <div css={S.SImgBox}>
                        <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_bookmark.4939778b9d2b5079407ea43536a05566.png" 
                        css={S.SImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saved;