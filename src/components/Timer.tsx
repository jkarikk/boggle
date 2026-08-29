import {useEffect, useRef, useState} from "react";

const Timer = ({isGameStarted}: {isGameStarted: boolean}) => {
    const Ref = useRef<number | undefined>(undefined);
    const [timer, setTimer] = useState('00:00');

    const getDeadTime = (minutes: number, seconds: number) => {
        let deadline = new Date();
        if (minutes) deadline.setMinutes(deadline.getMinutes() + minutes);
        if (seconds) deadline.setSeconds(deadline.getSeconds() + seconds);
        return deadline;
    };

    const getTimeRemaining = (e: Date) => {
        const total = Date.parse(e.toString()) - Date.parse(new Date().toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total,
            minutes,
            seconds
        };
    };

    useEffect(() => {
        if (isGameStarted) {
            clearTimer(getDeadTime(2, 0))
        } else {
            clearInterval(Ref.current);
            setTimer('02:00')
        }
    }, [isGameStarted]);

    const startTimer = (e: Date) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
            );
        } else {
            console.log('stop');
        }
    };

    const clearTimer = (e: Date) => {
        setTimer('02:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    return(
        <div className='timer'>
            {timer}
        </div>
    )
};

export default Timer;