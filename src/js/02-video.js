import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(currentTimeUpdate, 1000));

function currentTimeUpdate(evt) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(evt.seconds));
};

const currentTimeContinue = localStorage.getItem(STORAGE_KEY);
if (currentTimeContinue) {
    player.setCurrentTime(currentTimeContinue);
};