import React, { Component } from 'react';
import backgroundvid from './black.mp4';
import './Hero.css';

export default class BgVideo extends Component {
    render() {
        return (
            <video class="video-container" autoPlay loop muted>
                <source src={backgroundvid} type='video/mp4' />
            </video>
        )
    }
}