import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { BsTicket } from "react-icons/bs"
import { useLocation, useNavigate } from 'react-router-dom';


function CustomViewType(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const [ isSelected, setIsSelected ] = useState(false);
    
    const ViewTypeBtnList = [
        {
            id: 1,
            name: "전체",
            path: "/feed"
        },
        {
            id: 2,
            name: "팔로잉",
            path: "/timeline"
        },
        {
            id: 3,
            name: "+ 관심지역",
            path: "feed/review"
        }
    ]

    const handleViewTypeBtnClick = (path) => {
        navigate(path)
        setIsSelected(true);
    }

    return (
        <div css={S.SContainer}>
            <div css={S.SViewTypeBtnListBox}>
            {ViewTypeBtnList.map(ViewTypeBtn => (
                <button css={S.SViewTypeBtnList(location.pathname.startsWith(ViewTypeBtn.path))}
                    key={ViewTypeBtn.id}
                    onClick={() => {handleViewTypeBtnClick(ViewTypeBtn.path);
                }}>
                {ViewTypeBtn.name}
                </button>
            ))}
            </div>
            <div>

            </div>
        </div>
    );
}

export default CustomViewType;