import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import DivisionLine from '../../../utils/DivisionLine';

function Footer(props) {
    return (
        <footer css={S.SLayout}>
            <div css={S.SColumn1}>
                <button>로그인</button>
                <DivisionLine />
                <button>전체서비스</button>
            </div>
            <div css={S.SColumn2}>
                <button>이용 정책</button ><DivisionLine />
                <button>MY 플레이스 고객센터</button> <DivisionLine />
                <button>신고센터</button> <DivisionLine />
                <button>공지사항</button>
            </div>
            <div css={S.SColumn3}>
                <button>ⓒNAVER Corp.</button>

            </div>
        </footer>
    );
}

export default Footer;