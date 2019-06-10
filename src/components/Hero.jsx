import React, { Component } from 'react';
import backgroundvid from './nebula.mp4'

export default class BgVideo extends Component {
    render() {
        return (
            <video className="vid" autoPlay loop muted>
                <source src={backgroundvid} type='video/mp4' />
            </video>
        )
    }
}