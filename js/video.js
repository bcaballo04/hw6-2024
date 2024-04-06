var video = document.querySelector('.video');

window.addEventListener("load", function() {
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    document.querySelector("#volume").textContent = `Volume: ${video.volume.toFixed(2)*10}`;
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.currentTime > video.duration) video.currentTime = 0;
    console.log(`Current time: ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	this.textContent = video.muted ? 'Unmute' : 'Mute';
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").textContent = `Volume is: ${video.volume.toFixed(2)*100}%`;
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove('oldSchool');
});