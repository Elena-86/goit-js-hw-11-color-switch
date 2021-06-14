import colorList from '../js/color-list.js';

const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
  bodyStyle: document.querySelector('body')
};

const min = 0;
const max = colorList.length - 1;
const COLOR_CHANGE_DELAY = 2000;
let intervalId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 
const onStartButtonClick = () =>{
  intervalId = setInterval(() => {
      refs.bodyStyle.style.backgroundColor = colorList[randomIntegerFromInterval(min, max)];
  }, COLOR_CHANGE_DELAY);
  
  refs.startButton.setAttribute("disabled",true);
  
};

const onStopButtonClick = () => {
  clearInterval(intervalId);   
  
  refs.startButton.removeAttribute("disabled");
   
};
  
refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);