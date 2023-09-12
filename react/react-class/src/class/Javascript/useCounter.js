import { useState, useEffect } from "react";

// 1초마다 자동으로 숫자를 카운트하는 로직
function useCounter(arrLength){
    const [count, setCount] = useState(0)

    // 타이머 설정 (1초마다 숫자 카운팅)
    useEffect(() => {
        const increaseCount = () => {
            clearTimeout(timerID)
            setCount(count + 1)
        }
        const timerID = setTimeout(increaseCount, 1000)
    }, [count])
    return count % arrLength // 배열의 인덱스 값 반환
}

export default useCounter