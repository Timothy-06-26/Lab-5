const audio = document.querySelector('#beachtrack');
const photo = document.querySelector('#beach_photo');
const playbackStatus = document.querySelector('#playback_status')
const scene = document.querySelector('#beach_pic');
const reducedMotion = matchMedia(
    '(prefers-reduced-motion: reduce'
);

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


    // Click for expanding ring
scene.addEventListener('click', event => {
    if (!motionEnabled()) return;
    const bounds = scene.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.left = `${event.detail ? event.clientX - bounds.left : bounds.width / 2} px`;
    ripple.style.top = `${event.detail ? event.clientY - bounds.top : bounds.height / 2}px`;
    if (scene.querySelectorAll('.ripple').length >= 8) scene.querySelector('.ripple').remove();
    scene.append(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true});
    });


