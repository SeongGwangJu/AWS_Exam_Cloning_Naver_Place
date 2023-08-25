import { css } from "@emotion/react";

export const SCommon = css`
    * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    *::-webkit-scrollbar{
        border: none;
        width: 5px;
        background-color: #dbdbdb40;

    }
    *::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #99999970;
    }

    button {
        background-color: transparent;
        border: none;
        
    }
`;