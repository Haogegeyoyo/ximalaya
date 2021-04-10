import React ,{Component} from 'react'
import { Carousel, Icon, WingBlank } from 'antd-mobile';
import styles from './FuncList.module.scss'
class FuncList extends Component {
  state = {
    list:[{
      icon :'check-circle',
      lable:'排行榜'
    },{
      icon :'check-circle',
      lable:'精品'
    },
    {
      icon :'check-circle',
      lable:'巅峰会员'
    },{
      icon :'check-circle',
      lable:'听清远'
    },{
      icon :'check-circle',
      lable:'小雅音响'
    },{
      icon :'check-circle',
      lable:'听单'
    },{
      icon :'check-circle',
      lable:'今日必听'
    },{
      icon :'check-circle',
      lable:'边听边读'
    },{
      icon :'check-circle',
      lable:'热门分享'
    },
  ]
  }
  componentDidMount() {
  }
  render() {
    const {list = []} = this.state 
    return (
      <div className = {styles.FuncListPage}>
        <div className={styles.iconContent}>
          {list.map((item,index)=>{
            return (
                <div  key={'iconBox' + index} className = {styles.iconBox}>            
                  <Icon type={item.icon}></Icon>
                  <p>{item.lable}</p>
                </div>
            )
          })}
        </div>
      </div>
    )
  }
}


export default FuncList  