import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import {SiNaver} from "react-icons/si";
import { RiMenuFill} from "react-icons/ri";
import { BsTicket } from "react-icons/bs"

function Header(props) {
    return (
        <header css={S.SHeaderBox}>
            <div css={S.SHeaderLeft}>
                <div css={S.SLogoBox}>
                    <SiNaver fill="#06b495" />
                </div>
                <div css={S.SLogoText}>
                    MY플레이스
                </div>
            </div>
            <div css={S.SHeaderRight}>
                <div css={S.SCouponBox}>
                    <BsTicket  fill="white" css={S.SCouponIcon}/>
                    <span css={S.SCouponText}>쿠폰</span>
                </div>
                <button css={S.SMenuBtn}> <RiMenuFill fill="white"/></button>
            </div>
        </header>
    );
}

export default Header;