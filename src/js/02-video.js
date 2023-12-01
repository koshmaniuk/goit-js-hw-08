import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

function getCurrentTime(currentTime) {
    const time = currentTime.seconds;
    localStorage.setItem(TIME_KEY, JSON.stringify(time));
  };
  
player.on('timeupdate', throttle(getCurrentTime, 1000));

function updatedCurrentTime() {
  const localStorageTime = JSON.parse(localStorage.getItem(TIME_KEY));
  if (localStorageTime !== null) {
    player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)));
  }
}
updatedCurrentTime()
