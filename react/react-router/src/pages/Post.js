import React from "react";
import { useParams, NavLink, useSearchParams, useLocation } from "react-router-dom";
// useLocation 현재 url 정보를 담고 있음.
import posts from '../PostData'
import '../styles/Post.css'

// /posts: postId
function Post(){
    // params 객체 : url 파라미터 정보
    const params = useParams()
    // 쿼리스트링을 조회하는 객체, 쿼리스트링을 바꾸는 함수
    const [searchParams, setSearchParams] = useSearchParams()

    const applyActiveColor = ({ isActive }) => (
        isActive ? {color: 'orangered'} : {})
    const changeQueryString = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({ filter }) // 화면에 보여지는 쿼리스트링 값 => filter 키
        }else{
            setSearchParams({}) // 쿼리스트링 제거
        }
    }

    // 쿼리스트링을 포함한 URL 주소를 유지해주는 컴포넌트
    const QueryNavLink = ({ to, children, ...props }) => {
        const location = useLocation() // location 객체 반환
        console.log(location)
        return <NavLink to={to + location.search} {...props}>{children}</NavLink>
    }
    const postsFiltered = posts
            .filter( post => {
                const filter = searchParams.get('filter') // 사용자 검색 키워드
                if(!filter) return true // 블로그 전체 목록
                const title = post.title.toLowerCase()
                return title.includes(filter.toLowerCase())
            })

    // 필터링된 목록에서 특정 포스트 글 선택하기
    const post = postsFiltered[params.postId] // url 파라미터(포스트 ID)로 특정 포스트 선택

    return (
        <>
            {/* 쿼리스트링을 이용한 검색 */}
            <br/>
            <input 
                className="filter-post" 
                placeholder="Search Post..."
                onChange={changeQueryString}
                value={searchParams.get('filter') || ''} 
            />

            {/* 특정 블로그 포스트 */}
            {post ?
            <div className="post-container">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <span>{post.created}</span>
            </div>
            : <h1>POST PAGE</h1>}

            {/* 블로그 포스트 전체 목록 */}
            {postsFiltered
            .map( (post, id) => {
                return (
                    <QueryNavLink 
                        key={id} 
                        to={`/posts/${id}`} 
                        className="post-item"
                        style={applyActiveColor}>{post.title}</QueryNavLink>
                )
            })}
        </>
        
    )
}

export default Post
            
