import React from 'react';
/** @jsxImportSource @emotion/react */
import MainContainer from '../../components/MainContainer/MainContainer';
import Feed from '../../components/MainContainer/Feed/Feed';

function FeedPage(props) {
    return (
        <div>
            <MainContainer>
                <Feed/>
            </MainContainer>
        </div>
    );
}

export default FeedPage;