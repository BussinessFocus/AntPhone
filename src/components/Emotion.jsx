/*
 * @Author: xuliqi
 * @Date: 2020-11-06 11:04:39
 * @Description: 自定义表情包组件  用法：<Emotion emotion={this.handleEmotion.bind(this)} height={400}/>
 */
import React, { Component } from 'react';
import "./emotion.scss"
class Emotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗',
                '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅',
                '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀',
                '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便',
                '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖',
                '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        }
    }
    render() {
        const { height } = this.props
        return (
            <div className="ly-emotion">
                <div className="ly-emotion" >
                    <div className="emotion-box" style={{ height: height ? height : 150 + 'px' }} >
                        {
                            this.state.list.map((item,index)=>(
                                <img key={index} style={{margin:"1px 6px"}} className="emotion-item" src={`https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`} onClick={this.clickHandler.bind(this,item)} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
    clickHandler(i,e){
        e.stopPropagation()
        let emotion = `[^^${i}^^]`
        this.props.emotion(emotion)
    }
}

export default Emotion;