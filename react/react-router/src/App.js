import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, About, Post, NotFound } from './pages'

import Menu from './components/Menu';
import Sidebar from './components/Sidebar'
import Button from './components/Button'


class App extends Component{
  homeMenu = [
    {
      url: '/',
      name: "HOME"
    },
    {
      url: '/about',
      name: "ABOUT"
    },
    {
      url: '/posts',
      name: "POST"
    }
  ]

  state = {
    open: false
  }
  
  showSidebar = () => {
    this.setState({ open: !this.state.open })
  }

  render(){
    const { open } = this.state

    return (
      // <Route exact path='/' element={<Home/>}/>
      // exact path로 입력된 경로로 이동하면
      // element의 컴포넌트가 화면에 나타남.
      <div className='App'>
        <Button handleClick={this.showSidebar}>메뉴</Button>
        <Sidebar open={open}>
          <Menu menus={this.homeMenu}/>
        </Sidebar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact caseSensitive path='/about' element={<About/>}/>
          <Route path='/posts' element={<Post/>}>
            <Route path=':postId' element={<Post/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;
