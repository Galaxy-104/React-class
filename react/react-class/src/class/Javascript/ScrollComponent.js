import React from "react";
import './ScrollComponent.css'

const ScrollComponent = () => {
    const setPosition = (e) => {
        document.getElementById(`content-${e.target.id}`)
        .scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            {/* 각 페이지로 이동할 버튼 */}
            <div className="ScrollComponent-tabs">
                <div className="ScrollComponent-tab" id='0' onClick={setPosition}>페이지 1</div>
                <div className="ScrollComponent-tab" id='1' onClick={setPosition}>페이지 2</div>
                <div className="ScrollComponent-tab" id='2' onClick={setPosition}>페이지 3</div>
                <div className="ScrollComponent-tab" id='3' onClick={setPosition}>페이지 4</div>
            </div>
            {/* 각 페이지 화면 */}
            <div className="ScrollComponent-container">
                <div className="ScrollComponent-content" id='content-0'>
                    <span>햇빛 좋은 날 여행을 떠나보자 !</span>
                </div>
                <div className="ScrollComponent-content" id='content-1'>
                    <span>터키에서 열기구 타고 하늘로 둥둥 ~</span>
                </div>
                <div className="ScrollComponent-content" id='content-2'>
                    <span>푸른 나무를 만끽하며 드라이브 떠나볼까?</span>
                </div>
                <div className="ScrollComponent-content" id='content-3'>
                    <span>강변에 앉아서 평온함을 느끼는 중 ...</span>
                </div>
            </div>
        </>
    )
}

export default ScrollComponent