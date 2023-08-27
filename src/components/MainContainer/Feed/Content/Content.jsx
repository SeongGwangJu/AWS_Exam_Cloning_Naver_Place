import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import UserInfo from './UserInfo/UserInfo';
import ImgArea from './ImgArea/ImgArea';
import { IoIosArrowDown } from "react-icons/io";


function Content(props) {
  return (
    <ul css={S.SLayout}>
      <li>
        <div css={S.SContainer}>
          <UserInfo />
          <ImgArea />
          <div css={S.StextContainer}>
            <div css={S.StextContent}>
              다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
              다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
              다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
              다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
              다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
              다해간다 다해간다 다해간다 다해간다 다해간다 다해간다
            </div>
            <button css={S.SMoreBtn} >
              <IoIosArrowDown css={S.SMoreIcon}/>
            </button>
          </div>
        </div>
        

      </li>
    </ul>
  );
}

export default Content;