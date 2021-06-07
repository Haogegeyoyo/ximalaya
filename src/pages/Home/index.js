import React ,{Component} from 'react'
import { Button , SearchBar,Icon,Tabs,NavBar } from 'antd-mobile'
import Item from 'antd-mobile/lib/popover/Item'
import Input from 'antd-mobile/lib/input-item/Input'
import BannerHome from './components/banner'
import FuncList from './components/FuncList'
import ContentBox from './components/ContentBox'
import Iconfont from "../../widget/iconfont/index"
import styles from './index.module.scss'
import * as util from '../../utils'
class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      search:'',
      tabs: [
        { title: '热门', sub: '1' },
        { title: '分类', sub: '2' },
        { title: '精品', sub: '3' },
        { title: '直播', sub: '4' },
        { title: '广播', sub: '5' },
      ],
      sourceData:[{
        imgUrl:'',
        text:'古韵分流（经典影视游戏古风曲'
      },
      {
        imgUrl:'',
        text:'伦桑老大'
      },
      {
        imgUrl:'',
        text:'【古风】男神篇'
      },
      {
        imgUrl:'',
        text:'伦桑伦桑的那些年口胡的歌'
      },
      {
        imgUrl:'',
        text:'洗耳朵'
      },
      {
        imgUrl:'',
        text:'【古风】女神篇'
      },
    ]
    //   contentList:[{
    //     title : "猜你喜欢",
    //     type :　'imgList',
    //   },
    //   {
    //     title : "最新有声小说",
    //     type :　'list',
    //   },
    //   {
    //     title : "宝贝最爱听",
    //     type :　'list',
    //   },
    //   {
    //     title : "音乐好时光",
    //     type :　'imgList',
    //   },
    //   {
    //     title : "精选专题",
    //     type :　'list',
    //   },
    //   {
    //     title : "直播",
    //     type :　'list',
    //   },
    // ],
    }
  }
  async componentDidMount(){
    let res  = await util.api.getDataList({id:666})
    
     console.log("结果",res)
  }
  render(){
    let { tabs,contentList=[],sourceData} = this.state
    return (

    <div className={styles['home-page']}>

     <div className={styles['search-header']}>
       <div >
           {/* <i className="iconfont  icon-sousuo" style={{color:'#000'}}></i> */}
           <Iconfont src="icon-sousuo" style={{marginTop:10}} className="search search1"></Iconfont>
           <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-sousuo"></use>
          </svg>
        </div>
        <div className={styles['search']}>
            <SearchBar
              placeholder="点击进行搜索"
              ref={ref => this.search = ref}
              onFocus={()=>{}}
             style={{width: 220,height: 30,background:'#fff'}}
             />
        </div>
        <div>
          
        </div>
          <div > 
            <Icon type='check-circle' style={{marginRight: 15}}></Icon>
            <Icon type='check-circle'></Icon>
            {/* <Icon type='check-circle'></Icon>       */}
          </div>
     </div>
     <Tabs 
     
        tabs={tabs}
        onChange = {(tab,index)=>{
          console.log(tab,index)
        }}
     >
     </Tabs>
     <BannerHome/>
     <FuncList></FuncList>
   
     <ContentBox  data={{title:'猜你喜欢', type :'imgList' }}  sourceData={sourceData}></ContentBox>
     <ContentBox  data={{title:'最新有声小说', type :'list' }}  sourceData={sourceData}></ContentBox>
     <ContentBox  data={{title:'宝贝最爱听', type :'list' }}  sourceData={sourceData}></ContentBox>
     <ContentBox  data={{title:'音乐好时光', type :'imgList' }}  sourceData={sourceData}></ContentBox>
     <ContentBox  data={{title:'精选专题', type :'list' }}  sourceData={sourceData}></ContentBox>
     <ContentBox  data={{title:'直播', type :'list' }}  sourceData={sourceData}></ContentBox>
    
    </div>
    )
  }
}
export default Home
