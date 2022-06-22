'use strict'

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const namesOfDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'Пятниця',
  'Субота',
];

const clock = document.querySelector('.digital-clock');
const date = document.querySelector('.date');
const day = document.querySelector('.date-day');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const arrowSec = document.querySelector('.clock-seconds__arrow');
const arrowMin = document.querySelector('.clock-minutes__arrow');
const arrowHour = document.querySelector('.clock-hours__arrow');

function getActiveTime() {
    const time = new Date();
    // console.log(time);
    getYear(time);
    getMonth(time);
    getDay(time);
    getDate(time);
    getTime(time);
    changeArrowSecLocation(time);
    changeArrowHourLocation(time);
    changeArrowMinLocation(time);
}

setInterval(getActiveTime, 1000);

function getYear(time) {
    year.textContent = time.getFullYear();
}

function getMonth(time) {
    month.textContent = namesOfMonth[time.getMonth()];
}

function getDay(time) {
    day.textContent = namesOfDay[time.getDay()];
}

function getDate(time) {
    date.textContent = time.getDate();
}

function getTime(time) {   
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    clock.textContent = `Поточний час ${hours} : ${minutes} : ${seconds}`;
}

function changeArrowSecLocation(time) {
  arrowSec.style.transform = `rotate(${time.getSeconds() * 6}deg)`;
}

function changeArrowMinLocation(time) {
  arrowMin.style.transform = `rotate(${
    time.getMinutes() * 6 + time.getSeconds() * 0.1
  }deg)`;
}

function changeArrowHourLocation(time) {
  arrowHour.style.transform = `rotate(${
    time.getHours() * 30 + time.getMinutes() * 0.5
  }deg)`;
}