import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal';

const TimerChallange = ({ title, targetTime }) => {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset() {

        setTimeRemaining(targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 1);
    }

    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} remainingTime={timeRemaining} onReset={handleReset} />
            <section className='challenge'>
                <h2>{title}</h2>
                Remaining Time: {(timeRemaining / 1000).toFixed(2)}
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallange
