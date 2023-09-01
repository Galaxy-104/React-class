import React, { Component } from 'react'

class PhotoGallery extends Component{
    state = {
        photos: []
    }

    //구현하기
    addPhoto = () => {
        const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")
    }

    // 구현하기
    render(){
        const { photos } = this.state

        return (
            <>
            <button type='button' 
                onClick={this.addProduct}
            >
                사진 추가하기
            </button>
            <h1>포토 갤러리</h1>
            <h3>-------------------</h3>
            
        </>
        )
    }
}
export default PhotoGallery