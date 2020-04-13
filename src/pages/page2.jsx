import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
// import WxImageViewer from 'react-wx-assets-viewer';
import { PhotoProvider, PhotoConsumer, PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/index.css';

// const PhotoSlider = PhotoProvider.PhotoSlider

class Page1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imags: [
        "http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg"
      ]
    }
  }
  setVisible() {

  }
  setVisibleClose() {

  }
  setPhotoIndex(i) {
    // console.log(i)
    this.setState({
      photoIndex: i
    })
  }
  render() {
    // const {
    //   imags,
    //   index,
    //   isOpen
    // } = this.state;
    return (
      <div>

        <Button onClick={this.setVisible.bind(this)}>打开</Button>
        <PhotoSlider
          images={this.state.imags.map(item => ({ src: item }))}
          visible={this.state.visible}
          onClose={this.setVisibleClose.bind(this)}
          index={this.state.photoIndex}
          onIndexChange={this.setPhotoIndex.bind(this)}
        />

        <WingBlank>
          <WhiteSpace />
          <Button type="primary">default</Button>
          <WhiteSpace />
        </WingBlank>


        {/* <div className="app">
          <div className="img-list">
            <button onClick={this.openViewer.bind(this, 0)}>点击打开图片</button>
            {
              this.state.imags.map((item, index) => {
                return <div className="img" key={item}>
                  <img src={item} alt="" onClick={this.openViewer.bind(this, index)} width="100%" height="auto" className="" />
                </div>
              })
            }
          </div>
          {
            isOpen ? <WxImageViewer onClose={this.onClose} urls={this.state.imags} index={index} /> : ""
          }
        </div> */}

        {/* <PhotoProvider>
          {imags.map((item, index) => (
            <PhotoConsumer key={index} src={item} intro={null}>
              <img src={item} alt="" />
            </PhotoConsumer>
          ))}
        </PhotoProvider> */}

      </div>
    );
  }
  onClose = () => {
    this.setState({
      isOpen: false
    })
  }

  openViewer(index) {
    this.setState({
      index,
      isOpen: true
    })
  }
}

export default Page1;
