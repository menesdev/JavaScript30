/* Get the elements */
const player = document.querySelector(".player")
const video = document.querySelector(".viewer")
const progress = player.querySelector(".progress")
const progressBar = player.querySelector("-progress__filled")
const toggle = player.querySelector(".toggle")
const skipButtons = player.querySelectorAll("[data-skip]")
const ranges = player.querySelectorAll('.player__slider')

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

/* Hoop up the event listeners */

