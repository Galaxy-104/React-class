import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Button from './class/Javascript/Button';
import Sidebar from './questions/question6/Sidebar';

const menus = [
  {
    icon: '♜',
    title: 'HOME'
  },
  {
    icon: '♞',
    title: 'ABOUT'
  },
  {
    icon: '☻',
    title: 'SETTING'
  },
  {
    icon: '♜',
    title: 'HOME'
  },
  {
    icon: '♞',
    title: 'ABOUT'
  },
  {
    icon: '☻',
    title: 'SETTING'
  }
]

class App extends Component{

  constructor(props){
    super(props)
    this.selectSidebar = React.createRef()
  }

  state = {
    toggleSidebar: false,
    count: 0
  }

  toggleSidebar = () => {
    this.setState({ toggleSidebar: !this.state.toggleSidebar})
  }
  closeSidebar = (e) => {
    if(this.state.toggleSidebar && !e.target.classList.contains(this.selectSidebar.current)){
      
      // this.setState({ toggleSidebar: false })
      this.setState({ count: this.state.count +1})
    }
  }
  componentDidMount(){
    window.addEventListener('click', this.closeSidebar)
  }
  // componentWillUnmount(){
  //   window.removeEventListener('click', )
  // }

  render(){
    const { toggleSidebar, count } = this.state
    console.log(count)
    console.log(this.selectSidebar)
    return (
      <div className='App'>
        <Button handleClick={this.toggleSidebar}>사이드바</Button>
        <Sidebar open={toggleSidebar} select={this.selectSidebar}>
          {menus.map((menu, id) => {
            return <div className='menu' key={id} onClick={this.toggleSidebar}>{menu.icon} {menu.title}</div>
          })}
        </Sidebar>
      </div>
    )
  }
}


export default App;