import React from "react";

import Button from "./Button";

export class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            passed: 0,
            lastTic: 0
        }
        this.startToggle = this.startToggle.bind(this);
        this.stop = this.stop.bind(this);
        this.tic = this.tic.bind(this);
    }
    startToggle() {
        if (!this.interval) {
            this.interval = setInterval(this.tic, 1000)
        }
        this.setState({
            running: !this.state.running,
            lastTic: Date.now()
        })
        
    }
    stop() {
        this.interval = null;
        this.setState({
            running: false,
            lastTic: 0,
            passed: 0
        })
    }
    // componentDidMount() {
    //     this.interval = setInterval(this.tic, 1000)
    // }
    
    tic() {
        if (this.state.running) {
            let now = Date.now();
            let diff = now - this.state.lastTic;
            this.setState({
                passed: this.state.passed + diff,
                lastTic: now
            })
        }else return
        
    }

    format(milliseconds) {
       let totalSec = Math.floor(milliseconds/1000);
       let min = Math.floor(totalSec / 60);
       let sec = totalSec % 60;

       return `${min > 9 ? min : "0" + min} : ${sec > 9 ? sec : "0" + sec}`
    }

    render() {
        return (
            <div className="stop-watch">
                <span className="timer">{this.format(this.state.passed)}</span>
                <Button className="start" btnType={ this.state.running ? "pause" : "play_arrow"} onClick={this.startToggle}/>
                <Button className="stop" btnType="stop" onClick={this.stop}/>
            </div>
        )
    }
} 