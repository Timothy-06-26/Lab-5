const audio = document.querySelector('#beachtrack');
const photo = document.querySelector('#beach_photo');
const playbackStatus = document.querySelector('#playback_status')


//Play or pause will also play or pause the photo animation.

audio.addEventListener('play', () => {
    document.body.classList.add('playing');
    playbackStatus.textContent = 'Playing . Click and explore the image while listening.';

});
audio.addEventListener('pause', () => {
    document.body.classList.remove('playing');
    playbackStatus.textContent = 'Paused . The animation has stopped as well.';
});
audio.addEventListener('ended', () => {
document.body.classList.remove('playing');
playbackStatus.textContent = 'Finished . Press play to walk through the beach once more.';
});

function motionEnabled() {
    return !reducedMotion.matches;
}


//Pointer used to create a parallax effect
scene.addEventListener('pointermove', event => {
    if (motionEnabled () || event.pointerType === 'touch') return;
    const bounds = scene.getBoundingClientRect();
    scene.style.setProperty('--x', `${((event.clientX - bounds.left) / bounds.width - .5) * 12}px`)
    scene.style.setProperty('--y', `${((event.clientY - bounds.top) / bounds.height - .5) * 8} px `);   
    }
}