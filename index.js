const week = document.getElementById('week');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const currentYear = new Date().getFullYear();

const weddingDate = new Date(`22 Feb 2025 00:00:00`);

function countdownTimer() {
    const todayDate = Date.now();

    const gap = weddingDate - todayDate;

    const w = Math.floor(gap / 1000 / 60 / 60 / 24 / 7);
    const d = Math.floor((gap / 1000 / 60 / 60 / 24) % 7);
    const h = Math.floor((gap / 1000 / 60 / 60) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60);
    const s = Math.floor((gap / 1000) % 60);

    week.innerHTML = w < 10 ? "0" + w : w;
    day.innerHTML = d < 10 ? "0" + d : d;
    hour.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(() => {
    countdownTimer()
}, 1000);