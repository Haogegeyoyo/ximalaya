import React ,{Component} from 'react'
import { NavBar } from 'antd-mobile';
import styles from './ContextBox.module.scss'
class ContentBox extends Component {
  constructor(props){
    super(props)
  }
  state = {}
  componentDidMount() {
  }
  render() {

    const {data,sourceData} = this.props 
    return (
      <div className = {styles.ContentBox}>
        <NavBar

            mode="light"
            leftContent={
              <p style={{color : '#000',fontWeight:'600'}}>{data.title} </p>
            }
            rightContent={[
              <p style={{color : '#999'}} 
                onClick={()=>{
                    
                }}
              >更多 &gt;</p>
            ]}
          ></NavBar>
          <div className={styles.content}>
              { data.type == 'list' ? (
                    <div className={styles.contentList}>{sourceData.map((item,index) =>{
                      return (<div className = {styles.listBox} key={"list_"+index}>
                                  <img   src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=726300988,2609354219&fm=26&gp=0.jpg'></img>
                                  <div className={styles.textBox}><p  className={styles.contentText}> {item.text}</p></div>
                            </div>)
                    })}</div>
              )
              :<div className={styles.contentImgList} >{sourceData.map((item,index) =>{
                  return (<div className = {styles.imgBox}  key={"unlist_"+index}>
                              <img   src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=833816062,710383742&fm=26&gp=0.jpg'></img>
                              <p className={styles.contentText}> {item.text}</p>
                        </div>)
              })
              }</div>}
          </div>
        </div>
    )
  }
}


export default ContentBox  