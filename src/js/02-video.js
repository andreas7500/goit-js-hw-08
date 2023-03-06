import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const VIM_KEY = 'videoplayer-current-time';

function onPlay({ seconds }) {
  localStorage.setItem(VIM_KEY, seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(VIM_KEY));
