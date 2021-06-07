import React ,{Component} from 'react'
import { Carousel, Icon, WingBlank } from 'antd-mobile';
import styles from './FuncList.module.scss'
import IconFont from "../../../widget/iconfont"
class FuncList extends Component {
  state = {
    list:[{
      icon :'icon-jiangbei',
      lable:'排行榜'
    },{
      icon :'icon-starton',
      lable:'精品'
    },
    {
      icon :'icon-huiyuan',
      lable:'巅峰会员'
    },{
      icon :'icon-address',
      lable:'听清远'
    },{
      icon :'icon-yinxiang',
      lable:'小雅音响'
    },{
      icon :'icon-biaoge',
      lable:'听单'
    },{
      icon :'icon-ziyuan170',
      lable:'今日必听'
    },{
      icon :'icon-erji',
      lable:'边听边读'
    },{
      icon :'icon-remen',
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
                  {/* <Icon type={item.icon}></Icon> */}
                  <IconFont src={item.icon}></IconFont>
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