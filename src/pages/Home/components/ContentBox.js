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
                    <div className={styles.contentList}>{sourceData.map(item =>{
                      return (<div className = {styles.listBox}>
                                  <img   src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F5714852882%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg'></img>
                                  <div className={styles.textBox}><p  className={styles.contentText}> {item.text}</p></div>
                            </div>)
                    })}</div>
              )
              :<div className={styles.contentImgList} >{sourceData.map(item =>{
                  return (<div className = {styles.imgBox}>
                              <img   src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F5714852882%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg'></img>
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