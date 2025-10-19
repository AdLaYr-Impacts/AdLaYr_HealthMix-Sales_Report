const form = document.getElementById('salesForm');
const successMsg = document.getElementById('successMessage');
const errorMsg = document.getElementById('errorMessage');

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxaUF2RqZkeZa6JOF7ChKpNDKDp9yYNnygzztDyZrMAHOd5S89cmS85vUBt-xmAkdP/exec";

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(SCRIPT_URL, { method: 'POST', body: new FormData(form)})
    .then(res => {
        if (res.ok) {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        form.reset();
        setTimeout(() => { successMsg.style.display = 'none'; }, 3000);
        } else throw new Error('Network response not ok');
    })
    .catch(() => {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
        setTimeout(() => { errorMsg.style.display = 'none'; }, 3000);
    });
});