
 
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')

const storageKey = "videoplayer-current-time";
const player = new Player(iframe);


player.on('timeupdate', throttle(data => {

    try {
        localStorage.setItem(storageKey, data.seconds);

    } catch (error) {
        console.error('Set state error: ', error.message);
    };
}, 1000));

if (localStorage.getItem(storageKey)) {

    player.setCurrentTime(localStorage.getItem(storageKey))

}





