import { css } from "@emotion/react";

export const SCommon = css`
    * {
    box-sizing: border-box;
    }

    *::-webkit-scrollbar{
        border: none;
        width: 3px;

    }
    *::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #dbdbdb;
    }
`;