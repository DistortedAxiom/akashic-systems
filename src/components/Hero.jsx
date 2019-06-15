import React, { Component } from 'react';
import backgroundvid from './black.mp4';
import './Hero.css';

export default class BgVideo extends Component {
    render() {
        return (
        <header class="video-header">
            <div class="video-body">
            <video class="video-container" autoPlay loop muted>
                <source src={backgroundvid} type='video/mp4' />
            </video>
            </div>
            <div class="overlay">
                <h1>Akashic Systems</h1>
            </div>
        </header>
        )
    }
}