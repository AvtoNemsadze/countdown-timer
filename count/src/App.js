import React, {useEffect, useRef, useState } from 'react';

function App(){

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef();

  const startTimer = () =>{
    const countdownDate = new Date('December 1 2022 00:00:00').getTime();

    interval = setInterval(()=> {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
      const seconds = Math.floor((distance % (1000 * 60) / 1000));

      if(distance < 0){
        //  stop our timer 
        clearInterval(interval.current)
      }else{
        //update timer
        setTimerDays(days < 10 ? '0' + days: days);
        setTimerHours(hours < 10 ? '0' + hours: hours);
        setTimerMinutes(minutes < 10 ? '0' + minutes: minutes);
        setTimerSeconds(seconds < 10 ? '0' + seconds: seconds);
      }
    }, 1000);
  };


  useEffect(()=> {
      startTimer();
      return() =>{
        clearInterval(interval.current)
      };
  })

  return (
    <>
    <section className="timer-container">
      <section className="timer">
        <div>
          <h1>Countdown Timer</h1>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <h2><small>Days</small></h2>
          </section>
          <span>:</span>

          <section>
            <p>{timerHours}</p>
            <h2><small>Hours</small></h2>
          </section>
          <span>:</span>

          <section>
            <p>{timerMinutes}</p>
            <h2><small>Minutes</small></h2>
          </section>
          <span>:</span>

          <section>
            <p>{timerSeconds}</p>
            <h2><small>Seconds</small></h2>
          </section>
        </div>
      </section>

    <div>
    </div>
    </section>
      <Image />
    </>

  );
}


const Image = () => {
  return (
    <>
  <img src='https://launch-countdown-timer-challenge-xi.vercel.app/static/media/pattern-hills.815d688f.svg'
  style={{bottom: '0', position:'absolute',width:'100%'}} atl='image' />
   </>
  )
}

export default App;

