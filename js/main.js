'use strict';

{
  const timer=document.getElementById('timer');
  const start=document.getElementById('start');
  const stop=document.getElementById('stop');
  const reset=document.getElementById('reset');
  const min=document.getElementById('min');
  const sec=document.getElementById('sec');
  const idea=document.getElementById('idea');

  let startTime;
  let timeoutId;
  let elapsedTime=0;
  let mm=0;
  let ss=0;
  let one;
  let two;
  
  function countUp(){
    const d=new Date(Date.now()-startTime+elapsedTime);
    const m=String(d.getMinutes()).padStart(2, '0');
    const s=String(d.getSeconds()).padStart(2, '0');
    mm=d.getMinutes();
    ss=d.getSeconds();
    timer.textContent=`${m}:${s}`;

    timeoutId=setTimeout(()=>{
      countUp();
    }, 10);
  }

  function setButtonStateInitial(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
    min.classList.remove('inactive');
    sec.classList.remove('inactive');
    idea.classList.remove('inactive');
  }

  function setButtonStateRunning(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
    min.classList.add('inactive');
    sec.classList.add('inactive');
    idea.classList.add('inactive');
  }

  function setButtonStateStopped(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
    min.classList.remove('inactive');
    sec.classList.remove('inactive');
    idea.classList.remove('inactive');
  }

  setButtonStateInitial();


  start.addEventListener('click', ()=>{
    if(start.classList.contains('inactive')===true){
      return;
    }
    setButtonStateRunning()
      startTime=Date.now();
      start.classList.add('inactive');
      countUp();
  });

  stop.addEventListener('click', ()=>{
    if(stop.classList.contains('inactive')===true){
      return;
    }
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime+=Date.now()-startTime;
  });

  reset.addEventListener('click', ()=>{
    if(reset.classList.contains('inactive')===true){
      return;
    }
    setButtonStateInitial();
    timer.textContent='00:00';
    elapsedTime=0;
    mm=0;
    ss=0;
  });

  min.addEventListener('click', ()=>{
    if(min.classList.contains('inactive')===true){
      return;
    }
    elapsedTime+=60000;
    mm+=1;
    one=String(mm).padStart(2, '0');
    two=String(ss).padStart(2, '0');
    timer.textContent=`${one}:${two}`;
  });

  sec.addEventListener('click', ()=>{
    if(sec.classList.contains('inactive')===true){
      return;
    }
    ss+=10;
    if(ss>=60){
      ss=0;
      one=String(mm).padStart(2, '0');
      two=String(ss).padStart(2, '0');
      timer.textContent=`${one}:${two}`;
      elapsedTime-=50000;
      return;
    }
    elapsedTime+=10000;
    one=String(mm).padStart(2, '0');
      two=String(ss).padStart(2, '0');
      timer.textContent=`${one}:${two}`;
  });

  idea.addEventListener('click', ()=>{
    if(idea.classList.contains('inactive')===true){
      return;
    }
    elapsedTime+=2700000;
    mm+=45;
    one=String(mm).padStart(2, '0');
    two=String(ss).padStart(2, '0');
    timer.textContent=`${one}:${two}`;
  });



}