/*
 * @Author: xuliqi
 * @Date: 2020-11-13 15:08:11
 * @Description: react的视频播放器，传入视频链接即可
 */
import React, { Component } from 'react';
import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    ForwardControl,  // 前进按钮
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton
} from 'video-react';
import "video-react/dist/video-react.css";
class MyVideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const { url } = this.props
        return (
            <Player
                poster=""
            >
                <source
                    src={url}
                    type="video/mp4"
                />
                <ControlBar autoHide={false} disableDefaultControls={false}>
                    {/* <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} /> */}
                    <PlayToggle />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
                    <VolumeMenuButton />
                </ControlBar>
            </Player>
        );
    }
    
}

export default MyVideoPlayer;