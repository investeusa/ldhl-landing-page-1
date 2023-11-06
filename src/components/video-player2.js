"use client";
import React, { Component } from 'react';

class VideoPlayer2 extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/dc18b5f5-d9cd-4d50-b62e-13e5bdae39b4/players/64c68594899aeb000890db1f/player.js";
        script.async = true;
        document.head.appendChild(script);
    }

    render() {
        return (
            <div
                id="vid_64c68594899aeb000890db1f"
                style={{
                    position: 'relative',
                    width: '100%',
                    padding: '166.66666666666669% 0 0'
                }}
            >
                <img
                    id="thumb_64c68594899aeb000890db1f"
                    src="https://images.converteai.net/dc18b5f5-d9cd-4d50-b62e-13e5bdae39b4/players/64c68594899aeb000890db1f/thumbnail.jpg"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
                <div
                    id="backdrop_64c68594899aeb000890db1f"
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(5px)'
                    }}
                ></div>
            </div>
        );
    }
}

export default VideoPlayer2;
