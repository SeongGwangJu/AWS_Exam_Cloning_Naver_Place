import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiPlus} from "react-icons/bi";
import { MdMyLocation} from "react-icons/md";

function CategoryViewType(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [ isSelected, setIsSelected ] = useState(false);
    
    const ViewTypeBtnList = [
        {
            id: 1,
            name: "한식",
            path: "/"
        },
        {
            id: 2,
            name: "카페",
            path: "/02"
        },
        {
            id: 3,
            name: "양식",
            path: "/03"
        },
        {
            id: 4,
            name: "중식",
            path: "/04"
        },
        {
            id: 5,
            name: "분식",
            path: "/05"
        },
        {
            id: 6,
            name: "치킨",
            path: "/06"
        },
        {
            id: 7,
            name: "가족식사",
            path: "/07"
        },
        {
            id: 8,
            name: "놀이공원",
            path: "/08"
        },
        {
            id: 9,
            name: "놀이터",
            path: "/09"
        },
        {
            id: 10,
            name: "어린이집",
            path: "/10"
        },
        {
            id: 11,
            name: "문화재",
            path: "/11"
        },
        {
            id: 12,
            name: "자연명소",
            path: "/12"
        },
    ]

    const handleViewTypeBtnClick = (path) => {
        navigate(path)
        setIsSelected(true);
    }


    return (
            <div css={S.SContainer}>
                <div css={S.SViewTypeBtnListBoxs}>
                    {ViewTypeBtnList.map(ViewTypeBtn => (
                        <div css={S.SViewTypeBtnListBox}>
                            <button css={S.SViewTypeBtnList(location.pathname.startsWith(ViewTypeBtn.path))}
                                key={ViewTypeBtn.id}
                                onClick={() => {handleViewTypeBtnClick(ViewTypeBtn.path);
                            }}>
                            {ViewTypeBtn.name}
                            </button>
                        </div>
                    ))}

                </div>
            </div>
    );
}

export default CategoryViewType;