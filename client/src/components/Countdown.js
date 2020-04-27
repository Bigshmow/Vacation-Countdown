import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import '../styles.css';

export const Countdown = props => {
    const handleTime = () => {
        const leaveDate = new Date('Feb 28, 2020 13:43:00 -0800')
        const diff = leaveDate - +new Date();
        let timeLeft = {};
        
        if (diff > 0) {
            timeLeft = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60)
            };
        }
        return timeLeft;
    }
    
    const [timeLeft, setTime] = useState(handleTime());
    
    useEffect(() => {
      setTimeout(() => {
          setTime(handleTime());
      }, 1000);
    });
    
    const timer = [];
    
    Object.keys(timeLeft).forEach((interval,i) => {
        if (!timeLeft[interval]) {
          return;
        }
      
        timer.push(
          <span key={i}>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

      return (
        <Col xs='12'>
            <h1>Countdown to Vallarta!!</h1>
            <h3>{timer.length ? timer : <span>Puerto Vallarta here we come!!</span>}</h3>
        </Col>
      )
}