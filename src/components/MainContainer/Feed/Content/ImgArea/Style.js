/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SPhotoContainer = css`
  padding-top: 360px;
  overflow: hidden;
  position: relative;
  margin-top: 2px;
  display: block;
  border-radius: 8px;
`;

export const SBtnBox = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const SPhotoBoxs = css`
  display: flex;
  height: 100%;

`;

export const SPhotoBox1 = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 50%;
`;

export const SPhoto1 = css`
  background-image: url('https://pup-review-phinf.pstatic.net/MjAyMzA4MjdfOTgg/MDAxNjkzMTExMjM3MTU2.J6h_cl_LMf_VNsbJBJzI7Vib6tH3huTcYH6x4oEuOu8g.OQ0yCussxo_ZTNP51Nkm2CvxPCVCoOw1rUc6K_qzw9Qg.JPEG/E890D138-5820-4DF8-A0CB-542A1ED35E1A.jpeg?type=m385_385_70_sharpen');
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 100%;
`;

export const SPhotoBox2 = css`
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 50%;
`;

export const SPhoto2 = css`
  background-image: url("https://pup-review-phinf.pstatic.net/MjAyMzA4MjdfMTc4/MDAxNjkzMTExMjIwNTA2.6fU_wED02C9Oj8dmaPBS91LfJYOhfAhWuM-Y0DvuRWcg.VgRMQcucLhtAHQB8XkXzD5HAJDP3cQUsNIMebgJkdEgg.JPEG/20230827_133819.jpg?type=m385_385_70_sharpen");
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 100%;
`;


export const SLocationContainer = css`
  position: absolute;
  right: 76px;
  bottom: 5px;
  left: 10px;
  text-align: left;
  
`;

export const SLocationBox = css`
  display: inline-flex;
  padding: 2px 6px;
  vertical-align: top;
  align-items: center;
  background-color: #00000080;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  color: white;

  & > span {
    margin-left: 3px;
  }
`;