
// import throttle from 'lodash.throttle';
//   const iframe = document.querySelector('iframe');

player.on('timeupdate', _.throttle(function (data) {
    localStorage.setItem(storage, data.seconds);
}, 1000),
);

const saveTime = JSON.parse(localStorage.getItem(storage));

if (saveTime !== null) {
    player.setCurrentTime(saveTime);
};


player.on('play', player.on);










const remove = 'videoplayer-current-time' => {
    try {
        localStorage.removeItem('videoplayer-current-time');
    } catch (error) {
        console.log('Remove item error: ', error.message); } };

export default { save, load, remove, };