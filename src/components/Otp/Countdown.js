import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Countdown = (props) => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            props.setIsDisableBtn(true)
            return;
        };
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => { clearInterval(timer) }
    }, [count]);
    const handleBtn = () => {

    }
    return (
        <div>
            <CountdownCircleTimer
                isPlaying={true}
                duration={60}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                size={50}
                strokeWidth={4}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            {/* {count} */}
        </div>
    )
}
/* class Countdown extends React.Component {
    constructor(props) {
        super(props);
        console.log('run constructor')
        this.state = {
            count: 10
        }
    }
    componentDidMount() {
        console.log('check didmount: ')
        this.timer = setInterval(() => {
            let currentCount = this.state.count;
            this.setState(
                { count: currentCount - 1 }
            )
        }, 1000)

    }
    componentDidUpdate(prevProps, prevState) {
        console.log('check didupdate: ' + 'checkprev : ', prevState, 'check state: ', this.state)
        if (this.state.count !== prevState.count && this.state.count === 0) {
            console.log('check stop')
            if (this.timer) {
                console.log('check Clear')
                clearInterval(this.timer)
            }
        }
    }
    render() {
        console.log('run render')
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
} */
export default Countdown