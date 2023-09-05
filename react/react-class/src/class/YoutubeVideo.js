import React, { Component } from "react";
import PropTypes from "prop-types";

function YoutubeVideo(props){
    const { videoId, videoName, videoLength, videoDescription, videoAuthor, children } = props

    // children: 부모 컨포넌트의 컨텐츠를 받아올 때 사용
    // 리액트에서 제공하는 기본 기능으로 다른 이름으로 변경 불가.
    // 대문자로 시작해도 오류가 생길 수 있음.
    return (
        <div id={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <h3>작성자 - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
        </div>
    ) 
}

export default YoutubeVideo

// 데이터 타입 검증 (개발할 때 필요한 코드)
// 데이터 타입이 같지 않으면 경고창을 띄워주고 코드는 실행됨.
YoutubeVideo.propTypes = {
    videoId: PropTypes.string, 
    videoName: PropTypes.string, 
    videoLength: PropTypes.string, 
    videoDescription: PropTypes.string
}

// props 데이터 기본값 설정
YoutubeVideo.defaultProps = {
    videoAuthor: '디폴트 작성자' // videoAuthor undefined or null
}