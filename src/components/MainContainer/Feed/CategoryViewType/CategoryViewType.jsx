import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { GrPrevious, GrNext} from "react-icons/gr";

function CategoryCategory(props) {


    // for 카테고리 버튼의 Active Style 변경
    // let selectedId = 0;
    const [ selectedId, setSelectedId ] = useState(0);
    // const [ isSelected, setIsSelected ] = useState(false);

    // for 스크롤 버튼의 Visible값 변경
    const [ isPreviousButtonsVisible, setIsPreviousButtonsVisible ] = useState(false);
    const [ isNextButtonsVisible, setIsNextButtonsVisible ] = useState(true);
    const [ scrollValue, setScrollValue ] = useState(0);
    //버튼의 리스트 관리
    const CategoryBtnList = [
        {   id: 1,
            name: "한식",
        },
        {   id: 2,
            name: "카페",
        },
        {   id: 3,
            name: "양식",
        },
        {   id: 4,
            name: "중식",
        },
        {   id: 5,
            name: "분식",
        },
        {   id: 6,
            name: "치킨",
        },
        {    id: 7,
            name: "가족식사",
        },
        {    id: 8,
            name: "놀이공원",
        },
        {    id: 9,
            name: "놀이터",
        },
        {    id: 10,
            name: "어린이집",
        },
        {    id: 11,
            name: "문화재",
        },
        {    id: 12,
            name: "자연명소",
        },
        {    id: 13,
            name: "일식",
        },
        {    id: 14,
            name: "뷔페",
        },
        {    id: 15,
            name: "물놀이",
        },
        {    id: 16,
            name: "숙박",
        },
        {    id: 17,
            name: "피크닉",
        },
        {    id: 18,
            name: "등산",
        },
        {    id: 19,
            name: "레저",
        },
        {    id: 20,
            name: "액티비티",
        },
        {    id: 21,
            name: "트레킹",
        },
        {    id: 22,
            name: "체험관광",
        },
    ]


    //버튼의 위치를 어림잡아주는 함수
    const calculateScrollValue = (id) => {
        let sum = 0;
        for (let i = 0; i < id; i++) {
            sum += CategoryBtnList[i].name.length;
        }
        let value = 14 + sum * 14 + id * 33.33;
        return value;
    }
    //오른쪽 버튼의 visible 상태 update를 위해 최대스크롤 값을 구함
    const maxScrollValue = calculateScrollValue(CategoryBtnList.slice(-1)[0].id);

    //커서를 올리면 현재 스크롤의 정도에 따라 버튼 Visible상태를 변하게 함.
    const handleMouseEnter = () => {
        if(scrollValue < 360) {
            setIsPreviousButtonsVisible(false);
        } else {
            setIsPreviousButtonsVisible(true);
        }
        
        if((maxScrollValue - scrollValue) < 360) {
            setIsNextButtonsVisible(false);
        } else {
            setIsNextButtonsVisible(true);
        }
    };
    
        //여기서부터 클릭이벤트 //

    //카테고리
    const handleCategoryBtnClick = (id, name) => {
        //클릭시스타일 변경
        setSelectedId(id);
        
        //클릭한 카테고리가 중앙에 위치하도록 스크롤을 옮김
        //클릭된 값의 좌표가 중앙을 넘으면 값이 변한다
        if(calculateScrollValue(id) > 360) {
            setScrollValue(calculateScrollValue(id));
            setIsPreviousButtonsVisible(true);
        } else {
            setScrollValue(-(calculateScrollValue(id)-370))
            setIsPreviousButtonsVisible(false);
        }
        
        //호버 이벤트없이도 버튼을 누르는 즉시 변경하기위해
        //여기에서도 Visible 상태를 수정함
        if((maxScrollValue - calculateScrollValue(id)) < 360) {
            setIsNextButtonsVisible(false);
        } else {
            setIsNextButtonsVisible(true);
        }
    }

    //커서가 떠나면 무조건 버튼이 사라짐
    const handleMouseLeave = () => {
        setIsPreviousButtonsVisible(false);
        setIsNextButtonsVisible(false);
    };

    //버튼 클릭시 왼쪽 또는 오른쪽으로 720px만큼 이동
    const handlePreviousBtnClick = () => {
        setScrollValue(scrollValue - 720);
    }
    const handleNextBtnClick = () => {
        setScrollValue(scrollValue + 720);
    }

    return (
            <div css={S.SContainer}>
                <div css={S.SCategoryBtnListBoxs}>
                    <div
                    css={S.SHiddenScrollBox(scrollValue-370)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        {CategoryBtnList.map(CategoryBtn => (
                        <div css={S.SCategoryBtnListBox}>
                            <button css={S.SCategoryBtnList(CategoryBtn.id===selectedId)}
                                key={CategoryBtn.id}
                                onClick={() => {handleCategoryBtnClick(CategoryBtn.id, CategoryBtn.name);
                            }}>
                            {CategoryBtn.name}
                            </button>
                        </div>
                        ))}
                    </div>
                    <button css={S.SPreviousBtn(isPreviousButtonsVisible)}
                    onClick={handlePreviousBtnClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        <GrPrevious />
                    </button>
                    <button css= {S.SNextBtn(isNextButtonsVisible)}
                    onClick={handleNextBtnClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        <GrNext />
                    </button>
                </div>
            </div>
    );
}

export default CategoryCategory;