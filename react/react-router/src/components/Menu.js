import React from "react";
import { Link } from "react-router-dom"
import '../styles/Menu.css'

// Link : a 태그를 생성하는 컴포넌트
// Link는 실제로 페이지 새로고침은 x

function Menu({menus}){
    return (
        <>
            {menus.length !== 0 && menus.map((menu, id) => {
                return (
                    // to에 적용된 링크로 이동.
                    <Link key={id} to={menu.url} className="menu-item">{menu.name}</Link>
                )
            })}
        
            
        </>
    )
}

export default Menu