import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Button from './class/Javascript/Button'

function App(){
  const [images, setImages] = useState([])

  const fileInput = useRef(null)

  const handleChange = (e) => {
    const files = []
    for(const file of e.target.files){
      if(file.type.split('/')[0] === 'image'){
        files.push(file)
      }else{
        console.log('해당 파일은 이미지가 아닙니다.')
      }
    }

    setImages([...images, ...files])
  }
  
  return (
    <div className="App">
      {images !== 0 && images.map((image, id) => {
        const imgSrc = URL.createObjectURL(image)

        return (
          <img key={id} src={imgSrc} alt={image.name} width='300px' height='400px'/>
        )
      })}
      <input className='Upload' type='file' onChange={handleChange} ref={fileInput} accept='image/*' multiple/>
      <Button handleClick={() => {fileInput.current.click()}}>사진 업로드</Button>
    </div>
  )
}

export default App;