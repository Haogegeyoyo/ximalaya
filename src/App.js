import React , {Component } from 'react'
import ReactDom from 'react-dom'
import {withRouter } from 'react-router-dom'
import {getRouter}  from './router'
import { Button , TabBar,Icon } from 'antd-mobile'
import Iconfont from "./widget/iconfont"

const tarBar =[
  {
    title : '首页',
    icon:'icon-wangluo',
    selectedIcon:'',
    badge:1,

  },
  {
    title : '我听',
    icon:'icon-tingshu',
    selectedIcon:'',
    badge:1,

  },
  {
    title : '发现',
    icon:'icon-faxian',
    selectedIcon:'',
    badge:1,

  },
  {
    title : '我的',
    icon:'icon-wode-F',
    selectedIcon:'',
    badge:1,

  },

]
class App extends Component{
  
  render(){
    console.log('app',getRouter)
    return (
        <div style={{height:'100%',background:'#fff'}}> 
            {/* 路由配置渲染 */}
            {getRouter}
          <div style={{width:'100%' ,position:'fixed',bottom:0}}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              tabBarPosition="bottom"
            
            >
            {tarBar.map((item,index)=>{
              return (
                <TabBar.Item
                key ={'tabBar' + index}
                title = {item.title}
                icon ={ <Iconfont src={item.icon} />}
                onPress={() => {
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                }}
              >
              </TabBar.Item>
              )
            })}
              
            </TabBar>
          </div>
        </div>
      )
  }
}
App = withRouter(App)
export default App
