/**
 * 路由 router
 * author : haoge
 */
import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/Home'



const routerList =[{
    path:'/home',
    // component:(props)=>  <Home {...props} />
    render:(props) => <Home {...props} />
  },
  // {
  //   path :'/404',
  //   component : 'notFound' 
  // },
]

const  getRouter=(
  <div>
    <Switch>
        {
          routerList.map((item,idx)=>{
           return (<Route
                key={'route' + idx}
                path={item.path}
                render = {item.render}
                exact
              />
             ) 
          })
        }
    </Switch>
  </div>
)

export {getRouter}