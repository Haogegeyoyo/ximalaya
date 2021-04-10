import React ,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class BannerHome extends Component {
  state = {
    data: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2913941552,4215137312&fm=26&gp=0.jpg',
     'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3236318092,1369657763&fm=26&gp=0.jpg', 
     'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1304381940,2035041419&fm=26&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3973205516,2763305409&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1188210204,1181837404&fm=26&gp=0.jpg'],
    imgHeight: 176,
  }
  componentDidMount() {
  }
  render() {
    return (
        <Carousel
          slideWidth	={1}
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item,index) => (
            <a
              key={index}
              // href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                // onLoad={() => {
                //   // fire window resize event to change height
                //   window.dispatchEvent(new Event('resize'));
                //   this.setState({ imgHeight: 'auto' });
                // }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}


export default BannerHome