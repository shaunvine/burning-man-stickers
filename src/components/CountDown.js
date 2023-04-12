// Countdown from TomDoesTech YouTube Video: https://www.youtube.com/watch?v=VNTom2Gtn8s

import styled from "styled-components";
import { useEffect, useState } from "react";

const CountDown = () => {
  const [hideClock, setHideClock] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("09/02/2023 21:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      // if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
      //   setBurnTime(true);
      // } else {
      //   setShowClock(false);
      // }

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setHideClock(true);
      }

      // var showClock = d > 0 && h > 0 && m > 0 && s > 0;
      // var burnTime = d <= 0 && h <= 0 && m <= 0 && s <= 0;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Currently when the clock is <= zero the clock is hidden and "Fuck your burn" is shown

    // If the clock is > zero. Then show "The man burns in:"" and the countdown clock

    // If the clock is <= zero: Then show "Fuck your burn!"" and hide clock

    <Wrapper>
      {hideClock ? (
        <div>
          <h3 className="timer-heading">Next year was better</h3>
        </div>
      ) : (
        <div className="clock-container">
          <span className="heading-container">
            <span className="timer-heading">The Man Burns In</span>
          </span>
          <div className="timer-wrapper">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label">Days</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Hours</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clock-container {
    border: solid 1px white;
    border-radius: 3px;
    padding: 0.25rem;
  }

  .timer-heading {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0.75rem;
    color: black;
    font-size: 1.25rem;
    font-weight: 200;
  }

  .timer-wrapper {
    padding: 0.25rem;
  }

  .timer-inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0.75rem;
    color: black;
    font-weight: 200;
  }

  .divider,
  .time {
    font-size: 1rem;
  }

  .divider {
    padding: 0 0.75rem;
  }

  .timer-segment {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .label {
    font-size: 0.75rem;
  }
`;

export default CountDown;
