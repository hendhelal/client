import { useEffect, useState } from "react";

const calculateTimeLeft = (endDate) => {
    let difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;

}
function CountDown(props) {
    const [endDate] = useState(props.endDate)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));
    useEffect(() => {

        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(endDate));
        }, 1000);
        return () => clearTimeout(timer);
    });
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}
export default CountDown;