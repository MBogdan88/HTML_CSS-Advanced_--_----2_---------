let modal = document.querySelector('#myModal');

let buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => button.addEventListener('click', (e) => {showmap(e)}));

function showmap(e) {
    let map = e.target.nextElementSibling;
    let modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = map.outerHTML;
    modal.style.display = "block";
}

document.querySelector(".close").addEventListener('click', function() {
    modal.style.display = "none";
});







