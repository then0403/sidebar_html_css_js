let btn = document.querySelector('#btn');
let sideBar = document.querySelector('.sidebar');

btn.onclick = function() {
    sideBar.classList.toggle('active');
}