import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

      const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storage = "videoplayer-current-time";
      

player.on('timeupdate', _.throttle(function (data) {
    localStorage.setItem(storage, data.seconds);
}, 1000),
);

const saveTime = JSON.parse(localStorage.getItem(storage));

if (saveTime !== null) {
    player.setCurrentTime(saveTime);
};




player.on('play', player.on);

